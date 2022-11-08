import axios from "axios";

//acesaando a api desenvolvida
export const api = axios.create({
  baseURL: "https://blogpessoal-bgeq.onrender.com/",
});

export const cadastroUsuario = async (url: any, dados: any, setDados: any) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

// usuarios/login
export const login = async (url: any, dados: any, setDados: any) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data.token);
};
