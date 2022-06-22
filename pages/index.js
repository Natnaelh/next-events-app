import React from "react";
// import Link from "next/link";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
// import EventSearch from "../components/events/event-search";

function HomePage() {
  const feauturedEvents = getFeaturedEvents();
  // console.log(feauturedEvents);
  return (
    <div>
      {/* <EventSearch /> */}
      <EventList events={feauturedEvents} />
    </div>
  );
}

export default HomePage;
