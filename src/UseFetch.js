import {useState,useEffect} from 'react';






const useFetch = (url)=>
{


const[isPending,setIsPending] = useState(true);
const [data,setData]=useState(null);
const [error,setError]=useState(null);

    useEffect(()=>
    {
        setTimeout(()=>
        {
            
            fetch(url)
            .then(res=>{
                if(!res.ok) throw Error('Could not reach blogs');
                return res.json();
            })
            .then((data)=>{
                setData(data);
                setIsPending(false);
                setError(false);
            })
            .catch(err =>{
                
                setError(err.message);
                setIsPending(false);
            })
            
        },1000)
       
    },[url]);

return {data, isPending, error };

}

export default  useFetch;