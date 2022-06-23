import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
// import { getAllEvents } from "../../helpers/api-utils";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
function AllEventsPage() {
  const router = useRouter();
  let events = getAllEvents();
  function findEventsHandler(year, month) {
    const path = `/events/${year}/${month}`;
    router.push(path);
  }
  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </Fragment>
  );
}

export default AllEventsPage;
