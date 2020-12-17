import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Message from '../components/Message';
// import * as messages from '../constants/Message';

class MessageContainer extends Component {
  render() {
      var {message} = this.props;

    return (
        <Message message ={message} />
    );
  }

 

}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}

const mapStateToProps = (state) => ({
    message: state.message
});

const mapDispatchToProps = (dispatch) => ({
    
});

export default connect(mapStateToProps,mapDispatchToProps)(MessageContainer);
