import {
  Grid,
  Typography,
  TextField,
  Button,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";
import { Box } from "@mui/material";
import React, { ChangeEvent, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import UserLogin from "../../model/UserLogin";
import { login } from "../../service/Service";
import { addToken } from "../../store/tokens/actions";
import "./Login.css";
import SetaVoltarIcone from "@mui/icons-material/ArrowBack";
import { toast } from "react-toastify";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { grey } from "@material-ui/core/colors";

function Login() {
  
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [token, setToken] = useState("");

  const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

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
      dispatch(addToken(token));
      navigate("/home");
    }
  }, [token]);

  async function logar(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuarios/logar`, UserLogin, setRespUserLogin);

      toast.success("Usuário logado com sucesso!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } catch (error) {
      toast.error("Dados do usuário inconsistentes. Erro ao logar!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
    console.log(respUserLogin);
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
            <form onSubmit={logar}>
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                className="textos1"
              >
                Entrar
              </Typography>

              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <EmailOutlinedIcon style={{ color: grey[50] }} />
                </Grid>
                <Grid item>
                  <TextField
                  
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      updateModel(event)
                    }
                    value={UserLogin.usuario}
                    label="E-mail"
                    name="usuario"
                    required
                    fullWidth
                    
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <LockOutlinedIcon style={{ color: grey[50] }} />
                </Grid>
                <Grid item>
                  <TextField
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      updateModel(event)
                    }
                    value={UserLogin.senha}
                    label="Senha"
                    name="senha"
                    required
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Box marginTop={2} textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="botao-entrar"
                >
                  Entrar
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

export default Login;
