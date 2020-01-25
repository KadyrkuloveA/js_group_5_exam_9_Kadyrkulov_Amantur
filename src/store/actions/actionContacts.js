import axiosContacts from "../../axios-contacts";
import {
    ADD_CONTACTS_ERROR,
    ADD_CONTACTS_SUCCESS, CHANGE_CONTACT_ERROR,
    CHANGE_CONTACT_SUCCESS, DELETE_CONTACT_ERROR, DELETE_CONTACT_SUCCESS,
    GET_CONTACTS_ERROR,
    GET_CONTACTS_SUCCESS
} from "./actionTypes";

const addContactSuccess = () => ({type: ADD_CONTACTS_SUCCESS});
const addContactError = () => ({type: ADD_CONTACTS_ERROR});

const getContactsSuccess = contacts => ({type: GET_CONTACTS_SUCCESS, contacts});
const getContactsError = () => ({type: GET_CONTACTS_ERROR});

const changeContactSuccess = () => ({type: CHANGE_CONTACT_SUCCESS});
const changeContactError = () => ({type: CHANGE_CONTACT_ERROR});

const deleteContactSuccess = () => ({type: DELETE_CONTACT_SUCCESS});
const deleteContactError = () => ({type: DELETE_CONTACT_ERROR});

export const addContact = contact => {
    return async dispatch => {
        try{
            await axiosContacts.post('/contacts.json', contact);
            dispatch(addContactSuccess());
        } catch (e) {
            console.error('Something did wrong when you post :(');
            dispatch(addContactError());
        }
    }
};

export const getContacts = () => {
    return async dispatch => {
        try{
            const res = await axiosContacts.get('/contacts.json');
            dispatch(getContactsSuccess(res.data));
        } catch(e){
            console.error('Something did wrong when you request contacts :(');
            dispatch(getContactsError());
        }
    };
};

export const editContact = (id, contact) => {
    return async dispatch => {
        try{
            await axiosContacts.put('/contacts/' + id + '.json', contact);
            dispatch(changeContactSuccess());
        } catch (e) {
            dispatch(changeContactError());
        }
    }
};

export const deleteContact = (id) => {
    return async dispatch => {
        try{
            await axiosContacts.delete('/contacts/' + id + '.json');
            dispatch(deleteContactSuccess());
        } catch (e) {
            dispatch(deleteContactError());
        }
    }
};

