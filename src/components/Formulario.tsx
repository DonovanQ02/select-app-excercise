import React, { useState } from 'react'
import '../App.css'


interface FormularioProps {
  onAdd: (name:string) => void;
}

const Formulario: React.FC<FormularioProps> = ({onAdd}) => {
  const [name, setName] = useState<string>(""); 
  const [error, setError] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!name.trim()){
      setError("El nombre no puede estar vacío");
      return;
    }

    setError("");
    onAdd(name.trim());
    setName("");
  };

  return(
    <div>
      <form onSubmit={handleSubmit} className='formulario'>
      <label htmlFor='appName' >Nombre de la App</label>
      <input
        id="appName"
        type='text'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      
      <button type='submit'>Agregar</button>
    </form>
    {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  )
}

export default Formulario;