import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import "./DeletarPostagem.css";
import { Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Postagem from "./../../../model/Postagem";
import { buscaId, deleteId } from "../../../service/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function DeletarPostagem() {
  let navigate = useNavigate();

  // Para alterar um tema ja existente eu preciso de ajuda para capturar o id e o useParams faz isso
  const { id } = useParams<{ id: string }>();

  // Ver se o token esta armazenado, para que esteja logado
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  //Incializar vazio para que o usuário possa preencher e mandarmos para o nosso banco de dados -> memória temporária
  const [postagem, setPostagem] = useState<Postagem>();

  // Se caso o usuário não estiver logado, ele terá o efeito de dizer que precisa estar logado e vai redirecionar para a tela de login
  useEffect(() => {
    if (token == "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  // !== é o simbolo de diferente
  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  //Serve para buscar o nosso tema pelo id
  async function findById(id: string) {
    buscaId(`/postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  //A função sim vai nos redirecionar para a tela de temas e vai acionar o metodo deleteId, vai ver se tem o token para que seja autorizada a exclusão
  function sim() {
    navigate("/postagens");
    deleteId(`/postagens/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    alert("Postagem deletada com sucesso!");
  }

  //Nos direcionará para a página temas e manterá o tema
  function nao() {
    navigate("/postagens");
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary">{postagem?.titulo}</Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
              <Box mx={2}>
                <Button
                  onClick={sim}
                  variant="contained"
                  className="marginLeft"
                  size="large"
                  color="primary"
                >
                  Sim
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={nao}
                  variant="contained"
                  size="large"
                  color="secondary"
                >
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;
