const Payment = require('../model/delivery.model');

const createPayment = async (req, res) => {
    if (req.body) {
        const payment = new Payment(req.body);
        await payment.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllPayments = async (req, res) => {
    await Payment.find()
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

module.exports = {
    createPayment,
    getAllPayments,
};