import React from "react";
import "../assets/scss/contact.scss";

const infos = [
  {
    name: "Catering Service",
    address: "42nd Living St",
    zipcode: 43043,
    City: "New York, NY",
  },
];
export default function Contact() {
  return (
    <div id="Contact">
      <h1>Contact</h1>
      <p>
        We offer full-service catering for any event, large or small. We
        understand your needs and we will cater the food to satisfy the biggerst
        criteria of them all, both look and taste. Do not hesitate to contact
        us.
      </p>
      <div className="address">
        {infos.map((info) => (
          <React.Fragment>
            <b>
              {info.name},{info.address},{info.zipcode},{info.City}
            </b>
          </React.Fragment>
        ))}
      </div>
      <p>
        You can also contact us by phone 00553123-2323 or email
        catering@catering.com, or you can send us a message here:
      </p>
      <form action="#" method="POST" className="contact__form">
        <input type="text" placeholder="Name" />
        <input type="number" placeholder="How many people" />
        <input type="datetime-local" />
        <input placeholder="Message \ Special requirements" />

        <button type="submit">send message</button>
      </form>
    </div>
  );
}
