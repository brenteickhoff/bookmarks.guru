import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: ''};
    this.onChange = this.onChange.bind(this);
    this.search  = this.search.bind(this);
    this.deleteAll  = this.deleteAll.bind(this);
  }

  onChange (e) {
    console.log(e.target)
    this.setState({user: e.target.value});
  }

  search() {
    document.getElementById("searchUserInput").value = "";
    this.props.onSearch(this.state.user);
  }

  deleteAll() {
    this.props.onDeleteAll();
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input onChange={this.onChange} id="searchUserInput"/>       
      <button onClick={this.search}> Add Repos </button>
      <button onClick={this.deleteAll}> Delete Repos </button>
    </div>) 
  }
}

export default Search;