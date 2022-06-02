import { useEffect, useState } from "react";


const useTooken = user => {
    const[token,setToken]=useState('')
    useEffect(()=>{
        const email=user?.user?.email
        const currentUser={email:email}
       if(email){
            fetch(`http://localhost:5000/user/${email}`,{
                method:'PUT',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(currentUser)
            })
        .then(res=>res.json())
        .then(data=>{
            console.log(data.accessToken)
            localStorage.setItem('accessToken',data.accessToken)
            setToken(data.accessToken)
        })
       }
     console.log(user);
    },[user])
    return [token]
};

export default useTooken;