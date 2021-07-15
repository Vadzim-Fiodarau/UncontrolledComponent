import React, {useState} from "react";


type OnPropsType = {
    // on: boolean
}

function OnOff(props: OnPropsType) {

    let [on, setOn] = useState(false)


    const onStyle = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '3px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '3px',
        marginLeft: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        display: 'inline-block',
        border: '1px solid black',
        marginLeft: '3px',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                setOn(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                setOn(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

export default OnOff;
