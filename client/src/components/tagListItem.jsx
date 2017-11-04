import React from 'react';

class TagListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onTagClick = this.onTagClick.bind(this);
  }

  onTagClick(e) {
    e.preventDefault();
    this.props.onTagClick(this.props.tag.id);
  }

  render() {
    return (
      <div id={'tag' + this.props.tag.id } className="tagListItem">
        <a  onClick={ this.onTagClick }>
          { this.props.tag.name }
        </a>
      </div>
    )
  }
}

export default TagListItem;