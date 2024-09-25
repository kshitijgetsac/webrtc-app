import {useState} from 'react';
import { useNavigate} from 'react-router-dom';
export default function Landing(){
    const [name,setName] = useState("");
    const navigate = useNavigate();
    return( <div>
        Name:<input type = "text" onChange = {(e)=>setName(e.target.value)}></input>
        <br/>
        <button onClick = {()=>{
        //join room logic should go here 
        //room should have some form of id and hence room id will be appended after it
            navigate("/room/?" + "name=" + name)


        }}>Join</button>
    </div>
    )
}