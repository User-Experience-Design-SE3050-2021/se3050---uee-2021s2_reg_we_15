const Address = require('../model/address.model');

const createAddress = async (req, res) => {
    if (req.body) {
        const delivery = new Address(req.body);
        await delivery.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllAddresses = async (req, res) => {
    await Address.find()
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

module.exports = {
    createAddress,
    getAllAddresses,
};