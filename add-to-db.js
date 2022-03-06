const { connectDb } = require("./src/connect-db");
const destinations = require("./destinations.json");

for (let i = 0; i < destinations.length; i++) {
  const db = connectDb();
  db.collection("destinations")
    .add(destinations[i])
    .then((doc) => {
      console.log("Added destination", doc.id);
    })
    .catch((err) => {
      console.error(err);
    });
}
