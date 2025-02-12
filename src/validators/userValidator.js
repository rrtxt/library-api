const { z } = require("zod");

export default class UserValidation {
  UserSchema = z.object({
    firstName: z.string({ invalid_type_error: "First Name must be string!" }).max(32),
    lastName: z.string({ invalid_type_error: "Last Name must be string!" }).max(32),
    email: z.string().email("Invalid email format!")
  })

  static CREATE = this.UserSchema
  static UPDATE = this.UserSchema.partial()
}



