import {
    ADD_CONTACTS_ERROR,
    ADD_CONTACTS_SUCCESS, CHANGE_CONTACT_ERROR, CHANGE_CONTACT_SUCCESS,
    GET_CONTACTS_ERROR,
    GET_CONTACTS_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    contacts: {}
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACTS_SUCCESS:
            return {...state};
        case ADD_CONTACTS_ERROR:
            return {...state};
        case GET_CONTACTS_SUCCESS:
            return {...state, contacts: action.contacts};
        case GET_CONTACTS_ERROR:
            return {...state};
        case CHANGE_CONTACT_SUCCESS:
            return {...state};
        case CHANGE_CONTACT_ERROR:
            return {...state};
        default:
            return state
    }
};

export default contactsReducer;