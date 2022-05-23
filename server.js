/** @format */

const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env' });

const app = express();

const PORT = process.env.PORT || 500;

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({
	extended: false,
	})
);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

app.post('/', (req, res) => {

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	const mailOption = {
		from: `'${req.body.fullName}' <${req.body.email}>`,
		to: process.env.EMAIL_USER,
		subject: req.body.subject,
		text: req.body.message,
	};
	
	transporter.sendMail(mailOption, (err, info) => {
		if (err) {
			console.log(err);
			res.status(400).json({ message: err });
		} else {
			console.log(`Email sent ${info.response}`);
			res.status(200).json({
				message: 'Votre email a été envoyé avec succès',
			});
		}
	});
});

app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});
