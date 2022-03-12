const { connectDb } = require('./connect-db');

const destRef = connectDb().collection('destinations');

exports.getDestinations = (req, res) => {
    return destRef
    .get()
    .then((snapshot) => {
        const destinationList = snapshot.docs.map((doc) => {
            let destination = doc.data();
            destination.id = doc.id;
            return destination;
        });
        res.status(200).send(destinationList);
    })
    .catch((err) => res.status(500).send(err));
}

exports.getFilteredDestinations = (req, res) => {
    return destRef
    .where('price', '==', req.body.price)
    .where('climate', '==', req.body.climate)
    .where('type', '==', req.body.type)
    .get()
    .then((snapshot) => {
        const filteredDestinations = [];
        snapshot.forEach((doc) => {
            filteredDestinations.push({ id:doc.id, ...doc.data() })
           return filteredDestinations
        })
        res.status(200).send(filteredDestinations)
    })
    .catch((err) => res.status(500).send(err))
}

exports.updateDestination = (req, res) => {
    const { destinationId } = req.params
    const isFavorite = req.body.favorite
    return destRef
    .doc(destinationId).update({ favorite: isFavorite })
    .then(doc => res.status(202).send(doc))
    .catch(err => res.status(500).send(err))
}
