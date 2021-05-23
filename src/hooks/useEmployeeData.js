import { useState, useEffect } from "react";
import axios from "axios";

const useEmployeeData = () => {
  const [employeesData, setEmployeesData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [positionData, setPositionData] = useState([]);
  const [departmentsData, setDepartmentsData] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8000/api/v1/employee/",
    })
      .then((res) => {
        const { employees } = res.data;

        // 1. Filter the data
        const locations = employees.map((employeeData) => {
          return {
            value: employeeData.location,
            label: employeeData.location,
          };
        });
        const positions = employees.map((employeeData) => {
          return {
            value: employeeData.position,
            label: employeeData.position,
          };
        });
        const departments = employees.map((employeeData) => {
          return {
            value: employeeData.department,
            label: employeeData.department,
          };
        });

        // 2. Setting data to hooks
        setLocationData(locations);
        setPositionData(positions);
        setDepartmentsData(departments);

        setEmployeesData(employees);
      })
      .catch((error) => {
        setFetchError(error.message);
      });
  }, []);

  return {
    employeesData,
    locationData,
    positionData,
    departmentsData,
    fetchError,
  };
};

export default useEmployeeData;
