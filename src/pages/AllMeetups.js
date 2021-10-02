import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://meetup-app-72e8d-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {

        const meetups = [];

        for (const key in data) {
          meetups.push({
            ...data[key],
            id: key,
          });
        }

        setIsLoading(false);
        setMeetups(meetups);
      });
  }, []); //Al no añadir dependencias al arreglo, useEffect solo se ejecuta la primera vez que renderiza el componente

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <h1>All Meetups</h1>

      <MeetupList meetups={meetups} />
    </section>
  );
}

export default AllMeetupsPage;
