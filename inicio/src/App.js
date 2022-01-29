import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  state = {
    nome: ''
  }

  modificarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  criaComboBox = () => {
    const opcoes = ['1', '2']
    const comboBoxOpcoes = opcoes.map(opcoes => <option>{opcoes}</option>)
    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  render() {
    const MeuComboBox = () => this.criaComboBox()
    return (
      <>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Hello {this.state.nome}</h1>
        <MeuComboBox />
      </>
    )
  }
}

export default App;
