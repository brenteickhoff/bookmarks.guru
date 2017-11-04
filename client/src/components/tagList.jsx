import React from 'react';
import tagListItem from './tagListItem.jsx';

class tagList extends React.Component {
  constructor(props) {
    super(props); 
    this.onTagClick  = this.onTagClick.bind(this);
  }

  onTagClick(tagId) {
    this.props.onTagClick(tagId);
  }

  render() {
    return (
      <div>
        <h3> Tag List </h3>
        There are { this.props.tags.length } tags.
        <ul>
          { this.props.tags.map(tag => 
            <li key = {tag.id} >
              <tagListItem tag={ tag } 
                onTagClick={ this.onTagClick.bind(this) } 
              />
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default tagList;