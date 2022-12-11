const router = require("express").Router();
const bcrypt = require('bcryptjs');
const knex = require('knex')(require("../knexfile"));
const authorize = require('../middleware/authorize');
const jwt = require('jsonwebtoken');

// --create new member--
router.post("/signup", async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    if (!first_name || !last_name || !email || !password) {
        return res.status(400).send("Please fill all required fields");
    }
// TRY TO GET THIS TO WORK.
const hashedPassword = bcrypt.hashSync(password);

// new user
const newUser = {
    // id: uuid(),
    // admin: 1,
    first_name,
    last_name,
    email,
    // role: { "users": 1993 },
    password,
    
};

// Inserts into database

try {
    await knex('users').insert(newUser);
    res.status(201).send("You've registered successfully");
} catch (error) {
    console.log(error);
    res.status(400).send("Failed to register")
}

});


// //--LOGIN--
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Password or email is incorrect");
    }

    //--- FIND USER --
    const user = await knex('users').where({email: email}).first();
    if (!user) {
        return res.status(400).send("Invalid email");
    }

    //--- VALIDATE PASSWORD --- 
    const isPasswordCorrect = (password, user.password);
    if (!isPasswordCorrect) {
        return res.status(400).send("Invalid password");
    }

    //--- TOKEN --- 
    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_KEY,
        { expiresIn: "24h" }
    ); 
    res.json({ token })
});
    //--- GET CURRENT USER ---
    router.get("/current", authorize, async (req, res) => {
        const user = await knex ('users').where({ id: req.user.id }).first();
        delete user.password;
        res.json(user);
    });


    module.exports = router;