import React, { useState, useEffect, } from 'react'
import { Link } from 'react-router-dom'


function Add() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [record, setRecord] = useState([]);
  const id = Math.floor(Math.random() * 100);

  const handleSubmit = () => {
    let obj = { name, email, password, id };
    let allData = [...record, obj];
    setRecord(allData);
    console.log(allData);
    localStorage.setItem('user', JSON.stringify(allData));
    setName('')
    setEmail('')
    setPassword('');
  }


  return (
    <>
      <center>
        <div className="panel">
          <div className="state"><br /><br /><h1>Add Page</h1></div>
          <form>
            <div className="form">
              <label style={{ color: 'white', fontWeight: "bold" }}>Name</label>
              <input type="text" style={{ margin: '10px' }} value={name} onChange={(e) => setName(e.target.value)} />

              <label style={{ color: 'white', fontWeight: "bold" }}>Email</label>
              <input type="email" style={{ margin: '10px' }} value={email} onChange={(e) => setEmail(e.target.value)} />

              <label style={{ color: 'white', fontWeight: "bold" }}>Password</label>
              <input type="password" style={{ margin: '10px' }} value={password} onChange={(e) => setPassword(e.target.value)} />

              <button className="login" type='button' onClick={handleSubmit}>Submit</button>
            </div>
          </form>
        </div>

        <Link to={'/'} style={{ color: 'white', fontWeight: 'bold', fontSize: '28px' }}>VIEW</Link>
      </center>
    </>
  )
}

export default Add