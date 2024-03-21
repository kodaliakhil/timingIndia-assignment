import ShareButton from "./ShareButton";

const EventCard = ({ cardData }) => {
  const regLastDate = new Date(cardData.registration_close);
  const eventDate = new Date(cardData.event_date);
  const eventMonth = eventDate.toLocaleString("default", {
    month: "short",
  });
  const eventDay = eventDate.toLocaleString("default", {
    day: "2-digit",
  });
  const eventYear = eventDate.toLocaleString("default", {
    year: "numeric",
  });
  const eventDateString = `${eventDay} ${eventMonth} ${eventYear}`;
  return (
    <div
      className="d-flex"
      style={{
        width: "500px",
        height: "200px",
        border: "1px solid black",
        borderRadius: "10px",
      }}
    >
      <a
        className="information_a"
        href={`https://www.ifinish.in/event_details/${cardData.shortcode}`}
        style={{
          boxSizing: "border-box",
          textDecoration: "none",
          borderColor: "rgb(119, 110, 98)",
          height: "100%",
        }}
      >
        <img
          src={cardData.event_logo}
          style={{ borderRadius: "10px", width: "200px", height: "100%" }}
        />
      </a>

      <div style={{ width: "100%", position: "relative" }}>
        <p style={{ position: "absolute", right: "30px",background:"red", padding:"5px",color:"white",fontSize:"15px",fontWeight:"bold" }}>
          {eventDateString}
        </p>

        <div
          className="ev_details"
          style={{
            boxSizing: "border-box",
            marginTop: "42px",
            borderColor: "rgb(119, 110, 98)",
          }}
        >
          <a
            className="information_a"
            href={`https://www.ifinish.in/event_details/${cardData.shortcode}`}
            style={{
              boxSizing: "border-box",
              textDecoration: "none",
              borderColor: "rgb(119, 110, 98)",
            }}
          >
            <h2
              className="homeeventname ng-binding"
              title="Alwal Runners Club  Season 2  2024"
              style={{
                boxSizing: "border-box",
                fontFamily: "inherit",
                lineHeight: 1.1,
                marginTop: "20px",
                marginBottom: "10px",
                overflow: "hidden",
                padding: "0px 0px 0px 6px",
                fontSize: "13px",
                height: "3em",
                fontWeight: 600,
                textTransform: "uppercase",
                borderColor: "rgb(119, 110, 98)",
              }}
            >
              {cardData.event_name}
            </h2>
          </a>
          <div
            className="organisers"
            style={{
              boxSizing: "border-box",
              padding: "0px 0px 0px 6px",
              marginTop: "4px",
              borderColor: "rgb(119, 110, 98)",
            }}
          >
            <div
              className="organisedby"
              style={{
                boxSizing: "border-box",
                fontStyle: "italic",
                fontSize: "10px",
                paddingTop: "4px",
                borderColor: "rgb(119, 110, 98)",
              }}
            >
              Organised By
            </div>
            <div
              className="organisationname ng-binding"
              style={{
                boxSizing: "border-box",
                overflow: "hidden",
                height: "1.3em",
                fontSize: "11px",
                marginTop: "4px",
                borderColor: "rgb(119, 110, 98)",
              }}
            >
              {cardData.org_name}
            </div>
          </div>
          <div
            className="homeeventlocation"
            style={{
              boxSizing: "border-box",
              overflow: "hidden",
              padding: "0px 0px 0px 6px",
              fontSize: "11px",
              height: "3em",
              textTransform: "capitalize",
              marginBottom: "6px",
              borderColor: "rgb(119, 110, 98)",
            }}
          >
            <span
              className="ng-binding"
              style={{
                boxSizing: "border-box",
                userSelect: "none",
                borderColor: "rgb(119, 110, 98)",
              }}
            >
              {cardData.city}
            </span>
          </div>
          <div
            className="ev_div_flex"
            style={{
              boxSizing: "border-box",
              borderTop: "1px solid rgb(221, 229, 237)",
              display: "flex",
              height: "100%",
              borderColor: "rgb(119, 110, 98)",
            }}
          >
            <div
              className="ev_div_fl1 ng-scope"
              style={{
                boxSizing: "border-box",
                padding: "8px 8px 0px",
                width: "80%",
                fontWeight: 800,
                textTransform: "uppercase",
                borderColor: "rgb(119, 110, 98)",
              }}
            >
              <a
                className="information_a"
                href={
                  regLastDate > Date.now() &&
                  `https://www.ifinish.in/event_details/${cardData.shortcode}`
                }
                style={{
                  boxSizing: "border-box",
                  textDecoration: "none",
                  borderColor: "rgb(119, 110, 98)",
                }}
              >
                {regLastDate > Date.now() ? "Register" : "Closed"}
              </a>
            </div>
            <div
              className="ev_div_fl2"
              style={{
                boxSizing: "border-box",
                padding: "0px 8px",
                borderLeft: "1px solid rgb(221, 229, 237)",
                width: "20%",
                position: "relative",
                borderColor: "rgb(119, 110, 98)",
              }}
            >
              {/* <ShareButton/> */}
            </div>
          </div>
          <div
            className="none ng-binding"
            style={{
              boxSizing: "border-box",
              display: "none",
              borderColor: "rgb(119, 110, 98)",
            }}
          >
            5KM, 10KM, 21KM
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
