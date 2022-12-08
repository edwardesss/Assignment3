
import React, {useState, useEffect} from 'react';
import UserForm from './Components/UserForm';
import './App.css';
import UserDetails from './Components/UserDetails';
import LoadingSpinner from './Components/loader'
import axios from 'axios';



function App() {
  let[showForm, setShowForm] = useState(false);
  let[users, setUsers] = useState([]);
  let[loading, setLoading] = useState(false);
  let[editMode, setEditMode] = useState(false);
  let[userToedit, setUser] = useState(null);

  useEffect(() => {
    fetchUsers();

  }, []);

  function addUserHandler(){
    setEditMode(false);
    setShowForm(true);
  }

  function closeForm(){
    setShowForm(false)
  }

  function onCreateUser(user){

    if(!editMode){

    axios.post('https://omar-3faaf-default-rtdb.firebaseio.com/users.json', user)
    
    // fetch('https://omar-3faaf-default-rtdb.firebaseio.com/users.json', {
    //   method: 'POST',
    //   body: JSON.stringify(user),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    .then((response) => {
      console.log(response.data);
      fetchUsers();
      setShowForm(false);
    })
    }
    else{
      console.log(user)
      console.log(userToedit);
      axios.put('https://omar-3faaf-default-rtdb.firebaseio.com/users/'+userToedit.id+'.json', user)
      .then ((response) => {
          console.log(response);
      })

    } 
    fetchUsers();
    setShowForm(false);
    fetchUsers();
    setShowForm(false);
  }

  function fetchUsers(){


      setLoading(true);



    fetch('https://omar-3faaf-default-rtdb.firebaseio.com/users.json')
      .then((response) => {
       return response.json(); 
      })
      .then((data) => {
        let userData = [];

        for(let key in data){
          userData.push({...data[key], id: key})
        }
        // console.log(userData);
        setUsers(userData);
        setLoading(false);
      })

    
  }

  function onEditUser(user){
    setEditMode(true);
    setUser(user);
    setShowForm(true);
    console.log(user);
  }


  return (
      <div>
        <div className='page-header'>
          <button className='btn btn-success' onClick={addUserHandler}>Add a client</button>
          <button className='btn btn-normal' onClick={fetchUsers}>Update</button> 
        </div>
        {!loading && <UserDetails users = {users} onEditUser={onEditUser}></UserDetails>}
        {loading && <LoadingSpinner></LoadingSpinner>}
        {showForm && <UserForm closeForm={closeForm} onCreateUser={onCreateUser} editMode={editMode} user={userToedit}></UserForm>}
      </div>
  );
}

export default App;