import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { EmployeeCardContainer } from "../components/cards";
import Toast from "../components/toast";
import useEmployeeData from "../hooks/useEmployeeData";
import { handleSortBy } from "../utils/handling.functions";
import { SortByContainer } from "../components/sections/Sort";

const Homepage = () => {
  const [filterData, setFilterData] = useState([]);

  const { employeesData } = useEmployeeData();

  const onHandleSortBy = (sortBy, selectedData) => {
    const filteredData = handleSortBy(sortBy, selectedData, employeesData);

    setFilterData(filteredData);
  };

  return (
    <div className="page">
      <div className="page__container">
        <div className="page__container__content">
          <div className="homepage">
            <div className="homepage__container">
              <PageHeader
                heading="All employees"
                paragraph="All employees at one place. You can book an appointment with
                  them depending on their availibility"
              />

              <SortByContainer onHandleSortBy={onHandleSortBy} />

              <EmployeeCardContainer filterData={filterData} />

              <Toast />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
