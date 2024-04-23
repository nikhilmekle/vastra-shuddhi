const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')


const JWT_SECRET = "Nikhilisgoodboy"

// ROUTE:1//Create a user using : POST "/api/auth/createuser" .Doesn't required Auth
router.post('/createuser', [
	body('name', 'Enter valid name').isLength({ min: 3 }),
	body('email', 'Enter valid email').isEmail(),
	body('contact', 'Enter valid contact ').isLength({ min: 10, max: 10 }),
	body('address', 'Enter valid address').isLength({ min: 10 }),
	body('password', 'password must be at least 5 character').isLength({ min: 5 })
], async (req, res) => {
	//if there are errors , return bad request and the error
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}

	//check whether the user  with this email exist already
	try {


		let user = await User.findOne({ email: req.body.email });
		if (user) {
			return res.status(400).json({ error: "sorry a user with this email already exists" })
		}
		const salt = await bcrypt.genSalt(10)
		const secPass = await bcrypt.hash(req.body.password, salt)
		// create a user
		user = await User.create({
			name: req.body.name,
			email: req.body.email,
			contact: req.body.contact,
			address: req.body.address,
			password: secPass,
		})


		const data = {
			user: {
				id: user.id
			}
		}
		const authtoken = jwt.sign(data, JWT_SECRET)

		res.json({ authtoken })
		// res.json(user)
	}
	catch (error) {
		console.error(error.message)
		res.status(500).send("internal server error")
	}
});





// ROUTE:2//Authenticate a user using POST  "/api/auth/login"   Login not required
router.post('/login', [

	body('email', 'Enter valid email').isEmail(),
	body('password', 'password can not be blank').exists()
], async (req, res) => {
	//if there are errors , return bad request and the error
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() })
	}
	const { email, password } = req.body;
	try {
		let user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ error: "Please try to login with correct credential" })
		}
		const passwordcompare = await bcrypt.compare(password, user.password)
		if (!passwordcompare) {
			return res.status(400).json({ error: "Please try to login with correct credential" })
		}
		const data = {
			user: {
				id: user.id
			}
		}
		const authtoken = jwt.sign(data, JWT_SECRET)

		res.json({ authtoken })
	} catch (error) {
		console.error(error.message)
		res.status(500).send("internal server error")
	}
})





// ROUTE:3//get loggedin user Detail POST "/api/auth/getuser" . Login Required
router.post('/getuser', fetchuser, async (req, res) => {
	try {
		const userId = req.user.id;
		const user = await User.findById(userId).select("-password")
		res.send(user)
	} catch (error) {
		console.error(error.message)
		res.status(500).send("internal server error")
	}
})
module.exports = router