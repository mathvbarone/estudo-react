import _ from 'lodash';
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

        this.state = { 
            videos: [],
            selectedVideo : null
        };       
        this.videoSearch('blink-182');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) =>{
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){

        const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 300)

        return(
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        ); 


    }
}

//PEGAR ESSE COMPONENTE HTML GERADO, E COLOCAR ISSO NA PÁGINA
ReactDOM.render(<App/>, document.querySelector('.container'));
