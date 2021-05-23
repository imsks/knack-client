import useEmployeeData from "../../hooks/useEmployeeData";
import { FormLabelSelectGroup } from "../FormElements";

export const SortByContainer = ({ onHandleSortBy }) => {
  const { locationData, positionData, departmentsData } = useEmployeeData();

  return (
    <form className="homepage__container__form">
      <FormLabelSelectGroup
        label="Sort by location"
        handleSelectOption={(value) => onHandleSortBy("location", value)}
        options={locationData}
      />
      <FormLabelSelectGroup
        label="Sort by position"
        handleSelectOption={(value) => onHandleSortBy("position", value)}
        options={positionData}
      />
      <FormLabelSelectGroup
        label="Sort by department"
        handleSelectOption={(value) => onHandleSortBy("department", value)}
        options={departmentsData}
      />
    </form>
  );
};
