import data from "./data";
import { useState } from "react";

export default function App() {
  const [selectedCtg, setSelectedCtg] = useState("all");

  return (
    <>
      <header className="header">
        <h1 className="header__title">Our menu</h1>
        <div className="underline"></div>
      </header>
      <section>
        <Categories selectedCtg={selectedCtg} onCtgSelect={setSelectedCtg} />
      </section>
      <main>
        <Menu selectedCtg={selectedCtg} />
      </main>
    </>
  );
}

function Categories({ selectedCtg, onCtgSelect }) {
  // Creating a set of categories
  const categorySet = new Set(data.map((item) => item.category));
  categorySet.add("all");

  const categories = [...categorySet].sort((a, b) => a.localeCompare(b));

  return (
    <ul className="categories__container">
      {categories.map((category) => (
        <li className="categories__ctg" key={category}>
          <button
            className={`btn categories__btn ${
              selectedCtg === category && "categories__btn--selected"
            }`}
            onClick={() => onCtgSelect(category)}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}

function Menu({ selectedCtg }) {
  return (
    <ul className="menu__container">
      {data
        .filter(
          (item) => selectedCtg === "all" || selectedCtg === item.category
        )

        .map((item) => (
          <li className="menuItem menuItem__container">
            <div className="menuItem__header">
              <h2 className="menuItem__title">{item.title}</h2>
              <p className="menuItem__price">${Math.round(item.price)}</p>
            </div>
            <img className="menuItem__image" src={item.img} alt={item.title} />
            <p className="menuItem__description">{item.desc}</p>
          </li>
        ))}
    </ul>
  );
}
