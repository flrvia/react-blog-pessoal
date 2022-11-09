import Tema from './Tema';

interface Postagem{
    id: number
    descricao: string
    texto: string
    tema?: Tema | null
}

export default Postagem;