import React, {useEffect, useState} from 'react';
import {deleteContact, getContacts} from "../../store/actions/actionContacts";
import {connect} from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const initial = {};

const Contacts = (props) => {
    const [contact, setContact] = useState(initial);
    const [contactId, setContactId] = useState('');
    const [modal, setModal] = useState(false);

    useEffect(()=> {
        props.getContacts();
        //eslint-disable-next-line
    }, []);

    const toggle = () => setModal(!modal);

    const contactOverview = (id) => {
        const currentContact = {...props.contacts[id]};
        setContact(currentContact);
        setContactId(id);
        toggle();
    };

    const editContact = (id) => {
        const editLink = '/contact/' + id + '/edit';
        props.history.push(editLink);
    };

    const deleteContact = async (id) => {
        await props.deleteContact(id);
        props.getContacts();
        toggle();
    };

    return (
        <div className="card" style={{maxWidth: '1000px', margin: '40px auto'}}>
            <div className="card-header text-center">
                Contacts
            </div>
            <div className="card-body ">
                {Object.keys(props.contacts).map(contact => (
                    <div className="card mt-2 mb-2" key={contact} style={{cursor: 'pointer'}} onClick={() => contactOverview(contact)}>
                        <div className="card-body row align-items-center">
                            <img src={props.contacts[contact].img} style={{maxWidth: '60px', maxHeight: '60px'}} className="rounded ml-2" alt=""/>
                            <span className='ml-3'>{props.contacts[contact].name}</span>
                        </div>
                    </div>
                ))}
            </div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{contact.name}</ModalHeader>
                <ModalBody>
                    <div className='row justify-content-around'>
                        <div className='col-5'>
                            <img src={contact.img} style={{maxWidth: '200px', maxHeight: '200px'}} className="rounded ml-2" alt=""/>
                        </div>
                        <div className='col-6'>
                            <p>Number: {contact.number}</p>
                            <p>Mail: {contact.mail}</p>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => editContact(contactId)}>Edit</Button>{' '}
                    <Button color="danger" onClick={() => deleteContact(contactId)}>Delete</Button>
                </ModalFooter>
            </Modal>
        </div>

    );
};

const mapStateToProps = state => ({
  contacts: state.cr.contacts
});

const mapDispatchToProps = dispatch => ({
    getContacts: () => dispatch(getContacts()),
    deleteContact: (id) => dispatch(deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);