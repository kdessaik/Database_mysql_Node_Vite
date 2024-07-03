import React, { useEffect,useState } from 'react'

function App() {
const [data,setData]=useState([])

    useEffect(()=>{

      fetch('http://localhost:8081/user')
      .then((res) => {
         return res.json()} )
     
      .then((data)=>{
        return setData(data)

       }
      
      
      )
      .catch((err)=>{
        return console.log(err)
      })



    },[])



  
  return (
    <div>
      <h1>The list of members are</h1>
     <ul>
      {data.map(
        (d)=>{
         return( <>
         
        <span><li id={d.id}>
          {d.username}: {d.email}


         </li></span> 
         
         </>)

        }

      )}
     </ul>
      
    </div>
  )
}
export default App
