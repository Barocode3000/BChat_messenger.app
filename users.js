import React from 'react';

const User = ({
  name,
  gender,
  phoneNumber,
  birthDate,
  location,
  username,
  firstName,
  lastName,
  title,
  picture,
  uuid,
  firebaseToken,
}) => {
  return {
    name,
    gender,
    phoneNumber,
    birthDate,
    location,
    username,
    firstName,
    lastName,
    title,
    picture,
    uuid,
    firebaseToken,
  };
};

export default User;
