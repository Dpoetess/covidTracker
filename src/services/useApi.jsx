import {useState, useEffect} from "react"

const useApi = (url) =>{
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

<<<<<<< HEAD
    useEffect(()=>{ 
        const fetchData = async() =>{
=======
     useEffect(()=>{ 
        const getData = async(url) =>{
>>>>>>> 3e5f3c3 (initial api)
            try{
                const response = await fetch(url);
                if(!response.ok) {
                    throw new Error (`Error! status: ${response.status}`);
                }
<<<<<<< HEAD
                const result = await response.json();
                setData(result)
                setError(null);
            } catch (error) {
                setError(error.message);
=======
                const json_data = await response.json();
                setData(json_data); // Actualiza el estados de los datos por los obtenidos
    
            }catch(error){
              setError(error.message);
>>>>>>> 3e5f3c3 (initial api)
                console.error(`Error fetching data: ${error}`);
            } 
        };
        fetchData();
    }, [url]);

    return{data,error};

}
export default useApi;