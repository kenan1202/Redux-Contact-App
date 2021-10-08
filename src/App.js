import './App.css';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Route exact path = "/" component = {HomeScreen}></Route>
      <Route path = '/addcontact' component = {AddContact}></Route>
      <Route path = "/edit/:id" component = {EditContact}></Route>
    </div>
  );
}

export default App;
