import { useState } from "react";

export default function App() {
  const [meyveler, setMeyveler] = useState(["Elma", "Armut", "Muz", "Kivi"]);
  const [arama, setArama] = useState("");
  const [yeniMeyve, setYeniMeyve] = useState("");

  function ekle() {
    if (yeniMeyve.trim() === "") return;
    setMeyveler([...meyveler, yeniMeyve]);
    setYeniMeyve("");
  }

  function sil(meyve) {
    setMeyveler(meyveler.filter((m) => m !== meyve));
  }

  const filtreliMeyveler = meyveler.filter((m) =>
    m.toLowerCase().includes(arama.toLowerCase())
  );

  const toplam = meyveler.reduce((acc) => acc + 1, 0);

  const hepsiU = meyveler.every((m) => m.includes("u"));
  const herhangiBirE = meyveler.some((m) => m.includes("e"));

  return (
    <div style={{ padding: "20px" }}>
      <h1>Meyve Listesi</h1>
      <input
        type="text"
        placeholder="Ara"
        value={arama}
        onChange={(e) => setArama(e.target.value)}
      />

      <div>
        <input
          type="text"
          placeholder="Yeni Meyve Ekle"
          value={yeniMeyve}
          onChange={(e) => setYeniMeyve(e.target.value)}
        />
        <button onClick={ekle}>Ekle</button>
      </div>

      <ul>
        {filtreliMeyveler.map((meyve,index)=>(
          <li key={index}>
            {meyve}
            <button onClick={()=>sil(meyve)}>Sil</button>
          </li>
        ))}
      </ul>
      <p>Toplam Meyve Sayısı:{toplam}</p>
    </div>
  );
}
