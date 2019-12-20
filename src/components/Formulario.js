import React from 'react';

const Formulario = () => {

  const handleChange = e => {
    //Cambiar el state
  }

  return (
    <form action="">
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
        <select onChange={hanldeChange} name="pais">
          <option value="">Selecciona un pais</option>
          <option value="US">The United States</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
        </select>
      </div>
      <div className="input-field col s12">
        <input type="text"/>
      </div>
    </form>
  );
}

export default Formulario;
