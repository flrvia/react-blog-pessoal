//Aqui irá gerenciar todos os estados da aplicação

import {createStore} from 'redux';
import { tokenReducer } from './tokens/tokensReducer';

const store = createStore(tokenReducer);

export default store;