import React, { useState, useEffect } from 'react';
import { Box, Text, Button, Form, FormField } from 'grommet';
import { UserAdmin } from 'grommet-icons';
import { login, checkAuth } from '../services/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { VALID_TOKEN } from '../constants';

type Props = {};

const Login: React.FC<Props> = () => {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });
  const [hideIncorrect, setHideIncorrect] = useState(true);

  const handleLogin = () => {
    login(loginInfo.email, loginInfo.password)
      .then(result => {
        if (result.accessToken !== null) {
          navigate('/admin');
        } else {
          setHideIncorrect(false);
        }
      })
      .catch(() => {
        setHideIncorrect(false);
      });
  };

  useEffect(() => {
    const validate = async () => {
      if ((await checkAuth()) === VALID_TOKEN) {
        setRedirect(true);
      }
    };
    validate();
  }, []);

  return redirect ? (
    <Navigate to={'/admin'} />
  ) : (
    <Box
      width={'100vw'}
      height={'100vh'}
      background={'dark-3'}
      justify={'center'}
      align={'center'}>
      <Box
        width={'medium'}
        height={'medium'}
        background={'white'}
        round={'medium'}
        pad={'small'}
        gap={'medium'}
        align={'center'}
        border={true}>
        <UserAdmin size={'large'} />
        <Text>Welcome!</Text>
        <Box height={'100%'}>
          <Form
            value={loginInfo}
            onSubmit={() => handleLogin()}
            onChange={value => setLoginInfo(value)}>
            <Box height={'100%'} gap={'medium'}>
              <Box gap={'small'}>
                <FormField
                  name={'email'}
                  placeholder={'Username'}
                  type={'email'}
                  autoComplete={'email'}
                />
                <FormField
                  name={'password'}
                  placeholder={'Password'}
                  type={'password'}
                  autoComplete={'password'}
                />
              </Box>
              <Text color={'red'} hidden={hideIncorrect}>
                Incorrect username or password
              </Text>
              <Box direction={'row'} justify={'center'}>
                <Button plain label={'Login'} type={'submit'} />
              </Box>
            </Box>
          </Form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
