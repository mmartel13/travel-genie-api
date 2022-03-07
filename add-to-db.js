const { connectDb } = require("./src/connect-db");
const destinations = require("./destinations.json");

const db = connectDb();

for (let i = 0; i < destinations.length; i++) {
  db.collection("destinations")
    .add(destinations[i])
    .then((doc) => {
      console.log("Added destination", doc.id);
    })
    .catch((err) => {
      console.error(err);
    });
}
