const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = express.Router();

router.get("/", async (req, res)=>{
    const users = await User.find()
    return res.json({ users });
});

router.get("/:_id", async (req, res)=>{
    const { _id } = req.params
    const user = await User.findOne({ _id })
    return res.json({ user });
});

router.put("/:_id", async (req, res)=>{
    const { _id } = req.params;
    const { name, email} = req.body;

    const user = await User.updateOne({ _id }, { name: name, email: email, editedAt: Date.now()});
    if(!user){
        return res.status(400).send({ error: "Edition failed"} );
    }
    return res.json({ user });
});

router.patch("/:_id", async (req, res)=>{
    const { _id } = req.params;
    const { password, newPassword } = req.body;

    const user = await User.findOne({ _id }).select("+password");

    if(!await bcrypt.compare(password, user.password)){
        return res.status(400).send({ error: "Invalid password"});
    }

    const hash = await bcrypt.hash(newPassword, 10);

    const newUser = await User.updateOne({ _id }, { password: hash, editedAt: Date.now()});
    if(!user){
        return res.status(400).send({ error: "Modify password failed"} );
    }
    return res.json({ newUser });
});

router.delete("/:_id", async (req, res)=>{
    const { _id } = req.params
    if(!await User.deleteOne({ _id })){
        return res.status(400).send({ error: "Deletion  failed"} )
    }
    return res.status(201).send();
});


module.exports = app => app.use("/users", router);