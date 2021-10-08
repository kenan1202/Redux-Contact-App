import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT} from '../constants/contactConstants';

export const Add_Contact = (obj) => {
    return {
        type: ADD_CONTACT,
        payload: obj
    }
}

export const Edit_Contact = (obj) => {
    return {
        type: EDIT_CONTACT,
        payload: obj
    }
}

export const Delete_Contact = (id) => {
    return {
        type: DELETE_CONTACT,
        payload: id
    }
}