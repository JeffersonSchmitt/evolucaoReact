import { useEffect, useState } from "react";



function UseEffect() {

    const [numero, setNumero] = useState();
    const [segundonumero, setSegundoNumero] = useState();
    const [resultado, setResultado] = useState();

    const sum = () => {
        const numeroInt = parseInt(numero);
        const segnumeroInt = parseInt(segundonumero);
        setResultado(numeroInt + segnumeroInt);
    }

    useEffect(() => {
        console.log('variavel', numero)
        //pode usar [] chama uma vez, ou [numero] com as variaveis que devem ser ouvidas
    }
    )

    return (
        <div>

            <input type="number" value={numero} onChange={e => setNumero(e.target.value)} /><br />
            <input type="number" value={segundonumero} onChange={e => setSegundoNumero(e.target.value)} /><br />
            <button onClick={sum}>Somar</button><br />
            <input type="text" value={resultado} /><br />


        </div>
    );
}

export default UseEffect;
