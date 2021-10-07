import React, { useEffect, useState } from "react";
import { RadioGroup, ReversedRadioButton } from "react-radio-buttons";
import "./RadioButton.scss";

const RadioButton = ({
  onChange = () => {},
  horizontal = true,
  radioButtons = [
    {
      val: "",
      text: "",
    },
  ],
  unselectedColor,
  selectedColor,
  selected=false
}) => {
  const [inputProps, setInputProps] = useState({})

  useEffect(() => {
    if(selected) {
      let temp = {...inputProps}
      temp["value"] = selected;
      setInputProps(temp)
    }
    else setInputProps({})
  }, [selected])
  
  return (
    <div className="radio-button-wrapper">
      <RadioGroup onChange={onChange} horizontal={horizontal} {...inputProps}>
        {radioButtons.map((elem) => (
          <ReversedRadioButton 
            value={elem.val} 
            rootColor={unselectedColor}
            pointColor={selectedColor}
        >
            {elem.text}
          </ReversedRadioButton>
        ))}
      </RadioGroup>
    </div>
  );
};

export default RadioButton;
