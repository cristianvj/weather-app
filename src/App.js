import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from "./components/Error";
import Clima from "./components/Clima";

function App() {

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState(false);
  const [result, getResult] = useState({})

  useEffect(() => {
    //prevenir ejecución
    if(city === '') return;

    const getAPI = async () => {
      const appId = 'e17bb2aa01d4425d4b44bc1e61fd001f';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
      //consultar la URL
      const reply = await fetch(url);
      const result = await reply.json();
      getResult(result);
    }
     
    getAPI();
  }, [city, country]);

  const dataSearch = data => {
    //Validar que ambos campos existan
    if(data.city === '' || data.country === ''){
      //un error
      setError(true);
      return;      
    }
    //Ciudad y pais existen, agregarlos al state
    setCity(data.city)
    setCountry(data.country);
    setError(false);
  };

  //Cargar componente condicionalmente
  let component;
  if (error) {
    //Hay un error, mostrarlo
    component = <Error message="Los dos campos son obligatorios" />;
  }else if(result.cod === '404'){
    component = <Error message="El municipio no existe en el pais que seleccionaste" />;
  } else{
    //Mostrar el clima
    component = <Clima 
                  result={result}
                />;
  }

  return (
    <div className="App">
      <Header 
        title="Weather React App"
      />
      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario 
                dataSearch={ dataSearch }
              />
            </div>
            <div className="col s12 m6">
              { component }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
