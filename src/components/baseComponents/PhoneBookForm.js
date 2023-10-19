import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../action/phoneBookAction';
import { Form, Col, Row} from 'react-bootstrap';
import '../../App.css';
import withAuthentication from '../../hoc/withAuthentication';
import ButtonComponent from './ButtonComponent';

const PhonebookForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (name) => {
    if(name ==='contactAdd'){
    const newContact = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      phone,
      email,
    };

    dispatch(addContact(newContact));

    setName('');
    setPhone('');
    setEmail('');
    }
  };

  return (
    <Form className='marginForm'>
        <Row>
            <Col lg={3}>
                <Form.Control
                    type="text"
                    placeholder="Name"
                    className='margin' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
            </Col>
            <Col lg={3}>
                <Form.Control
                    type="Number"
                    placeholder="Phone"
                    className='margin' 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}/>
            </Col>
            <Col lg={3}>
                    <Form.Control
                    type="email"
                    placeholder="Email"
                    className='margin' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
            </Col>
            <Col lg={3}>
                <ButtonComponent className='margin' variant='warning' ButtonText={'Add Contact'} ButtonName='contactAdd' btnClick={handleSubmit}/>
            </Col>
        </Row>      
    </Form>
  );
};

export default withAuthentication(PhonebookForm);
