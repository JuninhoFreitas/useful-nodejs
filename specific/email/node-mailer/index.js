const nodemailer = require("nodemailer");

const objectCredential = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'pleasedontspamme@gmail.com',
        pass: 'password'
    }
}
const objectEmail = {
    from: "Anonymous <anon@gov.com.br>",
    to: 'pleasedontspamme@gmail.com',
    subject: 'Hello',
    text: 'Hello world',
    html: '<b>Hello world?</b>'
}
//Send Email #1
async function sendMail(credential, mail) {
    let transporter = nodemailer.createTransport(credential);
    let info = await transporter.sendMail({
        from: mail.from, // sender address
        to: mail.to, // list of receivers
        subject: mail.subject, // Subject line
        text: mail.text, // plain text body
        html: mail.html, // html body
    });

    return info;
}
//Send Email #2
async function sendMail2() {
    let transporter = nodemailer.createTransport(objectCredential);
    let info = await transporter.sendMail(objectEmail);
    return info;
}
//Send Email #3
async function sendMail3() {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'pleasedontspamme@gmail.com',
            pass: 'password'
        }
    });
    let info = await transporter.sendMail({
        from: "Anonymous <anon@gov.com.br>",
        to: 'pleasedontspamme@gmail.com',
        subject: 'Hello',
        text: 'Hello world',
        html: '<b>Hello world?</b>'
    });
    return info;
}
//Send Email #4
async function sendMail4(credential, mail) {
    mail.html =  '<h1>Hello World Custom</h1>';
    let customMail = {...mail, headers:{'X-SENDER':'111'},date:new Date('2000-01-01 00:00:00')}
    let transporter = nodemailer.createTransport(credential);
    let info = await transporter.sendMail(customMail);
    return info;
}

sendMail(objectCredential, objectEmail).catch(console.log)
sendMail2(objectCredential, objectEmail).catch(console.log)
sendMail3().catch(console.log)
sendMail4(objectCredential, objectEmail).catch(console.log)
