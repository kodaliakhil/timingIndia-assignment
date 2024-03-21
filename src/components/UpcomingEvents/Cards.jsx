import { useContext, useEffect, useState } from "react";
import EventCard from "./EventCard";
import d from "./data.json";
import { Context } from "../../App";

const Cards = () => {
  const [data, setData] = useState(d);
  const { selectedCategories, selectedWhens, eventFilInp, cityFilInp } =
    useContext(Context);
  useEffect(() => {
    if (
      selectedCategories[0] ||
      selectedWhens[0] ||
      eventFilInp ||
      cityFilInp
    ) {
      let filData = d;

      if (eventFilInp) {
        filData = filData?.filter((i) =>
          i.event_name.toLowerCase().includes(eventFilInp.toLowerCase())
        );
      }
      if (cityFilInp) {
        filData = filData?.filter((i) =>
          i.city.toLowerCase().includes(cityFilInp.toLowerCase())
        );
      }
      if (selectedCategories[0]) {
        filData = selectedCategories.map((j) =>
          filData?.filter((i) => i.event_races.includes(j))
        );
      }
      if (selectedWhens[0]) {
        filData = selectedWhens.map((j) => {
          if (j === "This Month") {
            return filData?.filter(
              (i) =>
                new Date(i.event_date).getMonth() === new Date().getMonth() &&
                new Date(i.event_date).getFullYear() ===
                  new Date().getFullYear()
            );
          } else if (j === "This Year") {
            return filData?.filter(
              (i) =>
                new Date(i.event_date).getFullYear() ===
                new Date().getFullYear()
            );
          } else {
            return filData?.filter(
              (i) => new Date(i.event_date).getMonth() === new Date().getMonth()
            );
          }
        });
      }
      const arrayUniqueByKey = [
        ...new Map(filData.flat().map((item) => [item["id"], item])).values(),
      ];

      console.log(arrayUniqueByKey);
      setData(arrayUniqueByKey);
    } else {
      setData(d);
    }
  }, [selectedCategories, selectedWhens, eventFilInp, cityFilInp]);
  return (
    <div className="d-flex flex-wrap">
      {data.map((i) => {
        return (
          <div key={i.id} className="mx-3 my-3">
            <EventCard cardData={i} />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
