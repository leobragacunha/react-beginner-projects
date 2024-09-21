import { useEffect, useState } from "react";
import Loading from "./Loading";
import TourList from "./TourComps";

export default function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function handleTourDelete(tourInstanceId) {
    setTours((tours) => tours.filter((tour) => tour.id !== tourInstanceId));
  }

  async function getToursData() {
    try {
      setIsLoading(true);

      const response = await fetch(
        "https://www.course-api.com/react-tours-project"
      );

      if (!response.ok)
        throw new Error("Something wrong with data fetching. Check url");

      const toursData = await response.json();

      // Simulating some data fetching error (won't happen here, but it would be necessary in a real situation)
      if (!toursData)
        throw new Error(
          "Problem finding data. Check your inputs and your internet connection"
        );

      setTours(toursData);
      console.log(toursData);
    } catch (err) {
      setError(err.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  // prettier-ignore
  useEffect(() => {getToursData()}, []);

  return (
    <>
      {isLoading && <Loading />}
      {tours.length === 0 ? (
        <main>
          <h1 className="page__header">No tours left...</h1>
          <button className="page__refresh__button" onClick={getToursData}>
            Refresh
          </button>
        </main>
      ) : (
        <main>
          <h1 className="page__header">Our Tours</h1>
          <TourList tours={tours} onDeleteTour={handleTourDelete} />
        </main>
      )}
    </>
  );
}
