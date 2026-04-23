import { useEffect, useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { fetchTrainings } from "../api";
import type { Training } from "../types";

//käytin näitä nettisivuja apuna https://www.npmjs.com/package/react-big-calendar
// https://github.com/arecvlohe/rbc-starter

const localizer = dayjsLocalizer(dayjs);

function TrainingCalendar() {
  const [trainings, setTrainings] = useState<Training[]>([]);

  useEffect(() => {
    fetchTrainings()
      .then((data) => setTrainings(data))
      .catch((error) => console.error(error));
  }, []);

  const events = trainings.map((training) => ({
    id: training.id,
    title: training.activity + " / " + training.customer.firstname + " " + training.customer.lastname,
    start: new Date(training.date),
    end: new Date(new Date(training.date).getTime() + training.duration * 60000),
  }));

  return (
    <div style={{ height: "80vh", width: "95%", margin: "auto" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"
        views={["month", "week", "day"]}
      />
    </div>
  );
}

export default TrainingCalendar;