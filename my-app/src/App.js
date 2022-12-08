import { useState ,useEffect, useRef} from 'react';
import './App.css';

function App() {
  //database
  let idRef=useRef()
  let [state,setState]=useState([
  {
    id: 1,
    name: 'Huseyn',
    surname: 'Hesenov',
    age: 19
  },
  {
    id: 2,
    name: "Rufet",
    surname: "Isgenderov",
    age: 19
  },
  {
    id: 3,
    name: "Nihad",
    surname: "Osmanov",
    age: 19
  },
  {
    id: 4,
    name: "Adil",
    surname: "Resulov",
    age: 19
  }
]
  )

//datanin elave edilmesi  
const Add=(event)=>{
  event.preventDefault()
  const user={
    id: event.target.id.value,
    name: event.target.name.value,
    surname: event.target.surname.value,
    age: event.target.age.value,
  }
  setState([...state,user])
}
//datanin silinmesi

const Delete=()=>{
  let id=idRef.current.value
  let newDdata=state.filter(item=>{
    return item.id!==Number(id)
  })
  setState(newDdata)
}


  return (
    <>
    <div className='main'>
      <form onSubmit={Add} >
        <input type="number" name='id' placeholder='id' />
        <input type="text" name='name' placeholder='Name' />
        <input type="text" name='surname' placeholder='Surname'/>
        <input type="text" name='age' placeholder='Age' />
        <button>ADD</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
            state.map((item,i)=>{
              return(
            <tr key={i+item.name}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.age}</td>
            </tr>
            )
            })
          }

        </tbody>
      </table>
      </div>
        <div className='Input'>
      <input type="number" ref={idRef} placeholder="id daxil et"/>
      <button onClick={Delete}>Delete</button>
      </div>
    </>
  )
}

export default App;
