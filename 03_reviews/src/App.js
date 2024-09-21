import reviews from "./data.js";
import { useState } from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function App() {
  return (
    <main>
      <h1 className="page__title">Our Reviews</h1>
      <div className="underline" />
      <ReviewSlider reviews={reviews} />
    </main>
  );
}

function ReviewSlider({ reviews }) {
  const [currId, setCurrId] = useState(1);

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <ReviewItem review={review} currId={currId} setCurrId={setCurrId} />
        </li>
      ))}
    </ul>
  );
}

function ReviewItem({ review, currId, setCurrId }) {
  return (
    <div
      className={
        !(currId === review.id)
          ? "hidden review__container"
          : "review__container"
      }
    >
      <div className="review__icon__container">
        <FaQuoteRight />
      </div>
      <div className="review__image__container">
        <img className="review__image" src={review.image} />
      </div>
      <h1 className="review__name">{review.name}</h1>
      <h2 className="review__job">{review.job}</h2>
      <p className="review__text">{review.text}</p>
      <NavigationButtons currId={currId} setCurrId={setCurrId} />
    </div>
  );
}

function NavigationButtons({ currId, setCurrId }) {
  const ids = reviews.map((review) => review.id);

  function handleNextId() {
    setCurrId((current) =>
      current === Math.max(...ids) ? Math.min(...ids) : current + 1
    );
  }

  function handlePrevId() {
    setCurrId((current) =>
      current === Math.min(...ids) ? Math.max(...ids) : current - 1
    );
  }

  function handleRandomId() {
    setCurrId(Math.ceil(Math.random() * ids.length));
  }

  return (
    <>
      <div className="container__previous__next">
        <button className="btn btn__previous" onClick={handlePrevId}>
          <FaChevronLeft />
        </button>
        <button className="btn btn__next" onClick={handleNextId}>
          <FaChevronRight />
        </button>
      </div>
      <div>
        <button className="btn btn_random" onClick={handleRandomId}>
          Surprise Me!
        </button>
      </div>
    </>
  );
}
