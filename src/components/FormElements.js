import React from "react";
import Select from "react-select";
import { selectStyles } from "../utils/constants";

export const FormLabelInputGroup = (props) => {
  const {
    label,
    inputType,
    handleInput,
    required = false,
    multiple = false,
    disabled = false,
  } = props;

  return (
    <div className="form__group">
      <label className="form__label">{label}</label>
      <input
        type={inputType}
        className="form__input"
        onChange={handleInput}
        required={required}
        multiple={multiple}
        disabled={disabled}
      />
    </div>
  );
};

export const FormLabelSelectGroup = (props) => {
  const { label, handleSelectOption, options } = props;

  return (
    <div className="form__group">
      <label className="form__label">{label}</label>
      <Select
        closeMenuOnSelect={true}
        label={label}
        isMulti={false}
        options={options}
        onChange={handleSelectOption}
        className="form__select"
        styles={selectStyles}
      />
    </div>
  );
};
