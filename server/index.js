const express = require('express');
const nodeMailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

const myemail = process.env.EMAIL;
const mypassword = process.env.PASSWORD;

if (!myemail || !mypassword) {
    console.error('Email or password environment variables are not set');
    process.exit(1);
}

// Configure CORS to allow requests from your client application
app.use(cors({
    origin: 'maytakahashi-github-io-client-d6c956ag0.vercel.app', // Replace with your client URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

function sendEmail({ receiver_email, subject, message } = {}) {
    return new Promise((resolve, reject) => {
        if (!receiver_email || !subject || !message) {
            return reject({ message: 'Missing required fields' });
        }

        console.log('Creating transporter...');
        var transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: myemail,
                pass: mypassword
            },
        });

        const mailOptions = {
            from: myemail,
            to: myemail,
            subject: subject,
            text: message,
            replyTo: receiver_email,
        };

        console.log('Sending email...');
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.error('Error sending email:', error);
                return reject({ message: 'An error occurred', error });
            } else {
                console.log('Email sent:', info.response);
                return resolve({ message: 'Email sent' });
            }
        });
    });
}

app.get("/", (req, res) => {
    console.log('Received GET request at /');
    res.send('Welcome to the email service');
});

app.post("/send_email", (req, res) => {
    console.log('Received POST request at /send_email');
    const { receiver_email, subject, message } = req.body;
    if (!receiver_email || !subject || !message) {
        console.error('Missing fields in POST /send_email');
        return res.status(400).send("All fields are required");
    }
    sendEmail(req.body)
        .then((response) => {
            console.log('Email sent successfully');
            res.send(response.message);
        })
        .catch((error) => {
            console.error('Error in POST /send_email:', error);
            res.status(500).send(error.message);
        });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
