import React from 'react'
import './Popup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faFrown } from '@fortawesome/free-solid-svg-icons'

export default function Popup({selectedItem, setShowPopup}) {
    const textMsg = [<p>Yay! You got ₹20 💸</p>, <p>Hurray! You doubled your savings.</p>, <p>Yay! You got ₹50 💸</p>,
                     <p>Yay! Your savings increased by 50%.</p>, <p>Yay! You got ₹50 💸</p>, <p>Hurray! You doubled your savings.</p>,
                     <p>Kaching! You got ₹100 Cashback💸</p>, <p> Better luck next time <FontAwesomeIcon icon={faFrown}/> </p>]
    return (
        <div className="popup-container">
            <div className="popup-sub">
                {textMsg[selectedItem]}
                <button className="close-btn" onClick={()=> {setShowPopup(false)}}>Close <FontAwesomeIcon icon={faTimes}/></button>
            </div>
        </div>
    )
}
