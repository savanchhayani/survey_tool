import AppRegex from "./AppRegex";

class Validation {
  /**
   * Validates email is valid or not.
   * @param email {string}
   * @returns {boolean}
   */
  static isEmailValid = (email: string): boolean => AppRegex.email.test(email);
}

export default Validation;
