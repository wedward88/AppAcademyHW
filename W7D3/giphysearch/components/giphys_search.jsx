import React from 'react';

import GiphysIndex from './giphys_index';
import { fetchSearchGiphys } from '../util/api_util';


class GiphySearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = { searchTerm: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange () {
        return e => this.setState({ searchTerm: e.target.value})
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.fetchSearchGiphys(this.state.searchTerm)
    }

    render() {
        const giphyArr = this.props.store.getState().giphys;
        
        return (
            <div className="giphAndForm">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="inputText"></label>
                    <input onChange={this.handleChange()} type="text" id="inputText" value={this.state.searchTerm} />
                    <input type="submit" value="Search Giphy"/>
                </form>
                <GiphysIndex giphyArr={giphyArr} />
            </div>
        );
    }
}

export default GiphySearch;