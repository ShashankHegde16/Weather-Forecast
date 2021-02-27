import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { SearchText: "" };
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onInputChange(event) {
        this.setState({ SearchText: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault();
        if (!this.state.SearchText)
            return;
        this.props.fetchWeather(this.state.SearchText);
    }
    render() {
        return (
            <form className="input-group" onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Get a five day forecast in your favorote cities"
                    className="form-control"
                    value={this.state.SearchText}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">
                        Search
                    </button>
                </span>
            </form>);
    }
}

// const mapStatetoProps=(state)=>{

// }

const mapDispatchtoProps = (dispatch) => {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchtoProps)(SearchBar);