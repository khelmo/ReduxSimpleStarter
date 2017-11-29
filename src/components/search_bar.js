import React, { Component } from 'react';

//class component -- aware of state, added functionality than functional
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: ''};
    }

    render() {
        //controlled component
        return(
            <div className="search-bar"> <input value={this.state.term}
            onChange={ e => this.onInputChange(e.target.value) } />
        </div>);

    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

};


//functional component can contain a class component
/*
const SearchBar = () => {
    return <input />;
};
*/

export default SearchBar;