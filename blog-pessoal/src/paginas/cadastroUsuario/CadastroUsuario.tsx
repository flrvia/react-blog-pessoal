import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import User from "../../model/User";
import { cadastroUsuario } from "../../service/Service";
import SetaVoltarIcone from "@mui/icons-material/ArrowBack";
import "./CadastroUsuario.css";

function CadastroUsuario() {
  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("");
  const [user, setUser] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  });

  useEffect(() => {
    if (userResult.id != 0) {
      navigate("/login");
    }
  }, [userResult]);

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (confirmarSenha == user.senha) {
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
      alert("Usuario cadastrado com sucesso");
    } else {
      alert(
        "Dados inconsistentes. Favor verificar as informações de cadastro."
      );
    }
  }

  return (
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    className="fundoLogin"
  >
    <Grid alignItems="center">
      <Link to="/">
        <SetaVoltarIcone className="seta" />
      </Link>
      <Box className="mod-login">
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos1"
            >
              Cadastre-se
            </Typography>

            <TextField
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="nome"
              label="Nome"
              name="Nome"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="Usuário (E-mail)"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="Senha"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <TextField
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(e)
              }
              id="confirmarSenha"
              label="Confirmar Senha"
              name="confirmarSenha"
              margin="normal"
              type="password"
              fullWidth
            />
<Box marginTop={2} textAlign="center">
              <Link to="/login" className="text-decorator-none">
                <Button
                  variant="contained"
                  color="secondary"
                  className="btnCancelar"
                >
                  Cancelar
                </Button>
              </Link>
              <Button type="submit" variant="contained" color="primary">
                Cadastrar
              </Button>
            </Box>
          </form>

          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="textos2"
              >
                Não tem uma conta?
              </Typography>
            </Box>
            <Box>
              <Link to="/cadastrar">
                <Typography
                  variant="subtitle1"
                  align="center"
                  gutterBottom
                  className="text-cadastrar"
                >
                  Cadastre-se
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  </Grid>
  );
}

export default CadastroUsuario;
