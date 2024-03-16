// import axios from "axios";
import position from "./mocks/position.json";
import crew from "./mocks/crew.json";

// export const getCrew = () =>
//   axios.get("http://api.open-notify.org/astros.json").then(function (response) {
//     let people = response.data.people;
//     const result = people.filter(
//       (man: { craft: string }) => man.craft === "ISS",
//     );
//     return result;
//   });

export const getCrew = () =>
  Promise.resolve(crew).then(function (response) {
    let people = response.people;
    const result = people.filter(
      (man: { craft: string }) => man.craft === "ISS",
    );
    return result;
  });

// export const getPosition = () =>
//   axios
//     .get("http://api.open-notify.org/iss-now.json")
//     .then(function (response) {
//       return response.data.iss_position;
//     });
let counter = 0;

export const getPosition = () => {
  console.log("position", position);
  if (counter === position.length) {
    counter = 0;
  }

  counter++;

  return Promise.resolve(position[counter].iss_position);
};
