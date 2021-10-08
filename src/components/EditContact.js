import './EditContact.css';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Edit_Contact } from '../redux/actions/contactActions';


const EditContact = () => {
    const { id } = useParams();
    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();
    
    
    const contact = contacts.find(el => el.id === +id);

    const [name, setName] = useState(contact.name);
    const [email, setEmail] = useState(contact.email);
    const [phone, setPhone] = useState(contact.phone);
    const [error, setError] = useState(false);

    const updateContact = (e) => {
        e.preventDefault();

        if(name && email && phone) {
            setError(false);
            dispatch(Edit_Contact({ id: +id, name, email, phone }));
            history.goBack();
        }
        else {
            setError(true);
        }

    }

    const cancelContact = (e) => {
        e.preventDefault();

        history.goBack();
    }
    
    const goBack = () => {
        history.goBack();
    }


    return (
        <div className = "editContactPage">
            <button className = "goBackBtn" onClick = {goBack}>Go Back</button>

            <form>
                {error && <p className = "error">Please enter valid information</p>}
                <input type = "text" maxlength = '15' value = {name} onChange = {(e) => setName(e.target.value)} placeholder = "type name..."></input>
                <input type = "email" maxlength = '15' value = {email} onChange = {(e) => setEmail(e.target.value)} placeholder = "type email..."></input>
                <input type = "text" maxlength = '10' value = {phone} onChange = {(e) => setPhone(e.target.value)} placeholder = "type phone..."></input>
                <div className = "btnBox">
                    <button className = "updateContactBtn" onClick = {updateContact}>Update Contact</button>
                    <button className = "cancelContactBtn" onClick = {cancelContact}>cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditContact
