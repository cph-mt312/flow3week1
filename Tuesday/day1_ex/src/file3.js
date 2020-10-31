import React from "react";
import { persons } from "./file2";

const { firstName, lastName, email } = [...persons];
/* const person = [...persons]; */

export function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export function WelcomePerson(person) {
  return (
    <div>
      <p>
        {firstName} {lastName} {email}
      </p>
    </div>
  );
}

export function MultiWelcome() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edith" />
      <WelcomePerson person={persons[0]} />
      <WelcomePerson person={persons[1]} />
      <WelcomePerson person={persons[2]} />
    </div>
  );
}
