const { z } = require("zod");

const userSchema = z.object({
  firstName: z.string({ invalid_type_error: "First Name must be string!" }).max(32),
  lastName: z.string({ invalid_type_error: "Last Name must be string!" }).max(32),
  email: z.string().email("Invalid email format!")
})

const updateUserSchema = userSchema.partial()

module.exports = { userSchema, updateUserSchema }
