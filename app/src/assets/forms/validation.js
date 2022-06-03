export const validateSignIn = (data) => {

    const emailCheck = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (data.email.trim().length <= 0) {
      return { error: 'email', message: 'E-Mail is required'};
    }

    if (!data.email.match(emailCheck)) {
      return { error: 'email', message: 'Please enter a valid email'};
    }

    if (data.password.trim().length < 6) {
      return { error: 'password', message: 'Please enter a valid password'}
    }

    else return;
};

export const validateSignUp = (data) => {

    const emailCheck = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (data.name.trim().length <= 0) {
      return { error: 'name', message: 'Name is required'}
    }

    if (data.email.trim().length <= 0) {
      return { error: 'email', message: 'E-Mail is required'}
    }

    if (!data.email.match(emailCheck)) {
      return { error: 'email', message: 'Please enter a valid e-mail'}
    }

    if (data.password.trim().length < 6) {
      return { error: 'password', message: 'Please enter a valid password (at least 6 characters)'}
    }

    if (data.confirm.trim() !== data.password.trim()) {
      return { error: 'confirm', message: 'Passwords do not match'}
    }

    else return;
};

export const validateCheckout = (data) => {

  const nameCheck = /^[A-Za-z\s]+$/;

  if (!data.fullname.match(nameCheck)) {
    return { error: 'fullname', message: 'Please enter a valid name'}
  }

  if (!data.address.match(/\d/)) {
    return { error: 'address', message: 'Please enter a valid address'}
  }

  if (data.zipcode.trim().length !== 5) {
    return { error: 'zipcode', message: 'Please enter a valid ZIP code'}
  }

  else return;
}
