import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let isScheduelMeetingSuccess = false;

export const handleScheduelMeeting = (event) => {
  event.preventDefault();

  if (isScheduelMeetingSuccess) {
    isScheduelMeetingSuccess = !isScheduelMeetingSuccess;

    return toast.error("Slot not available!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
    });
  }

  isScheduelMeetingSuccess = !isScheduelMeetingSuccess;

  return toast.success("Slot book!", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
  });
};

export const handleSortBy = (sortBy, selectedData, employeesData) => {
  const { label } = selectedData;

  let filteredData;

  switch (sortBy) {
    case "location":
      filteredData = employeesData.filter(
        (employeeData) => employeeData.location === label
      );
      break;

    case "position":
      filteredData = employeesData.filter(
        (employeeData) => employeeData.position === label
      );
      break;

    case "department":
      filteredData = employeesData.filter(
        (employeeData) => employeeData.department === label
      );
      break;

    default:
      break;
  }

  return filteredData;
};
