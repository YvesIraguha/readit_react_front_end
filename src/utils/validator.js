export default class Validator {
  static signUp(info) {
    const fields = Object.keys(info);
    let error;
    for (const key of fields) {
      if (info[key].length < 5) {
        return (error = `${key} should be more than 5 characters long`);
      }
    }
    return error;
  }
}
