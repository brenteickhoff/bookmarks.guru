import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SiteList from './components/SiteList.jsx';
import TagList from './components/TagList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      tags: [],
      sites: []
    }
    this.onTagClick = this.onTagClick.bind(this);
  }

  componentDidMount() {
    this.getSites();
    this.getTags();
  }

  getSites () {
    $.get('/sites', {})
      .done(results => this.setState(JSON.parse(results)))
      .fail(err => console.error('Failed to get sites', err))
  }

  getTags () {
    $.get('/tags', {})
      .done(results => this.setState(JSON.parse(results)))
      .fail(err => console.error('Failed to get tags', err))
  }

  onTagClick (tagId) {
    console.log('Clicked tag id ', tagId)
  }

  render () {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <SiteList sites={ this.state.sites }/>
              </td>
              <td>
                <TagList 
                  tags={ this.state.tags }
                  onTagClick={ this.onTagClick.bind(this) } 
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));