import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import HelloWorld from './components/HelloWorld';
import StatelessProps from './components/StatelessProps';
import StatelessContext from './components/StatelessContext';

class App extends React.Component {
  static displayName = 'App'

  static childContextTypes = {
    theme: React.PropTypes.object
  }

  getChildContext() {
    return {
      theme: {
        marginTop: 50,
        padding: 50,
        backgroundColor: '#1E88E5',
        fontFamily: 'Roboto',
        color: '#E8EAF6'
      }
    };
  }

  generateUsers() {
    const names = ['John', 'Piter', 'Paul', 'Jack', 'Joann'];
    const randomAge = () => Math.floor(Math.random() * 100);
    const randomId = () => Math.random().toString(36).substring(2, 9);

    return _.map(names, (name) => {
      return {
        age: randomAge(),
        id: randomId(),
        name
      };
    });
  }

  render() {
    const styles = {
      paddingBottom: 40
    };
    const users = this.generateUsers();

    return (
      <div>
        <div style={styles}>
          <HelloWorld />
        </div>
        <div>
          <StatelessProps users={users}/>
        </div>
        <div>
          <StatelessContext />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
