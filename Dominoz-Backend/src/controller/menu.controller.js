const Menu = require('../model/menu.model');

const createMenu = async (req, res) => {
    if (req.body) {
        const menu = new Menu(req.body);
        await menu.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

// Get all Pizza
const getAllPizza = async (req, res) => {
    await Menu.find()
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

module.exports = {
    createMenu,
    getAllPizza
};