import { useContext } from "react";
import Cards from "./Cards";
import Filters from "./Filters";
import { IoIosSearch } from "react-icons/io";
import { Context } from "../../App";

const UpcomingEvents = () => {
  const { setEventFilInp } = useContext(Context);

  return (
    <div>
      <h1 id="h1text" style={{ color: "#487bac", fontFamily: "inherit" }}>
        UPCOMING EVENTS
      </h1>
      <div
        style={{
          margin: "50px",
          border: "1px solid black",
          borderRadius: "10px",
          //   padding: "20px",
        }}
      >
        <div
          style={{
            padding: "20px",
          }}
        >
          <input
            className="search_for_events ng-pristine ng-untouched ng-valid"
            type="text"
            onChange={(e) => setEventFilInp(e.target.value)}
            placeholder="Search for Events"
            style={{
              boxSizing: "border-box",
              margin: "0px",
              font: "inherit",
              fontFamily: "inherit",
              lineHeight: "inherit",
              border: "0px",
              padding: "12px 5px",
              fontSize: "15px",
              fontWeight: "normal",
              borderColor: "rgb(119, 110, 98)",

              color: "rgb(232, 230, 227)",
            }}
          />
          <IoIosSearch style={{ fontSize: "20px" }} />
        </div>
        <hr />
        <div
          className="d-flex "
          style={{
            padding: "20px",
          }}
        >
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-9" style={{ marginLeft: "20px" }}>
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
