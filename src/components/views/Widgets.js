import React, { Component } from 'react';
//import { Link } from 'react-router';

// Layout
import ContentHeader from 'components/layout/ContentHeader';
import ContentBody from 'components/layout/ContentBody';

// Widgets
import Box from 'components/widgets/Box';
import InfoBox from 'components/widgets/InfoBox';
import SmallBox from 'components/widgets/SmallBox';


export default class Widgets extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Widgets" />
        <ContentBody>
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
              <InfoBox title="bookmarks" text="41,410" icon="bookmark-o" fullColored="true">
                Progress Bar Here!!!
              </InfoBox>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <InfoBox title="likes" text="41,410" icon="thumbs-o-up" color="green" fullColored="true">
                Progress Bar Here!!!
              </InfoBox>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <InfoBox title="events" text="41,410" icon="calendar" color="yellow" fullColored="true">
                Progress Bar Here!!!
              </InfoBox>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <InfoBox title="comments" text="41,410" icon="comments-o" color="red" fullColored="true">
                Progress Bar Here!!!
              </InfoBox>
            </div>
          </div>
          { /* END INFO BOX FULL COLERED */ }
          { /* SMALL BOX */ }
          <div className="row">
            <div className="col-lg-3 col-xs-6">
              <SmallBox title="150" text="New Orders" icon="shopping-cart">
                More info <i className="fa fa-arrow-circle-right"></i>
              </SmallBox>
            </div>
            <div className="col-lg-3 col-xs-6">
              <SmallBox title="53%" text="Bounce Rate" icon="bar-chart" color="green">
                More info <i className="fa fa-arrow-circle-right"></i>
              </SmallBox>
            </div>
            <div className="col-lg-3 col-xs-6">
              <SmallBox title="44" text="User Registrations" icon="user-plus" color="yellow">
                More info <i className="fa fa-arrow-circle-right"></i>
              </SmallBox>
            </div>
            <div className="col-lg-3 col-xs-6">
              <SmallBox title="65" text="Unique Visitors" icon="pie-chart" color="red">
                More info <i className="fa fa-arrow-circle-right"></i>
              </SmallBox>
            </div>
          </div>
          { /* END SMALL BOX */ }
          { /* BOX */ }
          <div className="row">
            <div className="col-lg-3 col-md-6 col-md col-xs-12">
              <Box title="Collapsed" icon="window-maximize" collapsable={true} collapsed={true} color="primary">
                The body of the box
              </Box>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <Box title="Collapsable" icon="window-minimize" collapsable={true} color="warning">
                The body of the box
              </Box>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <Box title="Removable" icon="remove" color="success" removable={true}>
                The body of the box
              </Box>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <Box title="Loading State" icon="refresh" color="danger" isLoading={true}>
                The body of the box
              </Box>
            </div>
          </div>
          { /* END BOX */ }
        { /* BOX SOLID */ }
          <div className="row">
            <div className="col-lg-3 col-md-6 col-xs-12">
              <Box title="Collapsed" icon="window-maximize" color="primary" collapsable={true} collapsed={true} solidColor={true}>
                The body of the box
              </Box>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <Box title="Collapsable" icon="window-minimize" color="warning" collapsable={true} solidColor={true}>
                The body of the box
              </Box>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <Box title="Removable" icon="remove" color="success" solidColor={true} removable={true}>
                The body of the box
              </Box>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <Box title="Loading State" icon="refresh" color="danger" solidColor={true} isLoading={true}>
                The body of the box
              </Box>
            </div>
          </div>
          { /* END BOX SOLID */ }
        </ContentBody>
      </div>
    );
  }
}