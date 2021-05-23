import { handleScheduelMeeting } from "../utils/handling.functions";

export const EmployeeCardContainer = ({ filterData }) => {
  return (
    <div className="cards">
      {filterData.map((employeeData, key) => {
        const { name, position, location, department } = employeeData;

        return (
          <EmployeeCard
            key={key}
            name={name}
            position={position}
            location={location}
            department={department}
          />
        );
      })}
    </div>
  );
};

export const EmployeeCard = ({ name, position, location, department }) => {
  return (
    <div className="cards__item">
      <div className="cards__item__content">
        <div className="cards__item__content__section">
          <h3 className="cards__item__content__heading">{name}</h3>
          <h5 className="cards__item__content__subheading">{position}</h5>
        </div>
        <div className="cards__item__content__section">
          <p className="cards__item__content__paragraph">{location}</p>
          <p className="cards__item__content__paragraph">{department}</p>
        </div>
      </div>

      <div className="cards__item__actions">
        <button
          className="btn btn-sm cards__item__actions__button"
          onClick={handleScheduelMeeting}
        >
          Schedual meet
        </button>
      </div>
    </div>
  );
};
