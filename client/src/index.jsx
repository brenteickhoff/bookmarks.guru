import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import siteList from './components/siteList.jsx';
import tagList from './components/tagList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      tags: [],
      sites: []
    }
  }

  componentDidMount() {
    this.getSites();
    this.getTags();
  }

  getSites () {
    $.get('/sites', {})
      .done(results => this.setState(sites=JSON.parse(results)))
      .fail(err => console.error('Failed to get sites', err))
  }

  getTags () {
    $.get('/tags', {})
      .done(results => this.setState(tags=JSON.parse(results)))
      .fail(err => console.error('Failed to get tags', err))
  }

  onClickTag (tagId) {
    console.log('Clicked tag id ', tagId)
  }

  render () {
    return (
      <div>
        <table style="width:100%">
          <tr>
            <td>
              <siteList sites={ this.state.sites }/>
            </td>
            <td>
              <tagList 
                tags={ this.state.tags }
                onClickTag={ this.onClickTag.bind(this) } 
              />
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));