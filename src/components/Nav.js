import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Radium from 'radium';
import { withRouter } from 'react-router';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';

class Nav extends Component {

  componentWillMount() {
    let urlPath = window.location.pathname;
    let currentTab = urlPath.split('/').pop();
    // More validations here if needed
    this.setState({ activeTab: currentTab || 'default' });

    console.log(urlPath);
    console.log(currentTab);
    console.log(this.state.activeTab);
  }

  handleActive = (tab) => {
    this.props.history.push(tab.props['data-route']);
    this.setState({ activeTab: tab.props.value });
  }

  render() {
    return (
      <div style={styles.toolbar}>
        <h1 style={{flex: 1, margin: 0}}>Weather</h1>
        <Tabs
        value={this.state.activeTab}
        style={{flex:1.5}}
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
    );
  }
}

{/* <FlatButton
  label="Get Weather">
</FlatButton> */}

var styles = {
  tabLayout: {
    backgroundColor: 'rgb(232,232,232)',
  },
  tab: {
    color: '#000',
    height: 70
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    paddingLeft: 15,
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
