// rfc->
import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btntext, setBtnText] = useState("Enable dark mode")
    const toggleStyle = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'

            })
            setBtnText("Enable dark mode");
        }
        else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'


            })
            setBtnText("Enable light mode");

        }

    }

    return (
        <div>
            <div className="container" style={myStyle}>
                <h1 className="my-3">About app</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Know more
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This project is build by Naif Khurshid.</strong> It is a Text utility app where any one can manupilate its text
                                like changing to upper case or lower case and removing extra space from the sentance.It also provide infomation like
                                number of charecters and number of words. It also provide avarage reading time of the sentance. This website is build using react js app.

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container">
                <button className="btn btn-primary my-2" onClick={toggleStyle}>{btntext} </button>
            </div>

        </div>
    )
}
