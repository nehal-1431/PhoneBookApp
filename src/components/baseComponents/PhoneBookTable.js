import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../action/phoneBookAction';
import {Table} from 'react-bootstrap';
import '../../App.css';
import ButtonComponent from './ButtonComponent';

const PhonebookTable = () => {
  const contacts = useSelector((state) => state.phone.phonebook.contacts);
  const dispatch = useDispatch();

  const handleDelete = (name,id) => {
    if(name === 'delete')
      dispatch(deleteContact(id));
  };

  return (
    <div className='table'>
    {contacts.length !== 0 ? 
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th style={{color:'ButtonHighlight'}}>Name</th>
          <th style={{color:'ButtonHighlight'}}>Phone</th>
          <th style={{color:'ButtonHighlight'}}>Email</th>
          <th style={{color:'ButtonHighlight'}}>Action</th>
        </tr>
      </thead>
      <tbody >
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <td style={{color:'ButtonHighlight'}}>{contact.name}</td>
            <td style={{color:'ButtonHighlight'}}>{contact.phone}</td>
            <td style={{color:'ButtonHighlight'}}>{contact.email}</td>
            <td>
              <ButtonComponent variant='danger' className='margin' btnClick={handleDelete} id={contact.id} ButtonName='delete' ButtonText='Delete'/>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    :""}
    </div>
  );
};

export default PhonebookTable;
