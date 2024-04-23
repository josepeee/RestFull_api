const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport ({
    service: "gmail",
    auth:{
        user: "ivancodespace@gmail.com",
        pass: "leaz kksn lbfn qlpl",
    }
});

const sedEmail = async (to,subject, html)  => {
    try{
        const mailOptions = {
        from:"ivancodespace@gmail.com",
        to:to,
          subject: subject,
          html: html,
        }

          await transporter.sendMail(mailOptions)

    } catch (error) {
         console.log(`Error al enviar un mensaje`, error.message)
    }

}
module.exports = sedEmail;