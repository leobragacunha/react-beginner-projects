import { useState } from "react";

export default function TourList({ tours, onDeleteTour }) {
  return (
    <ul className="tour__list">
      {tours.map((tour) => (
        <li key={tour.id}>
          <TourBox tour={tour} onDeleteTour={onDeleteTour} />
        </li>
      ))}
    </ul>
  );
}

function TourBox({ tour, onDeleteTour }) {
  const [readMoreClicked, setReadMoreClicked] = useState(false);

  function handleReadMore(e) {
    e.preventDefault();
    setReadMoreClicked((flag) => !flag);
  }

  return (
    <div className="tour__container">
      <div className="tour__container__image">
        <img className="tour__image" src={tour.image} />
      </div>
      <div className="tour__container__text">
        <h2 className="tour__title">{tour.name}</h2>
        <p className="tour__price">${tour.price}</p>
        <p className="tour__text">
          {readMoreClicked ? tour.info : `${tour.info.slice(0, 200)}...  `}
          <a
            href="#"
            className="tour__read-more"
            onClick={(e) => handleReadMore(e)}
          >
            {readMoreClicked ? ` Read Less` : `Read more`}
          </a>
        </p>
        <button className="tour__button" onClick={() => onDeleteTour(tour.id)}>
          Not interested
        </button>
      </div>
    </div>
  );
}
