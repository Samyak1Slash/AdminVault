const { z } = require("zod");

const contactformSchema = z.object({
    username: z
        .string({ required_error: "Username is required" })
        .trim()
        .min(3, { message: "Username   be at least 3 characters" })
        .max(255, { message: "Username must not exceed 255 characters" }),
    
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least 3 characters" })
        .max(255, { message: "Email must not exceed 255 characters" }),

    message: z
        .string({ required_error: "Message is required" })
        .trim()
        .min(3, { message: "Message must be at least 3 characters" })
        .max(255, { message: "Message must not exceed 255 characters" }),
});

module.exports = contactformSchema;
