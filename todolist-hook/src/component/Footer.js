import React, { useState, useEffect } from "react";


function Footer(props) {
    const RED = "#ff0000";
    const BLUE = "#0000ff";
    const GRAY = "#678c89";
    const [color, setColor] = useState(null);

    const submitThemeColor = color => {
        setColor(color);
    }
    return (
        <div className="footer">
            <div className="vertical-center">
                <span>Choose Theme </span>
                <button onClick={() => submitThemeColor(RED)} className="dot red"/>
                <button onClick={() => submitThemeColor(BLUE)} className="dot blue" />
                <button onClick={() => submitThemeColor(GRAY)} className="dot gray" />
            </div>
        </div>
    );

}

export default Footer;