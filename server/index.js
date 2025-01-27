const express = require('express');
const nodeMailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 3000;

const myemail = 'ruorigamiclub@gmail.com'
const mypassword = 'hzjjtfzcosctjiqy'

app.use(cors());
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({extended: true, limit: '25mb'}));
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

function sendEmail({ receiver_email, subject, message }) {
    return new Promise((resolve, reject) => {
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

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                return reject({message: 'an error occurred'});
            } else {
                return resolve ({message: 'email sent'});
            }
        });
    });
}

app.get("/", (req, res) => {
    sendEmail()
        .then((response) => res.send(response.message))
        .catch((error) => res.status(500).send(error.message));
});


app.post("/send_email", (req, res) => {
    const { receiver_email, subject, message } = req.body; 
    if (!receiver_email || !subject || !message) {
        return res.status(400).send("All fields are required");
    }
    sendEmail(req.body)
        .then((response) => res.send(response.message))
        .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
