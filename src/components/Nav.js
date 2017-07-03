import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Radium from 'radium';
import { withRouter } from 'react-router';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';

import NavSearch from './NavSearch.js';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.props.history.listen((location, action) => {
      let currentTab = location.pathname.split('/').pop();
      this.setState({ activeTab: currentTab || 'default'});
    });
  }

  componentWillMount() {
    let currentTab = window.location.pathname.split('/').pop();
    this.setState({ activeTab: currentTab || 'default'});
  }

  handleActive = (tab) => {
    this.props.history.push(tab.props['data-route']);
  }

  render() {
    return (
      <div style={styles.toolbar}>
        <div
          style={{
            display: 'flex',
            maxWidth: 450,
            width: '70%'}}
            className="Test">
          <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
            <h1 style={{marginRight: 30, marginLeft: 15}}>Weather</h1>
          </Link>
          <Tabs
          value={this.state.activeTab}
          style={{flex:1}}
          tabItemContainerStyle={styles.tabLayout}
          tabTemplateStyle={{color:'#000'}}>
            <Tab
              onActive={this.handleActive}
              data-route="/"
              value="default"
              buttonStyle={styles.tab}
              label="Get Weather"/>
            <Tab
              onActive={this.handleActive}
              data-route="/about"
              value="about"
              buttonStyle={styles.tab}
              label="About"/>
            <Tab
              onActive={this.handleActive}
              data-route="/examples"
              value="examples"
              buttonStyle={styles.tab}
              label="Examples"/>
          </Tabs>
        </div>
        <NavSearch/>
      </div>
    );
  }
}

{/* <FlatButton
  label="Get Weather">
</FlatButton> */}

var styles = {
  tabLayout: {
    backgroundColor: 'rgb(232,232,232)',
    display: 'block',
  },
  tab: {
    color: '#000',
    height: 75,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    backgroundColor: 'rgb(232,232,232)'
  }
}

export default withRouter(Radium(Nav));


{/* <div>
  <h2>Nav Component</h2>
  <NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink>
  <NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
  <NavLink to="/Examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
</div> */}
