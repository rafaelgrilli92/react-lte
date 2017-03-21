import React, { Component } from 'react';
//import { Link } from 'react-router';

// Layout
import ContentHeader from 'components/layout/ContentHeader';
import ContentBody from 'components/layout/ContentBody';

// Widgets
import Box, { BoxHeader, BoxBody, BoxFooter } from 'components/widgets/box';
import InfoBox from 'components/widgets/infoBox';
import SmallBox, { SmallBoxFooter } from 'components/widgets/smallBox';

import Input from 'components/forms/input';

export default class Widgets extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Widgets" />
        <ContentBody>
        
        <br />
        <div className="row">
          <div className="col-xs-12">
            <Input type="text" onChange={(e) => console.log(e.target.value)} placeholder="Digite aqui" />
          </div>
        </div>
        <br />
        <br />

          { /* INFO BOX */ }
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <InfoBox title="messages" text="1,410" icon="envelope-o" />
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <InfoBox title="bookmarks" text="410" icon="flag-o" color="green" />
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <InfoBox title="uploads" text="13,648" icon="files-o" color="yellow" />
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <InfoBox title="likes" text="93,139" icon="star-o" color="red" />
            </div>
          </div>
          { /* END INFO BOX */ }
          { /* INFO BOX FULL COLERED */ }
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <InfoBox title="bookmarks" text="41,410" icon="bookmark-o" fullColored={true}>
                Progress Bar!
              </InfoBox>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <InfoBox title="likes" text="41,410" icon="thumbs-o-up" color="green" fullColored={true}>
                Progress Bar!
              </InfoBox>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <InfoBox title="events" text="41,410" icon="calendar" color="yellow" fullColored={true}>
                Progress Bar!
              </InfoBox>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <InfoBox title="comments" text="41,410" icon="comments-o" color="red" fullColored={true}>
                Progress Bar!
              </InfoBox>
            </div>
          </div>
          { /* END INFO BOX FULL COLERED */ }
          { /* SMALL BOX */ }
          <div className="row">
            <div className="col-lg-3 col-xs-6">
              <SmallBox title="150" text="New Orders" icon="shopping-cart">
                <SmallBoxFooter>
                  More info <i className="fa fa-arrow-circle-right"></i>
                </SmallBoxFooter>
              </SmallBox>
            </div>
            <div className="col-lg-3 col-xs-6">
              <SmallBox title="53%" text="Bounce Rate" icon="bar-chart" color="green">
                <SmallBoxFooter>
                  More info <i className="fa fa-arrow-circle-right"></i>
                </SmallBoxFooter>
              </SmallBox>
            </div>
            <div className="col-lg-3 col-xs-6">
              <SmallBox title="44" text="User Registrations" icon="user-plus" color="yellow">
                <SmallBoxFooter>
                  More info <i className="fa fa-arrow-circle-right"></i>
                </SmallBoxFooter>
              </SmallBox>
            </div>
            <div className="col-lg-3 col-xs-6">
              <SmallBox title="65" text="Unique Visitors" icon="pie-chart" color="red">
                <SmallBoxFooter>
                  More info <i className="fa fa-arrow-circle-right"></i>
                </SmallBoxFooter>
              </SmallBox>
            </div>
          </div>
          { /* END SMALL BOX */ }
          { /* BOX */ }
          <div className="row">
            <div className="col-lg-3 col-md-6 col-md col-xs-12">
              <Box collapsable={true} collapsed={true} color="primary">
                <BoxHeader>Collapsed</BoxHeader>
                <BoxBody>The body of the box</BoxBody>
              </Box>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <Box title="Collapsable" collapsable={true} color="warning">
                <BoxHeader>Collapsable</BoxHeader>
                <BoxBody>The body of the box</BoxBody>
              </Box>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <Box title="Removable" color="success" removable={true}>
                <BoxHeader>Removable</BoxHeader>
                <BoxBody>The body of the box</BoxBody>
              </Box>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <Box title="Loading State" color="danger" isLoading={true}>
                <BoxHeader>Loading State</BoxHeader>
                <BoxBody>The body of the box</BoxBody>
              </Box>
            </div>
          </div>
          { /* END BOX */ }
        { /* BOX SOLID */ }
          <div className="row">
            <div className="col-lg-3 col-md-6 col-xs-12">
              <Box title="Collapsed" color="primary" collapsable={true} collapsed={true} solidColor={true}>
                <BoxHeader>Collapsed</BoxHeader>
                <BoxBody>The body of the box</BoxBody>
              </Box>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <Box title="Collapsable" color="warning" collapsable={true} solidColor={true}>
                <BoxHeader>Collapsable</BoxHeader>
                <BoxBody>The body of the box</BoxBody>
              </Box>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <Box title="Removable" color="success" solidColor={true} removable={true}>
                <BoxHeader>Removable</BoxHeader>
                <BoxBody>The body of the box</BoxBody>
              </Box>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <Box title="Loading State" color="danger" solidColor={true} isLoading={true}>
                <BoxHeader>Loading State</BoxHeader>
                <BoxBody>The body of the box</BoxBody>
              </Box>
            </div>
          </div>
          { /* END BOX SOLID */ }
        </ContentBody>
      </div>
    );
  }
}