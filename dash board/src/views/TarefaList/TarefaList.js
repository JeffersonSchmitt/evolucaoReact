import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { TarefasToolbar, TarefasTable } from './components';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
} from '@material-ui/core'
import { bindActionCreators } from 'redux';
import { listar, salvar, deletar, alterar } from 'store/tarefasReducer';
import { connect } from 'react-redux';
import { esconderMensagem, mostrarMensagem } from 'store/mensagensReducer';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const API_URL = 'https://minhastarefas-api.herokuapp.com/tarefas';
//jeffteste@gmail.com

const TarefaList = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.listar();
  }, [])

  return (
    <div className={classes.root}>
      <TarefasToolbar salvar={props.salvar} />
      <div className={classes.content}>
        <TarefasTable deletarAction={props.deletar} alterarStatus={props.alterar} tarefas={props.tarefas} />
      </div>
      <Dialog open={props.openDialog} onClose={props.esconderMensagem}>
        <DialogTitle>Atenção !!</DialogTitle>
        <DialogContent>
          {props.mensagem}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.esconderMensagem}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => ({
  tarefas: state.tarefasReducer.tarefas,
  mensagem: state.mensagensReducer.mensagem,
  openDialog: state.mensagensReducer.mostrarMensagem
})

const mapDispatchToProps = dispatch => bindActionCreators({ listar, salvar, deletar, alterar, esconderMensagem, mostrarMensagem }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TarefaList);
