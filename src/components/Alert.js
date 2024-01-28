import React from 'react'

function Alert(props) {
    return (
        props.alert.show && 
            <div id="alert" className={`alert-box }`}>
                <p style={{ color: "var(--alert-color)", margin: "5px 15px", fontWeight: 500, fontSize: "0.9rem" }}>{props.alert.type}</p>
                <div className="successmsg">
                    <img src="./images/success.png" alt="" width={"40px"} style={{ margin: "1px 5px" }} />
                    <p style={{ margin: "7px 5px", color: "#8EA0BA" }}>{props.alert.message}</p>
                </div>
            </div>
    )
}

export default Alert