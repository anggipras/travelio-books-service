const express = require("express");
const userModel = require("./models");
const app = express.Router();

app.post("/record/add", async (request, response) => {
    const user = new userModel({
        custName: request.body.name,
        custEmail: request.body.email
    });

    try {
        console.log(user);
        await user.save();
        response.send(user);
    } catch (error) {
        console.log("error");
        response.status(500).send(error);
    }
});

module.exports = app;