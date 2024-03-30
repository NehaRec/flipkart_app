export const isEmailValid = (email: string) => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return email.match(validRegex) ? true : false;
};

export const isPhoneValid = (phone: string) => {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phone.match(phoneRegex) ? true : false;
};

export const isPasswordValid = (password: string) => {
  return password && password.length >= 8 ? true : false;
};
