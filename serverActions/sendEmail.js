"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
// import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: "jacob.brian.edwards@gmail.com",
            subject: "Message from portfolio",
            replyTo: senderEmail,
            // react: React.createElement(ContactFormEmail, {
            //     message: message,
            //     senderEmail: senderEmail,
            // }),
            text: message
        });
    } catch (error) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };
};
