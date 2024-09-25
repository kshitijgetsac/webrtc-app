import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
export default function Room(){
    const [param,setSearchParams] = useSearchParams();
    const name = param.get('name');
    useEffect(()=>{
        //logic to initialize user to the room

    },[name])
    return(
        <div>
            Hi {name}
        </div>
    )
}