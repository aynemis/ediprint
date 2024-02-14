import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'
import 'dotenv/config'

export async function POST(request) {

    const password = process.env.ZOHO_PASS;  

    try {
        const { name, email, subject, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'smtppro.zoho.eu',
            host: 'smtppro.zoho.eu',
            port: 465,
            secure: true,
            auth: {
                user: 'mansoor@ediprint.re',
                pass: password,
            }
        })

        const mailOptions = {
            from: 'mansoor@ediprint.re',
            to: 'edprint@wanadoo.fr',
            subject: "Nouveau message sur le site",
            html: `
        <h3>Vous avez reçu un nouveau message depuis le site Ediprint :</h3>
        <li> Nom : ${name}</li>
        <li> Email : ${email}</li>
        <li> Sujet : ${subject}</li>
        <li> Message : ${message}</li> 
        `
        }

        await transporter.sendMail(mailOptions)

        return NextResponse.json({ message: "Message envoyé." ,  status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "L'email n'a pas pu être envoyé. Réessayez plus tard ou appelez-nous au 06 92 49 34 19" , error, status: 500 })
    }
}