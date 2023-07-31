import { useState, useRef, useEffect } from "react";
import "./tarjeta.css";

export const Tarjeta = () => {

  const [valorTarjeta, setValorTarjeta] = useState("");
  const [valorFecha, setValorFecha]     = useState("");
  const [valorNombre, setValorNombre]   = useState("");
  const inputDateFocus = useRef(null);
  const inputNameFocus = useRef(null);

  useEffect(() => {
    if ( valorTarjeta !== "" && valorTarjeta.length === 19) inputDateFocus.current.focus();
    if ( valorFecha !== "" && valorFecha.length === 5) inputNameFocus.current.focus();
  }, [valorTarjeta, valorFecha])
  

  const handleInputCardPress = ({ key }) => {
    if ( key !== "Backspace" ) {
      if (valorTarjeta.length === 4 || valorTarjeta.length === 9 || valorTarjeta.length === 14) setValorTarjeta( valorTarjeta  + " " );
    }
  };

  const handleInputDatePress = ({ key }) => {
    if ( key !== "Backspace" ) {
      console.log(valorTarjeta.length)
      if (valorFecha.length === 2 ) setValorFecha( valorFecha  + "/" );
    }
  }

  return (
    <div className="contenedor-tarjeta__tarjeta">
      <p className="tarjeta__nombre-banco">Banco Mexicano</p>
      <img src="../../../public/icons/chip.png" alt="Icono chip tarjeta" className="tarjeta__icono-chip" />
      <input 
        type="text" 
        maxLength={19} 
        onChange={ ({ target }) => setValorTarjeta( target.value ) } 
        onKeyDown={ handleInputCardPress } 
        className="tarjeta__input-numero-tarjeta" 
        placeholder="Número de tarjeta" 
        value={ valorTarjeta }
        autoFocus
      />
      <div className="tarjeta__contenedor-fecha-nombre">
        <input 
          type="text" 
          className="contenedor-fecha-nombre__nombre" 
          placeholder="Nombre del titular" 
          ref={ inputNameFocus }
          onChange={ ({ target }) => setValorNombre( target.value ) }
          maxLength={50}
          value={ valorNombre }
        />
        <input 
          type="text" 
          className="contenedor-fecha-nombre__fecha" 
          placeholder="00/00" 
          ref={ inputDateFocus }
          onChange={ ({ target }) => setValorFecha( target.value ) }
          onKeyDown={ handleInputDatePress }
          value={ valorFecha }
          maxLength={5}
        />
      </div>
    </div>
  )
}
