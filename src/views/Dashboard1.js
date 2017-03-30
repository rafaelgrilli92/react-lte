import React, { Component } from 'react';
//import { Link } from 'react-router';

// Layout Components
import ContentHeader from 'components/layout/ContentHeader';

export default class Dashboard1 extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Dashboard 1" enableReactRouterLink={true}/>
      </div>
    );
  }
}