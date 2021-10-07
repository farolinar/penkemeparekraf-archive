import React, { useEffect, useState } from "react";
import "./TextAreaWithCounter.scss";

const TextAreaWithCounter = ({
    name = "",
    value = "",
    onChange = () => {},
    maxLength=false,
    minLength=false,
    rows="10"
}) => {
    const [numberOfChars, setNumberOfChars] = useState(0)
    const [validation, setValidation] = useState("")
    useEffect(() => {
        setNumberOfChars(value.length);
    }, [value])
    return(<div className="textarea-counter-wrapper">
        <textarea 
            name={name}
            defaultValue={value}
            onChange={(e) => {
                let msg = ""
                if(minLength && e.target.value.length < minLength) {
                    msg = `Panjang teks minimal ${minLength} karakter`
                }
                setValidation(msg)
                onChange(e, msg)
                // setNumberOfChars(e.target.value.length);
            }}
            maxLength={maxLength}
            rows={rows}
        ></textarea>
        {validation && <span className="info-left">{validation}</span>}
        {maxLength && <span className="info-right">{numberOfChars}/{maxLength}</span>}
    </div>)
}

export default TextAreaWithCounter;
