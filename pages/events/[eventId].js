import React, { Fragment } from "react";
import { useRouter } from "next/router";
// import { getEventById } from "../../dummy-data";
import {
  getEventById,
  // getAllEvents,
  getFeaturedEvents,
} from "../../helpers/api-utils";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

function EventDetailPage(props) {
  // const router = useRouter();
  // const eventID = router.query.eventId;

  // const event = getEventById(eventID);
  const event = props.selectedEvent;

  if (!event) {
    return (
      <div className="center">
        <h4>Loading....</h4>
      </div>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailPage;

export async function getStaticProps(context) {
  const eventID = context.params.eventId;
  const event = await getEventById(eventID);

  return {
    props: { selectedEvent: event },
    revalidate: 30,
  };
}

export async function getStaticPaths(context) {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: true,
  };
}
