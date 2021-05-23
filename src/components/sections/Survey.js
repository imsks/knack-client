import { INPUT_FIELD_TYPES } from "../../utils/constants";
import { FormLabelInputGroup, FormLabelSelectGroup } from "../FormElements";

export const SurveyInputFields = ({
  setInputLabel,
  setInputType,
  handleAddInputFields,
}) => {
  return (
    <form className="createsurvey__container__form">
      <FormLabelInputGroup
        label="Enter input label"
        inputType="email"
        handleInput={(event) => setInputLabel(event.target.value)}
      />
      <FormLabelSelectGroup
        label="Enter input type"
        handleSelectOption={(selectedData) => setInputType(selectedData.value)}
        options={INPUT_FIELD_TYPES}
      />
      <button
        className="btn btn-sm createsurvey__container__form__button"
        onClick={handleAddInputFields}
      >
        Add field
      </button>
    </form>
  );
};

export const SurveyInput = ({ allInputFields, handleDeleteInputFields }) => {
  return (
    allInputFields.length > 0 &&
    allInputFields.map((inputField, key) => {
      const { inputLabel, inputType } = inputField;

      return (
        <div className="createsurvey__container__preview" key={key}>
          <div className="createsurvey__container__preview__item">
            <FormLabelInputGroup
              label={inputLabel}
              inputType="text"
              disabled={true}
            />
            <FormLabelInputGroup
              label={inputType}
              inputType="text"
              disabled={true}
            />
            <button
              className="btn btn-sm createsurvey__container__form__button"
              onClick={() => handleDeleteInputFields(key)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    })
  );
};
