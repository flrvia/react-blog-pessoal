import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import Tema from "./../../../model/Tema";
import { buscaId, post, put } from "./../../../service/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function CadastroTema() {
  let navigate = useNavigate();

  // Para alterar um tema ja existente eu preciso de ajuda para capturar o id e o useParams faz isso
  const { id } = useParams<{ id: string }>();

  // Ver se o token esta armazenado, para que esteja logado
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  //Incializar vazio para que o usuário possa preencher e mandarmos para o nosso banco de dados -> memória temporária
  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
  });

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
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  //Gera um evento que quando o usuário digitar, vai ser guardado, assim ele vai guardar todas as informações para enviar para o back end
  function updatedTema(event: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (id !== undefined) {
      console.log(tema);
      put(`/temas`, tema, setTema, {
        headers: {
          Authorization: token,
        },
      });
      alert("Tema atualizado com sucesso");
    } else {
      post(`/temas`, tema, setTema, {
        headers: {
          Authorization: token,
        },
      });
      alert("Tema cadastrado com sucesso");
    }
    Back();
  }

  //vai nos retornar para onde tem todos os temas cadastrados
  function Back() {
    navigate("/temas");
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Formulário de cadastro tema
        </Typography>
        <TextField
          value={tema.descricao}
          onChange={(event: ChangeEvent<HTMLInputElement>) => updatedTema(event)}
          id="descricao"
          label="Descrição"
          variant="outlined"
          name="descricao"
          margin="normal"
          fullWidth
        />
        
        <Button type="submit" variant="contained" color="primary" >
          Finalizar
        </Button>
      </form>
    </Container>
  );
}

export default CadastroTema;
