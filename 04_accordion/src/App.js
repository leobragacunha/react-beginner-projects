import { useState } from "react";
import data from "./data.js";

export default function App() {
  return (
    <main>
      <div className="accordion__component">
        <h1 className="accordion__title">Questions and answers about login</h1>
        <Accordion />
      </div>
    </main>
  );
}

function Accordion() {
  return (
    <ul>
      {data.map((topic) => (
        <li className="accordion__item" key={topic.id}>
          <AccItem topic={topic} />
        </li>
      ))}
    </ul>
  );
}

function AccItem({ topic }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h2 className="accordion__item__title">{topic.title}</h2>
      <button
        className="btn accordion__item__btn"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {isOpen ? `-` : `+`}
      </button>
      <p className={isOpen ? "accordion__item__info" : "hidden"}>
        {topic.info}
      </p>
    </>
  );
}
