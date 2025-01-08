"use server"
import nodemailer from 'nodemailer';

const email = nodemailer.createTransport({
    host: 'smtp.ionos.es',
    port: 465,
    secure: true,
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});

export async function sendMail({ to, subject, text, name, checkbox }) {
    let html = "<h1>Hi, " + name + "</h1><p>" + text + "</p>" + "from:" + to;
    if (checkbox) {
        html += "<p>Just to try</p>";
    } else {
        html += "<p>Not to try</p>";
    }
    const mailOptions = await email.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject,
        html,
    });
}