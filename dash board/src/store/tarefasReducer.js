import axios from "axios"


const http = axios.create({
    baseURL: 'https://minhastarefas-api.herokuapp.com/'
})

const ACTIONS = {
    LISTAR: 'TAREFAS_LISTAR',
    ADD: 'TAREFAS_ADD',
    REMOVER: 'TAREFAS_REMOVE',
    ALTERAR: 'TAREFAS_ALTERAR'
}

const ESTADO_INICIAL = {
    tarefas: [],
    quantidade: 0
}

export const tarefaReducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
        case ACTIONS.LISTAR:
            return { ...state, tarefas: action.tarefas, quantidade: action.tarefas.length }
        case ACTIONS.ADD:
            const lista = [...state.tarefas, action.tarefa];
            return { ...state, tarefas: lista, quantidade: lista.length }
        case ACTIONS.REMOVER:
            const id = action.id
            const tarefas = state.tarefas.filter(tarefa => tarefa.id !== id);
            return { ...state, tarefas: tarefas, quantidade: tarefas.length }
        case ACTIONS.ALTERAR:
            const lista1 = [...state.tarefas]
            lista1.forEach(tarefa => {
                if (tarefa.id === action.id) {
                    tarefa.done = true;
                }
            })
            return { ...state, tarefas: lista }
        default:
            return state;
    }
}

export function listar() {
    return dispatch => {
        http.get('/tarefas', {
            headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado') }
        }).then(response => {
            dispatch({
                type: ACTIONS.LISTAR,
                tarefas: response.data
            })
        })
    }
}

export function salvar(tarefa) {
    return dispatch => {
        http.post('/tarefas', tarefa, {
            headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado') }
        }).then(response => {
            dispatch({
                type: ACTIONS.ADD,
                tarefa: response.data
            })
        })
    }
}

export function deletar(id) {
    return dispatch => {
        http.delete(`/tarefas/${id}`, {
            headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado') }
        }).then(response => {
            dispatch({
                type: ACTIONS.REMOVER,
                id: id
            })
        })
    }
}

export function alterar(id) {
    return dispatch => {
        http.patch(`/tarefas/${id}`, null, {
            headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado') }
        }).then(response => {
            dispatch({
                type: ACTIONS.ALTERAR,
                id: id
            })
        })
    }
}