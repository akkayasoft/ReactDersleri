function App(props){
  const currentDate=new Date();
  return (
    <div>
      <h1>Benim ilk uygulamam</h1>
      <h2>Şu an Tarih:{currentDate.toLocaleDateString()}</h2>
      <h2>Şu an zaman:{currentDate.toLocaleTimeString()}</h2>
    </div>
  );
}

export default App;