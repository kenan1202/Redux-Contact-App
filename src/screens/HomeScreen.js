import './HomeScreen.css';
import Contact from '../components/Contact';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';


const HomeScreen = () => {
    const contacts = useSelector(state => state);


    return (
        <div className = "homeScreen">
            <Link to = '/addcontact' className = "addContactLink">Add Contact</Link>

            <div className = "contactScreen">
                <div className = "contactScreenTitle">
                    <h3>Id</h3>

                    <p>Name</p>
                    <p>Email</p>
                    <p>Phone</p>
                </div>

                {contacts.map((contact) => (
                    <Contact key = {contact.id} contact = {contact}></Contact>
                ))}

            </div>
        </div>
    )
}

export default HomeScreen
