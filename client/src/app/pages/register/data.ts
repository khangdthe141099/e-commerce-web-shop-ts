interface InitProps {
  name: string;
  address: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Inputs = (props: InitProps) => {
  return [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'Name',
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character!",
      label: 'Name',
      pattern: '^[A-Za-z0-9 ]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'address',
      type: 'text',
      placeholder: 'Address',
      errorMessage: 'It should be a valid address!',
      label: 'Address',
      required: true,
    },
    {
      id: 3,
      name: 'username',
      type: 'text',
      placeholder: 'User Name',
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: 'User Name',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 4,
      name: 'email',
      type: 'text',
      placeholder: 'Email',
      errorMessage: 'It should be a valid address!',
      label: 'Email',
      required: true,
    },
    {
      id: 5,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: "Passwords don't match!",
      label: 'Confirm Password',
      pattern: props.password,
      required: true,
    },
  ];
};
