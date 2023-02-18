import React from "react";
import "../assets/scss/content.scss";
import tablesetting from "../assets/imgs/tablesetting.jpg"
import tablesetting2 from "../assets/imgs/tablesetting2.jpg"
const menus = [
  {
    id: 1,
    name: "Bread Basket",
    description: "Assortment of fresh baked fruit breads and muffins 5.50",
  },
  {
    id: 2,
    name: "Honey Almond Granola with Fruits",
    description:
      "Natural cereal of honey toasted oats, raisins, almonds and dates 7.00",
  },
  {
    id: 3,
    name: "Belgian Waffle",
    description: "Vanilla flavored batter with malted flour 7.50",
  },
  {
    id: 4,
    name: "Scrambled eggs",
    description:
      "Scrambled eggs, roasted red pepper and garlic, with green onions 7.50",
  },
  {
    id: 5,
    name: "Blueberry Pancakes",
    description: "With syrup, butter and lots of berries 8.50",
  },
];
export default function Content() {
  return (
    <div id="Content">
      <div className="about__section">
        <div className="about__section-img">
          <img
            src={tablesetting}
            alt="Table Setting"
            width="600"
            height="750"
          />
        </div>
        <div className="about-section_content">
          <h1>About Catering</h1>
          <br />
          <h5>Tradition since 1889</h5>
          <p>
            The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor
            sit amet, consectetur adipiscing elit consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.We only use <span>seasonal</span> ingredients.
          </p>
          <p className="about-section__description">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum consectetur adipiscing
            elit, sed do eiusmod temporincididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <hr />
      <div className="menu__section">
        <div className="menu__section-content">
          <h1>Our Menu</h1>
          <br/>
          {menus.map((menu) => (
            <React.Fragment key={menu.id}>
              <h4>{menu.name}</h4>
              <p>{menu.description}</p>
              <br />
            </React.Fragment>
          ))}
        </div>

        <div className="menu__section-img">
          <img src={tablesetting2} alt="Table Setting 2" width="1600" height="800"  />
        </div>
      </div>
      <hr />
    </div>
  );
}
