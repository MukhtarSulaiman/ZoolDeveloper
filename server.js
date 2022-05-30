/** @format */

const express = require('express');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const { response } = require('express');
require('dotenv').config({ path: '.env' });

const app = express();

const PORT = process.env.PORT || 500;

app.use(express.static('public'));

app.use(express.json());
app.use(
	express.urlencoded({
		extended: false,
	})
);

const OAuth2Client = new google.auth.OAuth2(
	process.env.CLIENT_ID,
	process.env.CLIENT_SECRET,
	process.env.REDIRECT_UTL
);
OAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

app.post('/', (req, res) => {
	 
	async function sendMail() {

		try {
			const accessToken = await OAuth2Client.getFederatedSignonCerts();

			const transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					type: 'OAuth2',
					user: process.env.SENDER_USER,
					clientId: process.env.CLIENT_ID,
					clientSecret: process.env.CLIENT_SECRET,
					refreshToken: process.env.REFRESH_TOKEN,
					accessToken: accessToken,
				},
			});

			const mailOption = {
				from: `'${req.body.fullName}' <${req.body.email}>`,
				to: process.env.RECEIVER_USER,
				subject: req.body.subject,
				text: req.body.message,
			};

			const result = await transporter.sendMail(mailOption);
			return result;
			
		} catch (err) {
			return err;
		}		 		
	}
	sendMail()
		.then(result => {
		res.status(200).json({message: 'Votre email a été envoyé avec succès'});
		console.log(`Email sent ${result}`);
		})
		.catch(err => {
		console.log(err);
		res.status(400).json({ message: err });
	})
});

app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});
