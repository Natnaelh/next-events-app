import React, { Fragment } from "react";
import EventList from "../../components/events/event-list";
import { getFilteredEvents } from "../../dummy-data";
import Router, { useRouter } from "next/router";
// import EventSearch from "../../components/events/event-search";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
function FilteredEventsPage(props) {
  const router = useRouter();
  // console.log(router.query.slug);
  const filteredPath = router.query.slug;
  if (!filteredPath) {
    return <p className="center">Loading Events</p>;
  }
  const year = +filteredPath[0];
  const month = +filteredPath[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2020 ||
    month > 12 ||
    month < 0
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">Invalid filter, Please adjust your values.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({ year: year, month: month });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No Events found for the chosen time.</p>
        </ErrorAlert>
        <div className="center">
          <Button link={"/events"}>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
