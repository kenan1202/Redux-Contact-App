import './Contact.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Delete_Contact } from '../redux/actions/contactActions';



const Contact = ({contact}) => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state);
    const index = contacts.findIndex(el => el.id === contact.id);

    const deleteContact = () => {
        dispatch(Delete_Contact(contact.id));
    }

    return (
        <div className = "contactList">
            <div>
                <h3>{index + 1}</h3>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
            </div>
            
            <div className = "editBox">
                <Link to = {`/edit/${contact.id}`} className = "editLink">Edit</Link>
                <span className = "deleteBtn" onClick = {deleteContact}>Delete</span>
            </div>
            
        </div>
    )
}

export default Contact
