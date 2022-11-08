import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { ChangeEvent, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import UserLogin from "../../model/UserLogin";
import { login } from "../../service/Service";
import "./Login.css";
import { api } from "../../service/Service";

function Login() {
  let navigate = useNavigate();

  const [token, setToken] = useLocalStorage("token");

  const [UserLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  //Atualizar a model com o que o usuário digitar no input
  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...UserLogin,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(() => {
    if (token != "") {
      navigate("/home");
    }
  }, [token]);

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await login("/usuarios/logar", UserLogin, setToken);

      alert("Usuário logado com sucesso!");
    } catch (error) {
      alert("Dados do usuário inconssistentes. Erro ao logar.");
    }
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" item xs={6}>
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography variant="h3" align="center">
              Entrar
            </Typography>
            <TextField
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              value={UserLogin.usuario}
              label="Usuário (e-mail)"
              name="usuario"
              fullWidth
            />
            <TextField
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              value={UserLogin.senha}
              label="Senha"
              name="senha"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Button type="submit" variant="contained" color="primary">
                Entrar
              </Button>
            </Box>
          </form>
        </Box>

        <Box display="flex" justifyContent="center" marginTop={2}>
          <Box marginRight={1}>
            <Typography variant="subtitle1" align="center" gutterBottom>
              Ainda não tem uma conta?
            </Typography>
          </Box>
          <Box>
            <Link to="/cadastrar">
              <Typography
                variant="subtitle1"
                align="center"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                Cadastre-se
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={6} className="fundoLogin"></Grid>
    </Grid>
  );
}

export default Login;
