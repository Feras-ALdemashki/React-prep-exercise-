import { useState, useEffect } from "react";
import Person from "./Person";

const PersonController = () => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const getPersonData = async () => {
      const data = await fetchPersonData();

      const transformed = {
        first_name: data[0].name.first,
        last_name: data[0].name.last,
        email: data[0].email,
      };

      setPerson(transformed);
    };

    getPersonData();
  }, []);

  return person ? <Person person={person} /> : <p>Loading...</p>;
};

export default PersonController;

const fetchPersonData = async () => {
  try {
    const res = await fetch("https://www.randomuser.me/api?results=1");
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.log(err);
    return [];
  }
};
