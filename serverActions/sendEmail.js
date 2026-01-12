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
            subject: "New Portfolio Contact Form Message",
            replyTo: senderEmail,
            text: `You received the following message from your portfolio contact form:

MESSAGE:
${message}

---
SENDER'S EMAIL: ${senderEmail}
`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
                    <div style="background-color: white; border-radius: 8px; padding: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <h2 style="color: #2DD4BF; margin-top: 0;">New Portfolio Contact</h2>
                        <p style="color: #555; font-size: 16px; line-height: 1.6;">You received the following message from your portfolio contact form:</p>

                        <div style="background-color: #f8f9fa; border-left: 4px solid #2DD4BF; padding: 15px; margin: 20px 0; border-radius: 4px;">
                            <p style="color: #333; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                        </div>

                        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 25px 0;">

                        <p style="color: #777; font-size: 14px; margin: 5px 0;">
                            <strong>Sender's Email:</strong>
                            <a href="mailto:${senderEmail}" style="color: #2DD4BF; text-decoration: none;">${senderEmail}</a>
                        </p>
                    </div>
                </div>
            `
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
