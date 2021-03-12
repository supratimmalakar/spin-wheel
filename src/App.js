import './App.css';
import {useState, useEffect} from 'react'
import Wheel from './components/Wheel/Wheel'
import Popup from './components/Popup/Popup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi,faSquare, faCircle, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [ip, setIp] = useState('');
  const [data, setData] = useState({
    webClient : '',
    time : '',
    spin_result_index: ''
  });

  useEffect(()=> {

   getIp();

  },[])

  //This fuction gets the remote ip address of the client
  const getIp = async () => {
    try {
      await fetch("https://geolocation-db.com/json/f6b71820-809c-11eb-95f1-01287ca1dfdd", {method: 'GET'}).then(response => response.json()).then(data => {setIp(data.IPv4)});
    } catch (err) {
      console.log(err);
    }
  }

  // This fuction posts data to google spreadsheet

  const postData = async (data, setData) => {
    try {
      const response = await fetch("https://v1.nocodeapi.com/supratimmalakar/google_sheets/RWrQzHmbPgCtDclx?tabId=Sheet1", {
        method : "POST",
        headers : {
          'Content-Type' : 'application/json'
        }, 
        body:JSON.stringify([
          [data.webClient, data.time, data.spin_result_index]
        ]),
      }
    );
    await response.json();
    setData({...data,webClient : '', time: '', spin_result_index: ''})
    } catch(err) {
      console.log(err)
    }
  }

  // Items to be displayed in the wheel
  const items = 
    [<p><b>₹20</b> 💸</p>, 
    
    <p><b>2X</b><br/> Savings</p>, 

    <p><b>₹50</b> 💸</p>, 

    <p><b>1.5X</b><br/> Savings</p>, 

    <p><b>₹50</b> 💸</p>, 

    <p><b>2X</b><br/> Savings</p>, 

    <p><b>₹100</b> <br/> Cashback </p>, 

    <p>Better luck <br/>
    next time!</p>
    ]


  return (
    <div className="App">
      <div className="view-container">
      {showPopup ? <div className="popup-main">
      <Popup
        selectedItem={selectedItem}
        setShowPopup={setShowPopup}/>
      </div> : ""}

      <div className="top-bar">
        <div>
          <FontAwesomeIcon className="top-icon" icon={faSquare}/>
          <FontAwesomeIcon className="top-icon" icon={faCircle}/>
          <FontAwesomeIcon className="top-icon wifi-icon" icon={faWifi}/>
        </div>
      </div>
      <div className="rewards-btn">
      <FontAwesomeIcon className="back-icon" icon={faChevronLeft}/>
      <p>Your rewards</p>
      </div>

      <Wheel 
        items={items}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        setShowPopup={setShowPopup}
        data={data}
        setData={setData}
        postData={postData}
        ip={ip}
      />
      <div className="spin-msg-box">
        <h1>Spin the wheel now to <br/> get rewarded</h1>
        <p>Tap on Spin or rotate the wheel anti-clockwise and release to start spinning </p>
      </div>
      <div className="help">
        <p><b>Have a question? <a target="_blank" href="https://fampay.in/">Get Help</a></b></p>
      </div>
      </div>
    </div>
  );
}

export default App;
