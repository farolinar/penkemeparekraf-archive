import React from "react";
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
  selectedColor
}) => {
  return (
    <div className="radio-button-wrapper">
      <RadioGroup onChange={onChange} horizontal={horizontal}>
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
