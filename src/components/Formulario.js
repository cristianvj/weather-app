import React, { useState } from 'react';

const Formulario = ({ dataSearch }) => {
  
  //State del componente
  //busqueda = State, guardarBusqueda = setState({})
  const [search, setSearch] = useState({
    city: '',
    country: '',
  });

  const handleChange = e => {
    //Cambiar el state
    setSearch({
      ...search,
      [e.target.name] : e.target.value,
    });
  };

  const getWeather = e =>{
    e.preventDefault();
    //pasar directamente hacia el componente padre
    dataSearch(search);
  };

  return (
    <form onSubmit={ getWeather } >
      <div className="input-field col s12">
        <input 
          type="text"
          name="city"
          id="city"
          onChange={handleChange}
        />
        <label htmlFor="city">City: </label>
      </div>
      <div className="input-field col s12">
        <select onChange={handleChange} name="country">
          <option value="">Selecciona un pais</option>
          <option value="US">The United States</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
        </select>
      </div>
      <div className="input-field col s12">
        <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value="Buscar Clima" />
      </div>
    </form>
  );
}

export default Formulario;
