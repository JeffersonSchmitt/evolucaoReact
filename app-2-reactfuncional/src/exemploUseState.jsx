import { useState } from "react";



function UseState() {

    const [numero, setNumero] = useState();
    const [segundonumero, setSegundoNumero] = useState();
    const [resultado, setResultado] = useState();

    const sum = () => {
        const numeroInt = parseInt(numero);
        const segnumeroInt = parseInt(segundonumero);
        setResultado(numeroInt + segnumeroInt);
    }

    return (
        <div>

            <input type="number" value={numero} onChange={e => setNumero(e.target.value)} /><br />
            <input type="number" value={segundonumero} onChange={e => setSegundoNumero(e.target.value)} /><br />
            <button onClick={sum}>Somar</button><br />
            <input type="text" value={resultado} /><br />


        </div>
    );
}

export default UseState;
