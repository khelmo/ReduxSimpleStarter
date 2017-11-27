import React, { Component } from 'react';

//class component -- aware of state, added functionality than functional
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: 'Start'};
    }

    render() {
        //controlled component
        return(
            <div className="search-bar"> <input value={this.state.term}
            onChange={ e => this.setState({term: e.target.value}) } />
        </div>);

    }

};


//functional component can contain a class component
/*
const SearchBar = () => {
    return <input />;
};
*/

export default SearchBar;