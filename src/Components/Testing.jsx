import React, { useState } from 'react'
import Garis from "./Garis";
import { useNavigate} from 'react-router-dom'
import FakeLoading2 from './FakeLoading2';


const Testing = () => {
  const data = JSON.parse(localStorage.getItem('user-info'))
  const Navigate = useNavigate()
  const [Loading,setLoading] = useState(false)

  if(localStorage.getItem.length < 0)
  {
    Navigate('/')
  }

  const[coklate,setcoklate]=useState('Coklat')
  const[Eskrime,setEskrim]=useState('Eskrim')
  const[Donate,setDonate]=useState('Donat')

  const Coklat = () =>{
    const data = {coklate}
    setLoading(true)
    setTimeout(()=>{    
      setLoading(false)
      Navigate('/Coklat')
      localStorage.setItem("user-info", JSON.stringify(data));
    },7000)
  }

  

  const Eskrim = () =>{
    const data = {Eskrime}
    setLoading(true)
    setTimeout(()=>{    
      setLoading(false)
      Navigate('/Eskrim')
      localStorage.setItem("user-info", JSON.stringify(data));
    },7000)
  }

  const Donat = () =>{
    const data = {Donate}
    setLoading(true)
    setTimeout(()=>{    
      setLoading(false)
      Navigate('/Donat')
      localStorage.setItem("user-info", JSON.stringify(data));
    },7000)
  }

  return (
    <>
      <div className="border_body">
      {
        Loading && <FakeLoading2/>
      }
      <Garis/>
      <div className="card_choose">
        <div className="profile"></div>
        <div className="border_Text">
          Hello {data.Name},Coba Pilih Hadiah Apa Yang Kamu Mau Dari Faishal??
        </div>
        
        <div className="display_choice">
      
        <button onClick={Coklat} className="button-30" role="button">Coklat</button>

        <button onClick={Eskrim}  className="button-30" role="button">Eskrim</button>
        <button  onClick={Donat} className="button-30" role="button">Donat</button>
        </div>
        
      </div>
      </div>













    </>
  )
}

export default Testing