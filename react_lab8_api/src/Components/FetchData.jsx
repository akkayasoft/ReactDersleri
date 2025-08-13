import React from "react";
import useFetch from './UseFetch'
import './FetchData.css'

const FetchData=()=>{
    const [data]=useFetch('https://api.npoint.io/9045c260b1565daa9e15');
    console.log(data);
return(
    <>
    <h1 className="useFetch_heading">API den Veri Çekme</h1>
    <ul className="list_data_main">
        {data && data.map((e,index)=>(
            <li key={index} className="list_data">
                <h3>{e.name}</h3>
                <p>
                    <strong>Önemi:</strong>
                    {e.importance}
                </p>
                <p>
                    <strong>Yararları:</strong>
                    {e.benefits}
                </p>
                <p>
                    <strong>Yeme Zamanları:</strong>
                    {e.best_time_to_intake}
                </p>
            </li>
        ))
        }
    </ul>
    </>
)
}

export default FetchData

