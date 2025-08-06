import React,{useState} from "react";

const Sayac=()=>{
    const [sayi,setSayi]=useState(0);

    const arttir=()=>setSayi(sayi+1);
    const azalt=()=>setSayi(sayi-1);

    return(
        <div style={{textAlign:"center"}}>
            <h1>Sayaç:{sayi}</h1>
            <button onClick={arttir}>Arttır</button>
            <button onClick={azalt}>Azalt</button>
        </div>
    );
};
export default Sayac;
