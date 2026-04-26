import { useEffect, useState } from "react";
import { Calendar, dayjsLocalizer, type View } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { fetchTrainings } from "../api";
import type { Training } from "../types";
import type { CalendarEvent } from "../types";

//Kalenteri tehty react-big-calendarin examples-sivun pohjalta: https://www.npmjs.com/package/react-big-calendar
// https://github.com/arecvlohe/rbc-starter
// https://jquense.github.io/react-big-calendar/examples/?path=/docs/props--events
// https://jquense.github.io/react-big-calendar/examples/?path=/story/about-big-calendar--page

const localizer = dayjsLocalizer(dayjs);

function TrainingCalendar() {
  const [trainings, setTrainings] = useState<Training[]>([]);
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>("week");

  useEffect(() => {
    fetchTrainings()
      .then((data) => setTrainings(data))
      .catch((error) => console.error(error));
  }, []);

  const events: CalendarEvent[] = trainings.map((training) => ({
    id: training.id,
    title: training.activity + " " + training.customer.lastname,
    start: new Date(training.date),
    end: new Date(
      new Date(training.date).getTime() + training.duration * 60000,
    ),
  }));

  const eventStyle = () => {
    return {
      style: {
        backgroundColor: "#1976d2",
        borderRadius: "6px",
        border: "none",
        color: "white",
        padding: "2px 4px",
        fontSize: "12px",
      },
    };
  };

  return (
    <div style={{ height: "80vh", width: "95%", margin: "auto" }}>
      <Calendar<CalendarEvent>
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        date={date}
        view={view}
        onNavigate={(newDate) => setDate(newDate)}
        onView={(newView) => setView(newView)}
        views={["month", "week", "day"]}
        eventPropGetter={eventStyle}
      />
    </div>
  );
}

export default TrainingCalendar;
