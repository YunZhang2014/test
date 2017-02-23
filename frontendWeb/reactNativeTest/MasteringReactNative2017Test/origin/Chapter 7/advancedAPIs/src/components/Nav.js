import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  NavigationExperimental
} from 'react-native';

import * as globalStyles from '../styles/global';

const { Header, CardStack } = NavigationExperimental;

export default class Nav extends Component {

  constructor(props) {
    super(props);

    this.renderScene = this.renderScene.bind(this);
    this.renderNavigationBar = this.renderNavigationBar.bind(this);
  }

  renderScene(sceneProps) {
    const route = sceneProps.scene.route;
    return (
      <route.component
        {...route.props}
        push={this.props.push}
        pop={this.props.pop}
      />
    );
  }

  renderNavigationBar(sceneProps) {
    return (
      <Header
        style={styles.navigationBar}
        onNavigateBack={this.props.pop}
        {...sceneProps}
      />
    );
  }

  render() {
    return (
      <CardStack
        onNavigateBack={this.props.pop}
        navigationState={this.props.navigation}
        renderScene={this.renderScene}
        renderHeader={this.renderNavigationBar}
        style={styles.cardStack}
      />
    );
  }

}

Nav.propTypes = {
  push: PropTypes.func.isRequired,
  pop: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any)
};

const styles = StyleSheet.create({
  cardStack: {
    flex: 1
  },
  navigationBar: {
    backgroundColor: globalStyles.MUTED_COLOR
  }
});
