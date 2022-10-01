import {Button} from '@mui/material'
import {useEffect, useState,useRef} from 'react';
import './App.css';

function App() {
  const [userData,setUserData]=useState({});
  const [userDetail,setUserDetail]=useState([]);
  const setUser=()=>{
// console.log(userData);
setUserDetail(userDetail=>[...userDetail,userData]);
// console.log(userDetail);
}
  const updateChange = (e) =>{
  setUserData({...userData,[e.target.name]:e.target.value});
  
}


  return (
    <div className="App">
      <div className='form flex'>
   <form>
      Name: <input name='name' type="text"  onChange={updateChange} required/>
      Email: <input name='email' type='email'  onChange={updateChange} required/>
      Website: <input name='website' type='url'   onChange={updateChange} required/>
      Image link: <input name='image' type='url'  onChange={updateChange} required />
      Gender: 
            &nbsp;Male:  <input value='male' onChange={updateChange} name='gender' type='radio' id='gender'/>
             &nbsp; &nbsp;Female:  <input value='female' onChange={updateChange} name='gender' type='radio' id='gender'/><br/>
      Skills:
         <input  value='Java' name='skill1'  onChange={updateChange} type='checkbox'/> Java
          <input value='Html' name='skill2' onChange={updateChange}  type='checkbox'/> Html
          <input value='CSS'  name='skill3' onChange={updateChange} type='checkbox'/> CSS
     <br /><Button style={{backgroundColor:"rgb(10,0,170)",color:"white"}} onClick={setUser}>Enroll student</Button>
     <Button style={{backgroundColor:"rgb(10,0,170)",color:"white",marginLeft:"40px",width:"70px"}} type='reset'>Clear</Button>
</form>
     </div>
<div className='output flex'>
{
userDetail.map((detail,index)=>{
return(
<div className='cards'>
<img vspace='50'src={detail.image}/>
<p align='left' >Name: <span>&nbsp;{detail.name}</span></p>
<p align='left' >Email: <span>&nbsp;{detail.email}</span></p>
<p align='left' >Website: <span>&nbsp;{detail.website}</span></p>
<p align='left' >Gender: <span>&nbsp;{detail.gender}</span></p>
<p align='left'>Skills:
{detail.skill1?<span>&nbsp;{detail.skill1}</span>:''}
{detail.skill2?<span>&nbsp;{detail.skill2}</span>:''}
{detail.skill3?<span>&nbsp;{detail.skill3}</span>:''}</p>
</div>)
})
}
</div>
    </div>
  );
}

export default App;
