const User = require("../models/User");
const bcrypt = require("bcrypt"); //A library for hashing passwords securely.
const { createAccessToken } = require("../utils/token"); //A utility function to generate JWT tokens.
const { validateEmail } = require("../utils/validation"); //A utility function to validate email addresses.

exports.signup = async (req, res) => {
	try {
		//Validate input
		const { name, email, password } = req.body;
		if (!name || !email || !password) {
			return res.status(400).json({ msg: "Please fill all the fields" });
		}
		if (
			typeof name !== "string" ||
			typeof email !== "string" ||
			typeof password !== "string"
		) {
			return res.status(400).json({ msg: "Please send string values only" });
		}

		// Validate password length and email format
		if (password.length < 4) {
			return res
				.status(400)
				.json({ msg: "Password length must be atleast 4 characters" });
		}

		if (!validateEmail(email)) {
			return res.status(400).json({ msg: "Invalid Email" });
		}

		// Check if email already exists
		const user = await User.findOne({ email });
		if (user) {
			return res.status(400).json({ msg: "This email is already registered" });
		}

		// Hash password and create the user
		const hashedPassword = await bcrypt.hash(password, 10);
		await User.create({ name, email, password: hashedPassword });

		// Return success message
		res
			.status(200)
			.json({ msg: "Congratulations!! Account has been created for you.." });
	} catch (err) {
		console.error(err);
		return res.status(500).json({ msg: "Internal Server Error" });
	}
};

//This function handles user login by verifying credentials and generating a token.
exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;

		// Validate input
		if (!email || !password) {
			return res
				.status(400)
				.json({ status: false, msg: "Please enter all details!!" });
		}
		// Find user by email
		const user = await User.findOne({ email });
		if (!user)
			return res
				.status(400)
				.json({ status: false, msg: "This email is not registered!!" });

		// Check if password matches
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch)
			return res
				.status(400)
				.json({ status: false, msg: "Password incorrect!!" });

		// Generate token and send response
		const token = createAccessToken({ id: user._id });

		// Remove password from user object
		delete user.password;
		res
			.status(200)
			.json({ token, user, status: true, msg: "Login successful.." });
	} catch (err) {
		console.error(err);
		return res
			.status(500)
			.json({ status: false, msg: "Internal Server Error" });
	}
};
