import { useState, useEffect } from "react"
import AccordionItem from "./AccordionItem"

export default function UpcomingEvents() {
  const [events, setEvents] = useState([])
  const [err, setErr] = useState("")

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_BASE_URL}/events`
    fetch(url)
      .then(res => res.json())
      .then((res) => setEvents(res.data))
      .catch(setErr)
  }, [])

  return (
    <div className="w-container">
      {err}
      <h3 className="lg-title">Upcoming Events</h3>
      <div className="my-5">
        {events.map((event) => (
          <AccordionItem key={event.title} item={event} />
        ))}
      </div>
    </div>
  )
}