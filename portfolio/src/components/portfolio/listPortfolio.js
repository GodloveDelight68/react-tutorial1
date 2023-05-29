import React, {UseEffect, UseState} from 'react';
import axios from 'axios'
const listPortfolio = () => {
    const [data, setData] = UseState([])
    UseEffect(()=>{
        getPortfolio()
    }, []);

    const getPortfolio = async() =>{
        const response = await axios.get("/api/project/projects");
        setData(response.data.project)
    }
    console.log(data)
    return (
        <div>
            
        </div>
    );
}

export default listPortfolio;
