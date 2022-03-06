const { connectDb } = require('./connect-db');

const destRef = connectDb().collection('destinations');

function getDestinations() {
    return destRef
    .get()
    .then((snapshot) => {
        const destinations = [];
        snapshot.forEach((doc) => {
            destinations.push({ id: doc.id, ...doc.data() })
        })
        return destinations
    })
    .catch(console.error)
}

function getFilteredDestinations() {
    return destRef
    .where('price', '==', 'Budget')
    .where('climate', '==', 'Summer')
    .where('type', '==', 'Domestic')
    .get()
    .then((snapshot) => {
        const filteredDestinations = [];
        snapshot.forEach((doc) => {
            filteredDestinations.push({ id: doc.id, ...doc.data() })
        })
        return filteredDestinations
    })
    .catch(console.error)
}
module.exports = { getDestinations, getFilteredDestinations };