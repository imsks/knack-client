import React from "react";
import PageHeader from "../components/PageHeader";

const Homepage = () => {
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

              <div className="cards">
                <div className="cards__item">
                  <div className="cards__item__content"></div>

                  <div className="card__actions"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
