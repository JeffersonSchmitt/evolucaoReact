import { mensagemReducer } from "./mensagensReducer";
import { tarefaReducer } from "./tarefasReducer";

import { combineReducers } from 'redux'

const mainReducer = combineReducers({
    tarefasReducer: tarefaReducer,
    mensagensReducer: mensagemReducer

})

export default mainReducer