
import { useEffect, useState } from 'react';
import './App.css';
import { addDoc, collection, doc, getDocs, updateDoc,deleteDoc } from 'firebase/firestore';
import { db } from './firebase-config';
function App() {
  const [name,setName] = useState("");
  const [age,setAge] = useState(0);
  const [users,setUsers] = useState([])
  const userRef = collection(db,"users")

  const createUser = async () => {
    await addDoc(userRef,{name,age:Number(age)})
  }

  const updateUser = async(id,age)=> {
    const userDoc = doc(db,"users",id);
    await updateDoc(userDoc,{age:age+1})
  }

  const deleteUser = async(id)=>{
    const userDoc = doc(db,"users",id);
    await deleteDoc(userDoc)
  }
  useEffect (()=>{
const getUsers = async()=>{
const data  = await getDocs(userRef)
setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
} 
getUsers()
  },[])
  return (
    <div className="App">
      <div>
        <input type='text' placeholder='name...'  onChange={(e)=>setName(e.target.value)}/>
        <input type='number' placeholder='age..' onChange={(e)=>setAge(e.target.value)}/>
        <button onClick={createUser}>Create User</button>
      </div>
      {users.map((user)=>{
        return (
          <div key={user.id}>
            {" "}
            <h2>Name:{user.name}</h2>
            <p>Age:{user.age}</p>
            <button onClick={()=>{updateUser(user.id,user.age)}}>Increase age </button>
            <button onClick = {()=>{deleteUser(user.id)}}>Delete</button>
            </div>
        )
      })}
    </div>
  );
}

export default App;
