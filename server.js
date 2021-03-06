/** @format */

const express = require('express');
const helmet = require('helmet');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
require('dotenv').config({ path: '.env' });

const app = express();
const PORT = process.env.PORT || 500;

app.use(helmet());
app.use(
	helmet.contentSecurityPolicy({
		directives: {
			'script-src': [
				"'self'",
				'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
				'https://fonts.gstatic.com/s/raleway/v28/1Ptsg8zYS_SKggPNyCg4TYFqL_KWxQ.woff2',
			],
			'default-src': [
				"'self'",
				'http://localhost:500',
				'https://zooldeveloper.com',
				'*.zooldeveloper.com',
			],
		},
	})
);
app.use(express.json());
app.use(
	express.urlencoded({
		extended: false,
	})
);
app.use(express.static('public'));
app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

const OAuth2Client = new google.auth.OAuth2(
	process.env.CLIENT_ID,
	process.env.CLIENT_SECRET,
	process.env.REDIRECT_URL
);
OAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

app.post('/', (req, res) => {
	async function sendMail() {
		try {
			const accessToken = await OAuth2Client.getAccessToken();

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

			const output = `
			<ul>
				<li>Nom: <b>${req.body.fullNameValue}</b></li>
				<li>E-mail: ${req.body.emailValue}</li>
				<li>Subjet: ${req.body.subjectValue}</li>
			</ul>
			<p>${req.body.messageValue}</p>`;

			const mailOption = {
				from: `'${req.body.fullNameValue}' <${process.env.SENDER_USER}>`,
				to: process.env.RECEIVER_USER,
				subject: req.body.subjectValue,
				html: output,
			};

			const result = await transporter.sendMail(mailOption);
			return result;
		} catch (error) {
			return error;
		}
	}
	sendMail()
		.then(result => {
			res.status(200).send(
				'Votre mail a ??t?? envoy?? avec succ??s ????'
			);
			console.log(`Email sent: ${result}`);
		})
		.catch(error => {
			res.status(400).send(error);
			console.log(error);
		});
});

app.listen(PORT, () => {
	console.log(`server is running on port ${PORT}`);
});
