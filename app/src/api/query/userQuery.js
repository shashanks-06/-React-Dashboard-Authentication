import Axios from "../axios";

const USER_URL = "/user";

export const signinUser = async ({ password, email }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/signin`, {
      password,
      email,
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const signupUser = async ({ password, email, firstName, lastName }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/signup`, {
      password,
      email,
      firstName,
      lastName,
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const sendVerificationMail = async ({ email }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/send-verification-mail`, {
      email,
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};

export const verifyEmailAddressSignup = async ({ token }) => {
  try {
    const { data } = await Axios.post(`${USER_URL}/verfiy-user-mail`, {
      token,
    });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
};
