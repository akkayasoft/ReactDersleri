import React,{useState} from 'react';

const Begeni=()=>{
    const [sayi,setSayi]=useState(0);

    const arttir=()=>setSayi(sayi+1);
    const azalt=()=>setSayi(sayi-1);

    return(
        <div>
            <h2>Beğeni Sayısı:{sayi}</h2>
            <button onClick={arttir}>Beğen</button>
            <button onClick={azalt}>Beğenme</button>
        </div>
    );
    
    

};

export default Begeni;