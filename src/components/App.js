import React from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

class App extends React.Component {
    render() {
        console.log(process.env)
        return (
            <div >
                <SearchBar />
                <WeatherList />
            </div>
        )
    }
}

export default App;