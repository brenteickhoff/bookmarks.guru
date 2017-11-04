import React from 'react';
import SiteListItem from './SiteListItem.jsx';

class SiteList extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <div id="siteList" className="siteList">
        <h3> Site List </h3>
        There are { this.props.sites.length } sites.
        <ul>  
          { this.props.sites.map(site => 
            <li key={ site.id } >
              <SiteListItem site={ site }/>
            </li>
          )}
        </ul>
      </div>
    )
  }
} 

export default SiteList; 