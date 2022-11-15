import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';

import { setFilter } from '../../actions/actions';

function VisibilityFilterInput(props) {
  return <Form.Control
    onChange={e =>props.setFilter(e.target.value)}
    value={props.visibilityFilter}
    placeholder="filter..."
    className="py-0 mt-4"
  />;
}

VisibilityFilterInput.propTypes={
  visibilityFilter: PropTypes.string.isRequired
}

export default connect(
  null,
  { setFilter }
)(VisibilityFilterInput)