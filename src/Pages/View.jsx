import React, {useState , useEffect  } from 'react'
import { Link } from 'react-router-dom'

function View() {
  const [record, setRecord] = useState([]);
  const id = Math.floor(Math.random() * 100);

  useEffect(() => {
    let all = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []
    setRecord(all)
  },[])

  const deleteData = (id) => {
    let deleteRecord = record.filter((val) => {
      return val.id !== id;
    })
    setRecord(deleteRecord);
    localStorage.setItem('user' , JSON.stringify(deleteRecord));
    alert("Record is Succesfully Delete")
  }
  
  return (
    <center>
      <h1 style={{marginTop : "50px"}}>View Page</h1>
      <div className="container">
        <table className="rwd-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              record.map((val , i) => { i = i + 1
                return(
                  <tr key={val.id}>
                    <td>{i}</td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.password}</td>
                    <td><button onClick={() => deleteData(val.id)}>Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <Link to={'/AddRecord'} style={{color : 'white', fontWeight : 'bold', fontSize : '28px'}}>ADD</Link>
    </center>
  )
}
export default View