import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT} from '../constants/contactConstants';

const initialState = [];


const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CONTACT:
            state.push(action.payload);
            return [...state];
        case EDIT_CONTACT:
            const index = state.findIndex(el => el.id === action.payload.id);
            state[index] = action.payload;
            return [...state];
        case DELETE_CONTACT:
            return state.filter(el => el.id !== action.payload)
        default:
            return state;
    }
}

export default contactReducer;