const validate = (value, rules, connectedValue) => {
  let isValid = true;

  for (let rule in rules) {
    switch (rule) {
      case 'isEmail':
        isValid = isValid && emailValidator(value);
        break;
      case 'minLength':
        isValid = isValid && minLengthValidator(value, rules[rule]);
        break;
      case 'equalTo':
        isValid = isValid && equalToValidator(value, connectedValue[rule]);
        break;
      case 'notEmpty':
        isValid = isValid && notEmptyValidator(value);
        break;
      default:
        isValid = true;
    }
  }

  return isValid;
}

const emailValidator = value => {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value.toLowerCase());
}

const minLengthValidator = (value, minLength) => {
  return value.length >= minLength;
}

const equalToValidator = (value, checkValue) => {
  return value === checkValue;
}

const notEmptyValidator = value => {
  return value.trim() !== '';
}

export default validate;
