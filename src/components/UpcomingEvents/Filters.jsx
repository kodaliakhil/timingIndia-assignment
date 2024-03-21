import { useContext, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import { IoIosArrowDown } from "react-icons/io";
import { Context } from "../../App";
const categories = [
  {
    id: "1",
    label: "5K",
  },
  {
    id: "2",
    label: "10K",
  },
  {
    id: "3",
    label: "Half Marathon",
  },
  {
    id: "4",
    label: "Full Marathon",
  },
];
const whens = [
  {
    id: "1",
    label: "This Week",
  },
  {
    id: "2",
    label: "This Month",
  },
  {
    id: "3",
    label: "This Year",
  },
];

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <button
      type="button"
      style={{ backgroundColor: "transparent", border: "none" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default function Filters() {
  const {
    selectedCategories,
    selectedWhens,
    setSelectedCategories,
    setSelectedWhens,
    setCityFilInp,
  } = useContext(Context);
  function addRemoveCategories(e) {
    if (e.target.checked) {
      setSelectedCategories([...selectedCategories, e.target.value]);
    } else {
      const cats = selectedCategories.filter((i) => i !== e.target.value);
      setSelectedCategories(cats);
    }
  }
  function addRemoveWhens(e) {
    if (e.target.checked) {
      setSelectedWhens([...selectedWhens, e.target.value]);
    } else {
      const cats = selectedWhens.filter((i) => i !== e.target.value);
      setSelectedWhens(cats);
    }
  }
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <div
        className="search_by_city_area"
        style={{
          boxSizing: "border-box",
          background: "rgb(255, 255, 255)",
          padding: "6px 10px 1px",
          border: "1px solid rgb(237, 237, 237)",
          marginBottom: "3%",
          borderColor: "rgb(119, 110, 98)",

          color: "rgb(232, 230, 227)",
        }}
      >
        <input
          className="ng-pristine ng-untouched ng-valid"
          type="text"
          placeholder="Search by City or Area"
          style={{
            boxSizing: "border-box",
            margin: "0px",
            border: "0px",
            padding: "4px 0px 10px",
            width: "100%",
            borderColor: "rgb(119, 110, 98)",
          }}
          onChange={(e) => setCityFilInp(e.target.value)}
        />
      </div>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <CustomToggle eventKey="0">
              <div className="d-flex align-items-center">
                <IoIosArrowDown />
                <p>Categories</p>
              </div>
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {categories.map((i) => {
                return (
                  <div key={i.id} className="d-flex align-items-center">
                    <input
                      className=""
                      id={i.id}
                      type="checkbox"
                      value={i.label}
                      onChange={addRemoveCategories}
                    />
                    <label
                      className="check-container"
                      htmlFor={i.id}
                      style={{
                        marginLeft: "10px",
                      }}
                    >
                      {i.label}
                    </label>
                  </div>
                );
              })}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <CustomToggle eventKey="1">
              <div className="d-flex align-items-center">
                <IoIosArrowDown />
                <p>When</p>
              </div>
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {whens.map((i) => {
                return (
                  <div key={i.id} className="d-flex align-items-center">
                    <input
                      className=""
                      id={i.id}
                      type="checkbox"
                      value={i.label}
                      onChange={addRemoveWhens}
                    />
                    <label
                      className="check-container"
                      htmlFor={i.id}
                      style={{
                        marginLeft: "10px",
                      }}
                    >
                      {i.label}
                    </label>
                  </div>
                );
              })}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
