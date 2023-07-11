import {useEffect, useState} from "react"
import { makeRequest } from "../makeRequest";

const useFetch = (url)=>{

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{
        setLoading(true)
        const fetchData = async() =>{
            try{
                const res = await makeRequest.get(url)
                setData(res.data.data)
            }catch(err){
                setError(true )
            }
            setLoading(false)
        }
        fetchData()
    },[url])

    return{data,loading,error}
}

export default useFetch;