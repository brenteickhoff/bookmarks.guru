import React from 'react';
import siteListItem from './siteListItem.jsx';

class siteList extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <div>
        <h3> Site List </h3>
        There are { this.props.sites.length } sites.
        <ul>  
          { this.props.sites.map(site => 
            <li>
              <siteListItem site={ site }/>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default siteList;