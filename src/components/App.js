import React from 'react';
import axios from 'axios';
import Searchbar from './Search';
import Imglist from './list';
import './app.css'

class App extends React.Component {
    state = { images : [] };
    onSearchsubmit = async term => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {query: term ,per_page:50 },
        headers: {
            Authorization:
            'Client-ID m13b7VGlW7eDizGW54uuri_OlXZHVdo58DtqjVmy2fI'
        }
    });
       this.setState({ images: response.data.results });
    }
    render() {
        return ( 
        <div>
            <Searchbar onSubmit={this.onSearchsubmit} />
            <div>
            <Imglist images={this.state.images} />
            </div>
        </div>
        );
    }
}

export default App;