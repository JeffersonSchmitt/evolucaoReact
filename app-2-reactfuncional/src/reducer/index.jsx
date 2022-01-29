import { useState } from "react";
import useStore from "./somaReducer";



function ReducerHook() {

    const [numero, setNumero] = useState();
    const [segundonumero, setSegundoNumero] = useState();
    const [store, dispatch] = useStore();

    const sum = () => {
        const numeroInt = parseInt(numero);
        const segnumeroInt = parseInt(segundonumero);
        dispatch({
            type: "SOMA",
            payload: numeroInt + segnumeroInt
        })
    }
    const subtrair = () => {
        const numeroInt = parseInt(numero);
        const segnumeroInt = parseInt(segundonumero);
        dispatch({
            type: "SUBTRACAO",
            payload: numeroInt - segnumeroInt
        })
    }
    return (
        <div>

            <input type="number" value={numero} onChange={e => setNumero(e.target.value)} /><br />
            <input type="number" value={segundonumero} onChange={e => setSegundoNumero(e.target.value)} /><br />
            <button onClick={sum}>Somar</button>
            <button onClick={subtrair}>Subtrair</button><br />
            <input type="text" value={store.resultado} /><br />


        </div>
    );
}

export default ReducerHook;
