import './AddContact.css';
import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Add_Contact } from '../redux/actions/contactActions';

const AddContact = () => {
    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();
    const [error, setError] = useState(false);

    const nameField = useRef();
    const emailField = useRef();
    const phoneField = useRef();


    const addContact = (e) => {
        e.preventDefault();

        const id = contacts.length + 1;
        const name = nameField.current.value;
        const email = emailField.current.value;
        const phone = phoneField.current.value;
        
        if(name && email && phone) {
            setError(false);
            dispatch(Add_Contact({ id, name, email, phone}));
            history.goBack();
        }
        else {
            setError(true);
        }
    }

    return (
        <div className = "addContactPage">
            <h1>Add Post</h1>

            <form>
                {error && <p className = "error">Please enter valid information!</p>}
                <input type = "text" maxLength = '15' ref = {nameField} placeholder = "type name..."></input>
                <input type = "email" maxLength = '15' ref = {emailField} placeholder = "type email..."></input>
                <input type = "text" maxLength = '10' ref = {phoneField} placeholder = "type phone..."></input>
                <button className = "addContactBtn" onClick = {addContact}>Add Student</button>
            </form>
        </div>
    )
}

export default AddContact
