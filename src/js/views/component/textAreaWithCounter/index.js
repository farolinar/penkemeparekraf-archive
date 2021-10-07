import React, { useState } from "react";
import "./TextAreaWithCounter.scss";

const TextAreaWithCounter = ({
    name = "",
    value = "",
    onChange = () => {},
    maxLength=false,
    rows="10"
}) => {
    const [numberOfChars, setNumberOfChars] = useState(0)
    return(<div className="textarea-counter-wrapper">
        <textarea 
            name={name}
            defaultValue={value}
            onChange={(e) => {
                onChange(e)
                setNumberOfChars(e.target.value.length);
            }}
            maxLength={maxLength}
            rows={rows}
        ></textarea>
        {maxLength && <span>{numberOfChars}/{maxLength}</span>}
    </div>)
}

export default TextAreaWithCounter;
