import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js"
import { mailtrapClient, sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async(email,verificationtToken)=>{
    const recipient = [{email}]

    try {
        const response = await mailtrapClient.send({
            from:sender,
            to: recipient,
            subject:"Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",verificationtToken),
            category: "Email Verification",
        });

        console.log("Email sent successfully",response);
        
    } catch (error) {
        console.error(`Error while sending verification mail`,error);
        throw new Error(`Error sending verification email:${error}`)
    }
}

export const sendWelcomeEmail = async(email, name) =>{
    const recipent = [{email}];

    try {
        const response = await mailtrapClient.send({
            from:sender,
            to:recipent,
            template_uuid: "dcbc365a-4ce6-4cda-9d54-4c8049bb40b2",
            template_variables: {
                "company_info_name": "Pink Basket",
                "name": name,
                "company_info_address": "Civil lines Mathura",
                "company_info_city": "Mathura",
                "company_info_zip_code": "281001",
                "company_info_country": "India"
              }
        })
        console.log("Email sent successfully",response);
        
    } catch (error) {
        console.error(`Error sending welcome email`,error)

        throw new Error(`Error sending welcome email: ${error}`)
        
    }
}