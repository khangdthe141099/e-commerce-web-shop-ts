import { useState, ChangeEvent } from 'react';
import { registerStart } from '../../../features/user/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Container,
  Wrapper,
  Title,
  Form,
  Input,
  Agreement,
  Button,
  Option,
  Span,
  Noti,
  Warning,
} from './register.elements';
import FormInput from '../../components/Form/FormInput';
import { Inputs } from './data';
import Swal from 'sweetalert2';

function Register() {
  const [values, setValues] = useState({
    name: '',
    address: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  console.log(values);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputs = Inputs(values);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('hihi submit r');

    dispatch(registerStart(values));

    Toast.fire({
      icon: 'success',
      title: 'Create account successfully!!!',
    }).then(result => {
      navigate('/login');
    });
  };

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          {inputs.map(input => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name as keyof typeof values]}
              onChange={onChange}
            />
          ))}
          <Agreement>
            By creating an account, I consent to processing of my personal data
            in account with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Option>
            Do you already have an account.
            <Link to={'/login'} style={{ color: 'teal', fontWeight: 'bold' }}>
              SIGN IN HERE
            </Link>
          </Option>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
