import React from 'react';

class SiteListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={'site' + this.props.site.id } className="siteListItem">
        <a href={ this.props.site.url }>
          { this.props.site.name } | { this.props.site.url }
        </a>
      </div>
    )
  }
}

export default SiteListItem;