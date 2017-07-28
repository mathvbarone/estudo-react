import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCbWEE2a4Pc-qfGYTJ6YjgYGuyKa2PFEGA';


//CRIAR UM NOVO COMPONENTE. ESSE COMPONENDE DEVE PRODUZIR ALGUM HTML
const App = () => {
    return(
        <div>
            <SearchBar />
        </div>
    ); 
}

//PEGAR ESSE COMPONENTE HTML GERADO, E COLOCAR ISSO NA PÁGINA
ReactDOM.render(<App/>, document.querySelector('.container'));
