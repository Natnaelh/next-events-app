import React, { Fragment } from "react";
import { useRouter } from "next/router";
// import { getAllEvents } from "../../dummy-data";
import { getAllEvents } from "../../helpers/api-utils";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
function AllEventsPage(props) {
  const router = useRouter();
  // let events = getAllEvents();
  function findEventsHandler(year, month) {
    const path = `/events/${year}/${month}`;
    router.push(path);
  }
  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler} />
      <EventList events={props.events} />
    </Fragment>
  );
}

export default AllEventsPage;

export async function getStaticProps(context) {
  const events = await getAllEvents();
  return {
    props: { events: events },
    revalidate: 60,
  };
}
