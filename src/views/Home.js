import React, { Component } from 'react';

// Layout Components
import { ContentHeader } from '../components/';

export default class Home extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Home" enableReactRouterLink={true}/>
      </div>
    );
  }
}