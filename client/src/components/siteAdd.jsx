import React from 'react';

class SiteAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
      {
        siteName: '',
        siteUrl: '',
        tagIds: [],
      };

    this.onAddSiteNameInputChange = this.onAddSiteNameInputChange.bind(this)
    this.onAddSiteUrlInputChange = this.onAddSiteUrlInputChange.bind(this)
    this.onSaveSiteButtonClick = this.onSaveSiteButtonClick.bind(this);
  }


  onAddSiteNameInputChange (e) {
    this.setState({siteName: e.target.value});
  }

  onAddSiteUrlInputChange (e) {
    this.setState({siteUrl: e.target.value});
  }

  onSaveSiteButtonClick () {
    document.getElementById("addTagInput").value = "";
    this.props.onSaveSiteButtonClick(this.state);
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={ this.onSaveSiteButtonClick } > Save New Site </button>
        </div>
        <div>
          <br/>
          Site Name
          <input  onChange={ this.onAddSiteNameInputChange } id="addSiteNameInput"/>
          Site Url
          <input onChange={ this.onAddSiteUrlInputChange } id="addSiteUrlInput"/>
        </div>

      </div>
    ) 
  }
}

export default SiteAdd;

