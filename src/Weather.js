import React, { useState } from "react";

export default function weather() {
  let [city, setCity] = useState("");
  let [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setText(`It is currently 17°C in ${city}`);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <h2>{text}</h2>
    </div>
  );
}
