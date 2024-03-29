import React, { useEffect, useState }  from 'react'
import { Link, useLocation } from 'react-router-dom'

function View() {
 
  const {state , id} = useLocation();
  const [Record , setRecord] = useState(state)

  const deleteData = (id) => {
    let deleteRecord = Record.filter((val) => {
      return val.id !== id;
    })
    setRecord(deleteRecord);
    localStorage.setItem('user' , JSON.stringify(deleteRecord));
    alert("Record is Succesfully Delete")
  }
  useEffect(() => {
    let oldRecord = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []
    setRecord(oldRecord)
  }, [])
  
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
              <th></th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
             Record && Record.map((val , i) => { i = i + 1
                return(
                  <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.password}</td>
                    <td><button onClick={() => deleteData(val.id)} style={{margin : '5px' , padding : '10px 20px' , borderRadius : '10px' , border : '1px solid'}}>Delete</button></td>
                    <td><button style={{margin : '5px' , padding : '10px 20px' , borderRadius : '10px' , border : '1px solid'}}><Link to={`/EditRecord/${val.id}`}>Edit</Link></button></td>
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