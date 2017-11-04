import React from 'react';

class TagAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tagName: ''};
    this.onAddTagInputChange = this.onAddTagInputChange.bind(this)
    this.onAddTagButtonClick = this.onAddTagButtonClick.bind(this);
  }

  onAddTagInputChange (e) {
    this.setState({tagName: e.target.value});
  }

  onAddTagButtonClick () {
    document.getElementById("addTagInput").value = "";
    this.props.onAddTagButtonClick(this.state.tagName);
  }

  render() {
    return (
      <div>
        <button onClick={ this.onAddTagButtonClick } > Add Tag </button>
        <input  onChange={ this.onAddTagInputChange } id="addTagInput"/> 
      </div>
    ) 
  }
}

export default TagAdd;