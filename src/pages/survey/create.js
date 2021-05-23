import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import {
  SurveyInput,
  SurveyInputFields,
} from "../../components/sections/Survey";

const CreateSurvey = () => {
  const [inputLabel, setInputLabel] = useState(null);
  const [inputType, setInputType] = useState(null);
  const [allInputFields, setAllInputFields] = useState([]);

  const handleAddInputFields = (event) => {
    event.preventDefault();

    const inputFieldData = {
      inputLabel,
      inputType,
    };

    if (inputLabel && inputType) {
      setAllInputFields((allInputFields) => [
        ...allInputFields,
        inputFieldData,
      ]);
    }
  };

  const handleDeleteInputFields = (key) => {
    const filteredInputFields = allInputFields.filter(
      (inputField, indexOfAllInputFiels) => indexOfAllInputFiels !== key
    );

    setAllInputFields(filteredInputFields);
  };

  return (
    <div className="page">
      <div className="page__container">
        <div className="page__container__content">
          <div className="createsurvey">
            <div className="createsurvey__container">
              <PageHeader
                heading="Create survey"
                paragraph="Create survey and share it in minutes"
              />
            </div>

            <SurveyInputFields
              setInputLabel={setInputLabel}
              setInputType={setInputType}
              handleAddInputFields={handleAddInputFields}
            />

            <SurveyInput
              allInputFields={allInputFields}
              handleDeleteInputFields={handleDeleteInputFields}
            />

            {allInputFields.length > 0 && (
              <div className="createsurvey__container__footer">
                <button className="btn btn-sm createsurvey__container__form__button">
                  Share
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSurvey;
