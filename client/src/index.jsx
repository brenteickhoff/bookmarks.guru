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
      addingSite: false,
      addTagName: '',
    }

    this.toggleAddingSite = this.toggleAddingSite.bind(this);
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

  getTags () {
    $.get('/tags', {})
      .done(results => this.setState(JSON.parse(results)))
      .fail(err => console.error('Failed to get tags', err))
  }

  addTag(tagName) {
    console.log('tagname', tagName)
    $.post('/addTag', {tagName: tagName})
      .done(results => this.setState(JSON.parse(results)))
      .fail(err => console.error('Failed to find user', err))
  }

  onTagClick (tagId) {
    console.log('Clicked tag id ', tagId)
    this.getSites (tagId);
  }

  toggleAddingSite () {
    this.setState({addingSite: !this.state.addingSite});
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
                <TagAdd onAddTagButtonClick={ this.addTag.bind(this) }/> 
                <TagList tags={ this.state.tags }
                  onTagClick={ this.onTagClick.bind(this) } />
              </td>
              <td>
                <button onClick={ this.toggleAddingSite } >
                  {this.state.addingSite ? 'Save Site' : 'Add Site' }
                </button>

                {this.state.addingSite ? 
                  <SiteAdd /> :                
                  <SiteList sites={ this.state.sites }/>
                }

              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));