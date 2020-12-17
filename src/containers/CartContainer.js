import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import * as messages from '../constants/Message';
import * as actions from '../actions/index';

class CartContainer extends Component {
  render() {

    var {cart} = this.props;

    return (
        <Cart>
            { this.showCartItems(cart) }
            { this.showTotalAmount(cart) }
        </Cart>
    );
  }

  showCartItems = (cart) => {
    var result = <tr><td>{messages.MSG_CART_EMPTY}</td></tr>;
    if(cart.length > 0) {
        result = cart.map((item,index) => <CartItem key={index} item={item} index={index} onDeleteProductInCart = {this.props.onDeleteProductInCart} onChangeMessage = {this.props.onChangeMessage} onUpdateQuantity = {this.props.onUpdateQuantity} />)
    }
    return result;
  };

  showTotalAmount = (cart) => {
      var result = null;
      if(cart.length > 0) {
          result = <CartResult cart={cart} />
      }
      return result;
  };

}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product : PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity : PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = (state) => ({
    cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({
    onDeleteProductInCart: (product) => dispatch(actions.actRemoveProductInCart(product)),
    onChangeMessage: (message) => dispatch(actions.actChangeMessage(message)),
    onUpdateQuantity: (product, quantity) => dispatch(actions.actUpdateProductInCart(product, quantity))
});

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
