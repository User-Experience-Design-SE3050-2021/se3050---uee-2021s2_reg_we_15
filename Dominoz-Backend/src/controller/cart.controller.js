const Cart = require('../model/cart.model');

const createCart = async (req, res) => {
    if (req.body) {
        const cart = new Cart(req.body);
        await cart.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

const getAllCart = async (req, res) => {
    await Cart.find()
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

const deleteItem = async (req, res) => {
    const id = req.params.id;

    Cart.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete item with id=${id}. Maybe item was not found!`
                });
            }
            else {
                res.send({
                    message: "Item was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete item with id=" + id
            });
        })
}

const calculateTotal = async (req, res) => {
    if (req.body) {
        const cart = await Cart.find();

        let totalAmount = 0;

        if (cart.length > 0) {
            cart.map((carts) => {
                totalAmount += carts.pizzaPrice;
            });
        }
        res.status(200).send({ totalAmount: totalAmount });
    }
}

module.exports = {
    createCart,
    getAllCart,
    deleteItem,
    calculateTotal
};