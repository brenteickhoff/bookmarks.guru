import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SiteList from './components/SiteList.jsx';
import TagList from './components/TagList.jsx';
import SiteAdd from './components/SiteAdd.jsx';
import TagAdd from './components/TagAdd.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      tags: [],
      sites: [],
      adding: false,

    }
    this.onTagClick = this.onTagClick.bind(this);
    this.toggleAdding = this.toggleAdding.bind(this);
  }

  componentDidMount () {
    this.getSites();
    this.getTags();
  }

  getSites (tagId) {
    console.log('react GET sites tag id', tagId);
    $.get('/sites', {tagId: tagId})
      .done(results => this.setState(JSON.parse(results)))
      .fail(err => console.error('Failed to get sites', err))
  }

  // getSites () {

  //   $.get('/sites', {}) 
  //     .done(results => this.setState(JSON.parse(results)))
  //     .fail(err => console.error('Failed to get sites', err))
  // }

  getTags () {
    $.get('/tags', {})
      .done(results => this.setState(JSON.parse(results)))
      .fail(err => console.error('Failed to get tags', err))
  }

  onTagClick (tagId) {
    console.log('Clicked tag id ', tagId)
    this.getSites (tagId);
  }

  toggleAdding () {
    this.setState({adding: !this.state.adding});
  }

  render () {
    return (

      <div>
        <h1>Bookmarks Guru</h1>
        <h2>www.bookmaks.guru</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <TagList 
                  tags={ this.state.tags }
                  onTagClick={ this.onTagClick.bind(this) } 
                />
              </td>
              <td>
                {this.state.adding ? 
                  <SiteAdd /> :                
                  <SiteList sites={ this.state.sites }/>
                }
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={ this.toggleAdding } >Toggle Adding</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));