const express = require('express');
const User = require('../models/User');
const router = express.Router();
//import bcryptjs package
const bcrypt = require('bcryptjs')
//import jsonwebtoken package
const jwt = require('jsonwebtoken')


//attach the secrete string with the data
const JWT_SECRET = "NikhilmekleisgoodB$oy"
const { body, validationResult } = require('express-validator');


//Create a user using : POST "/api/auth/createuser" .Doesn't required Auth
router.post('/createuser', [
	body('name', 'Enter a valid name').isLength({ min: 3 }),
	body('email', 'Enter valid email').isEmail(),
	body('password', 'Passsword must be at least 5 character').isLength({ min: 5 }),
], async (req, res) => {
	// console.log(req.body);
	// const user = User(req.body);
	// user.save();

	//if there are errors return Bad  request and the errors
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	//check whether the user whith this email is exists already
	try {

		let user = await User.findOne({ email: req.body.email });
		// console.log(user)
		if (user) {
			return res.status(400).json({ error: "sorry a user with this email already exixsts" })
		}
		//create salt
		const salt = await bcrypt.genSalt(10);

		//attach password and salt and assign to secPass
		secPass = await bcrypt.hash(req.body.password, salt);
		//create New user
		user = await User.create({
			name: req.body.name,
			email: req.body.email,
			password: secPass
		})
		
		const data = {
			user: {
				id: user.id
			}
		}
		const authtoken = jwt.sign(data, JWT_SECRET)
		console.log(authtoken)
		//res.json(user)
		res.json({authtoken})

	} catch (error) {
		console.log(error.message);
		res.status(500).send("internal server error");
	}
})






//Authentication a User Using : POST "/api/auth/login"
router.post('/login', [
	body('email', "enter a valid email").isEmail(),
	body('password', "password cannot be blank").exists()
], 
async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	//if there are errors  , return bad request and the errors

	const { email, password } = req.body;
	try {
		let user =await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ error: "please try to login correct credential" })

		}
		//compare password enter by user and the user password stored in DB internally
		const passwordCompare = await bcrypt.compare(password, user.password)
		if (!passwordCompare) {
			return res.status(400).json({ error: "please try to login with correct credential" })
		}

		const data = {
			user: {
				id: user.id
			}
		}

		const authtoken = jwt.sign(data, JWT_SECRET)
		console.log(authtoken)
		//res.json(user)
		res.json({authtoken})

	} catch (error) {
		console.log(error.message);
		res.status(500).send("internal server error");
	}
})
module.exports = router