import React from "react";

const Person = ({ person }) => {
  const { first_name, last_name, email } = person;

  return (
    <>
      <h1>List</h1>
      <ul>
        <li>{first_name}</li>
        <li>{last_name}</li>
        <li>{email}</li>
      </ul>
    </>
  );
};

export default Person;
