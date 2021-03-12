import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faCircle } from '@fortawesome/free-solid-svg-icons'

import './Wheel.css';

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.spinHandler = this.spinHandler.bind(this);
  }

  spinHandler() {
    if (this.props.selectedItem === null) {

      const selectedItem = Math.floor(Math.random() * this.props.items.length); // randowmly selecting a item

      this.props.setSelectedItem(selectedItem); //setting selected item in state

      setTimeout(()=>{this.props.setShowPopup(true)}, 4300) //popup will show up 0.3s after the wheel stops rotating

      this.props.setData({...this.props.data, webClient : this.props.ip, time : new Date().toLocaleString(), spin_result_index : selectedItem});
      this.props.postData(this.props.data, this.props.setData); //posting data to spreadsheet

    } else {    

      this.props.setSelectedItem(null)
      setTimeout(this.spinHandler, 500);

    }
  }

  render() {
    const { selectedItem,items } = this.props;

    const wheelvars = {
      '--nb-item': items.length,
      '--selected-item': selectedItem,
    };

    return (  
      <div className="wheel-main">
      <div className="wheel-sub">

          <div className={`selector ${selectedItem !== null ? 'spinning' : ''}`} style={wheelvars}>

          <FontAwesomeIcon className="icon" color="#FFDDA1" icon={faMapMarker}/>

          </div>

        <div className="wheel-container">

          <div className={`wheel ${selectedItem !== null ? 'spinning' : ''}`} style={wheelvars} onClick={this.spinHandler}>

            <h2 className="spin">Spin</h2>

            {items.map((item, index) => (

              <div>
                <div className="dot-container" style={{ '--item-nb': index }}> 

                  <div className="dot-rotate">

                    <FontAwesomeIcon className="dot" color="#FFDDA1" icon={faCircle}/>
                    <FontAwesomeIcon className="dot" color="#FFDDA1" icon={faCircle}/>

                  </div>
                
                </div>
                <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
                  
                  <div className="text">{item}</div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>  
    );
  }
}

// import React from 'react';

// import './Wheel.css';

// export default class Wheel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedItem: null,
//     };
//     this.spinHandler = this.spinHandler.bind(this);
//   }

//   spinHandler() {
//     if (this.state.selectedItem === null) {
//       const selectedItem = Math.floor(Math.random() * this.props.items.length);
//       this.setState({ selectedItem });
//     } else {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
//       this.setState({ selectedItem: null });
//       setTimeout(this.spinHandler, 500);
//     }
//   }

//   render() {
//     const { selectedItem } = this.state;
//     const { items } = this.props;

//     const wheelVars = {
//       '--nb-item': items.length,
//       '--selected-item': selectedItem,
//     };
//     const spinning = selectedItem !== null ? 'spinning' : '';

//     return (
//       <div className="wheel-container">
//         <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.spinHandler}>
//           {items.map((item, index) => (
//             <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
