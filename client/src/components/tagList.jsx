import React from 'react';
import TagListItem from './TagListItem.jsx';

class TagList extends React.Component {
  constructor(props) {
    super(props); 
    this.onTagClick = this.onTagClick.bind(this);
  }

  componentDidMount() {
  }

  onTagClick(tagId) {
    this.props.onTagClick(tagId);
  }

  render() {
    return (
      <div id="tagList" className="tagList">
        <h3> Tag List </h3>
        There are { this.props.tags.length } tags.
        <ul>
          { this.props.tags.map(tag => 
            <li key={ tag.id } >
              <TagListItem tag={ tag } 
                onTagClick={ this.onTagClick }
              />
            </li>
          )}
        </ul>
      </div>
    )
  }
}
  
export default TagList;