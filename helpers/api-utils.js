export async function getAllEvents() {
  const response = await fetch(
    "https://next-course-77589-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  //   console.log(data);
  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  //   console.log(allEvents);
  return allEvents.filter((event) => {
    return event.isFeatured;
  });
}