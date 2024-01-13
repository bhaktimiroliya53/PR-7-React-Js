import React, { useState, useEffect, } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


function Edit() {

  const {id} = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [record, setRecord] = useState([]);
  const navigate = useNavigate()


  const handleSubmit = () => {
    if(!name || !email || !password){
            alert("All field are required");
            return false;
        }
        let updateRecord = record.map((val)=>{
            if(val.id == id){
                return {
                    ...val,
                    name : name,
                    email : email,
                    password : password,
                }
            }
            return val;
        })
        setRecord(updateRecord);
        localStorage.setItem('user',JSON.stringify(updateRecord));
        alert("Record update");
        navigate('/');
  }

  
  useEffect(() => {
    let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []
    setRecord(all)
    let single = all.find(val => val.id == id)
    setName(single.name);
    setEmail(single.email);
    setPassword(single.password);
  },[id])

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

export default Edit



