import React, { useState } from 'react';
import axios from 'axios';
import { Box, Form, FormField, Text, Button, TextArea, Anchor } from 'grommet';

const ContactContent = props => {
  const [contactValue, setContactValue] = useState({
    name: '',
    email: '',
    message: '',
  });

  const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const sendMessage = () => {
    axios
      .post('https://api.adrianleung.dev/mail', {
        firstName: String(contactValue.name).split(' ')[0],
        lastName:
          String(contactValue.name).split(' ')[1] === undefined
            ? ''
            : String(contactValue.name).split(' ')[1],
        email: contactValue.email,
        message: contactValue.message,
      })
      .then(res => {
        if (res.status === 200) {
          alert('Thank you for your message. I will get back to you shortly!');
          setContactValue({ name: '', email: '', message: '' });
          props.showContact(false);
        } else {
          alert('Message was unable to send. Please try again');
        }
      })
      .catch(_err => alert('Message was unable to send. Please try again'));
  };

  return (
    <Box overflow={'scroll'}>
      <Text margin={'medium'}>
        Thank you for visiting my website. If you would like to contact me, feel
        free to fill out this form or contact me by email or phone.
        <br />
        <br />
        Tel:{' '}
        <Anchor href={'tel:7809017155'} color={'white'} weight={'bold'}>
          (780) 901-7155
        </Anchor>
        <br />
        Email:{' '}
        <Anchor
          href={'mailto:contact@adrianleung.dev'}
          color={'white'}
          weight={'bold'}>
          contact@adrianleung.dev
        </Anchor>
      </Text>
      <Form
        value={contactValue}
        onChange={value => setContactValue(value)}
        onSubmit={() => sendMessage()}
        onReset={() => setContactValue({ name: '', email: '', message: '' })}>
        <FormField
          validate={(value, _allValues) => {
            if (value === '') {
              return { message: 'Required', status: 'error' };
            } else {
              return { message: '', status: 'info' };
            }
          }}
          name={'name'}
          placeholder={'Name'}
          margin={'medium'}
        />
        <FormField
          validate={(value, _allValues) => {
            if (value === '') {
              return { message: 'Required', status: 'error' };
            }

            if (emailRegExp.test(String(value).toLowerCase())) {
              return { message: '', status: 'info' };
            } else {
              return { message: 'Invalid', status: 'error' };
            }
          }}
          name={'email'}
          placeholder={'Email'}
          margin={'medium'}
        />
        <FormField
          validate={(_value, allValues) => {
            if (allValues.message === '') {
              return { message: 'Required', status: 'error' };
            } else {
              return { message: '', status: 'info' };
            }
          }}
          margin={'medium'}>
          <TextArea
            id={'message-text-area'}
            placeholder={'Message'}
            name={'message'}
            value={contactValue.message}
            rows={15}
            resize={false}
          />
        </FormField>
        <Box direction='row' gap='medium' margin={'medium'} justify={'end'}>
          <Button
            type='submit'
            label='Submit'
            style={{ fontWeight: 'bolder' }}
          />
          <Button type='reset' label='Reset' />
        </Box>
      </Form>
    </Box>
  );
};

export default ContactContent;
