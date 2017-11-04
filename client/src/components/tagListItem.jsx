import React from 'react';

class TagListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onTagClick = this.onTagClick.bind(this);
  }

  onTagClick(tagId) {
    this.props.onTagClick(tagId);
  }

  render() {
    return (
      <div id={'tag' + this.props.tag.id } className="tagListItem">
        <a onClick={ this.onTagClick.bind(this, this.props.tag.id) }>
          { this.props.tag.name }
        </a>
      </div>
    )
  }
}

export default TagListItem;