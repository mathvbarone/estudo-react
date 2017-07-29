import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyCbWEE2a4Pc-qfGYTJ6YjgYGuyKa2PFEGA';


//CRIAR UM NOVO COMPONENTE. ESSE COMPONENDE DEVE PRODUZIR ALGUM HTML
class App extends Component {
    constructor (props) {
        super (props);

        this.state={ videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) =>{
            this.setState({ videos });
        });
    }

    render(){
        return(
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos} />
            </div>
        ); 
    }
}

//PEGAR ESSE COMPONENTE HTML GERADO, E COLOCAR ISSO NA PÁGINA
ReactDOM.render(<App/>, document.querySelector('.container'));
