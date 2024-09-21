import { useState } from "react";
import brithday_data from "./data/brithday_data";

export default function App() {
  return (
    <div className="birthday__background">
      <Container />;
    </div>
  );
}

function Container() {
  const [people, setPeople] = useState(brithday_data);
  return (
    <div className="birthday__container">
      <h1 className="birthday__header">
        {people.length > 0
          ? `🎉 ${people.length} birthdays today! 🥳`
          : `😿No birthdays today!😿`}
      </h1>
      <ul className="person__container">
        {people.map((item) => (
          <li className="person__item" key={item.id}>
            <Person name={item.name} age={item.age} image={item.image} />
          </li>
        ))}
      </ul>
      <button className="birthday__button" onClick={() => setPeople([])}>
        Clear All
      </button>
    </div>
  );
}

function Person({ name, age, image }) {
  return (
    <>
      <div className="person__image--container">
        <img src={image} className="person__image--image" />
      </div>
      <h2 className="person__name">{name}</h2>
      <p className="person__age">{age} years</p>
    </>
  );
}
