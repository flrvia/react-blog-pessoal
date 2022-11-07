import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import UsuarioLogin from "../../model/UsuarioLogin";
import "./CadastroUsuario.css";

function CadastroUsuario() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} className="imagem2"></Grid>

      <Grid item xs={6} alignItems="center">
        <Box paddingX={20}>
          <form>
            <Typography variant="h3" align="center">
              Cadastrar
            </Typography>
            <TextField label="Nome" name="nome" fullWidth margin="normal" variant="outlined"/>
            <TextField label="Usuario (e-mail)" name="usuario" fullWidth margin="normal" variant="outlined"/>
            <TextField label="Senha" name="senha" type="password" fullWidth margin="normal" variant="outlined"/>
            <TextField label="Confirmar Senha" name="confirmarsenha" type="password" fullWidth margin="normal" variant="outlined"/>
            <Box marginTop={2} textAlign="center">
              <Link to="/login" className="text-decorator-none" >
                <Button variant="contained" color="secondary" className='btnCancelar'>
                    Cancelar
                </Button>
              </Link>
              <Button type="submit" variant="contained" color="primary">
                    Cadastrar
                </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
