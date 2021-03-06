import React from "react";
import Head from "next/head";
// import Link from "next/link";
// import { getFeaturedEvents } from "../dummy-data";
import { getFeaturedEvents } from "../helpers/api-utils";
import EventList from "../components/events/event-list";
// import EventSearch from "../components/events/event-search";
import NewLetterRegistration from "../components/input/newsletter-registration";

function HomePage(props) {
  // const feauturedEvents = props.events;
  // console.log(feauturedEvents);
  return (
    <div>
      {/* <EventSearch /> */}
      <Head>
        <title>NextEvents</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve ..."
        />
      </Head>
      <NewLetterRegistration />
      <EventList events={props.events} />
    </div>
  );
}

export default HomePage;

export async function getStaticProps(context) {
  const feauturedEvents = await getFeaturedEvents();
  // console.log("Featured", feauturedEvents);
  return {
    props: { events: feauturedEvents },
    revalidate: 1800,
  };
}
