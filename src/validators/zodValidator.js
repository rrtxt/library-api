class ZodValidator {
  static validate(schema, objectValidate) {
    return schema.parse(objectValidate)
  }
}

module.exports = ZodValidator
