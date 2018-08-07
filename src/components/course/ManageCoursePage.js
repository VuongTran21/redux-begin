import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CourseActions from '../../actions/courseActions';

class ManageCoursePage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() { 
        return (
            <h1>Mange Course</h1>
        );
    }
}

ManageCoursePage.propTypes = {
    props: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CourseActions, dispatch)
    };
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);