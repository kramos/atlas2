/*jshint esversion: 6 */

import React, {PropTypes} from 'react';
import {ListGroupItem} from 'react-bootstrap';
import LinkContainer from 'react-router-bootstrap';
export default class WorkspaceListElement extends React.Component {
  render() {
    var href = 'workspace/' + this.props.id;
    return (
      <ListGroupItem header={this.props.name} href={href}>
        {this.props.description}
      </ListGroupItem>
    );
  }
}
