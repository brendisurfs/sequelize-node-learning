import { Sequelize } from "sequelize";
import express from "express";
import _USERS from "./Users.json";
// utils
import connection from "./util/database";

// models
import User from "./models/user";
import { Op } from "sequelize";

const PORT = 8000;
const app = express();

// routes
app.get("/findall", (req, res) => {
    User.findAll({
        where: {
            name: {
                [Op.like]: "Da%",
            },
        },
    })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.status(404).send(err);
            console.log(err);
        });
});

// takes the params,
app.get("/:id", (req, res) => {
    User.findByPk(req.params.id)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.post("/post", (req, res) => {
    let newUser = req.body.user;
    User.create(newUser);
});

//
// sync will create through our models.
connection
    .sync({ force: false })
    .then((res) => {
        console.log("connected to the data!");
    })
    .then(() => {
        User.bulkCreate(_USERS);
    })
    .then((users) => {
        console.log("success adding users");
    })
    .catch((err) => {
        console.log(err);
    });

// application
app.listen(PORT, () => console.log(`transPORT:${PORT} is away`));
