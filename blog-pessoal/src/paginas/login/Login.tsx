import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

function Login() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" item xs={6}>
        <Box paddingX={20}>
          <form>
            <Typography variant="h3" align="center">
              Entrar
            </Typography>
            <TextField label="Usuário (e-mail)" name="usuario" fullWidth />
            <TextField label="Senha" name="senha" type="password" fullWidth />
            <Box marginTop={2} textAlign="center">
              <Link to="/home" className="text-decorator-none">
                <Button type="submit" variant="contained" color="primary">
                  Entrar
                </Button>
              </Link>
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
            <Typography variant="subtitle1" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
               Cadastre-se
            </Typography>
          </Box>
        </Box>
      </Grid>

      
      <Grid item xs={6} className="fundoLogin"></Grid>
    </Grid>
  );
}

export default Login;
