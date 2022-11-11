import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import { Box } from '@mui/material';
import Postagem from '../../../model/Postagem';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../service/Service';

function ListaPostagem() {

    // Data -> Postagem feita em: {new Date(Data.parse(postagem.data)).toLocaleDateString('pt-br')}

    const [postagens, setPostagens] = useState<Postagem[]>([])

    const [token, setToken] = useLocalStorage('token');

    let navigate = useNavigate();
  
    useEffect(() => {
      if ((token == '')) {
        alert("Você precisa estar logado");
        navigate("/login");
      }
    }, [token]);
  
    async function getPostagem() {
      await busca("/postagens", setPostagens, {
        headers: {
          'Authorization': token,
        },
      });
    }
  
    useEffect(() => {
      getPostagem();
    }, [postagens.length]);
  

  return (
    <>
     {
        postagens.map(postagem => (
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Postagens
            </Typography>
            <Typography variant="h5" component="h2">
              {postagem.titulo}
            </Typography>
            <Typography variant="body2" component="p">
              {postagem.texto}
            </Typography>
            <Typography variant="body2" component="p">
            Postagem feita em: {new Date(Date.parse(postagem.data)).toLocaleString()}
            </Typography>
            <Typography variant="body2" component="p">
              {postagem?.tema?.descricao}
            </Typography>
            


          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5}>

              <Link to={`/formularioTema/${postagem.id}`} className="text-decorator-none" >
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${postagem.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
       ))
      }
    </>
    );
}

export default ListaPostagem;