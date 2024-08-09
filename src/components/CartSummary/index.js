// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalamount = () => {
        const eachProductCost = cartList.map(
          productCost => productCost.price * productCost.quantity,
        )
        const reducer = (accumulator, currentValue) =>
          accumulator + currentValue
        return eachProductCost.reduce(reducer)
      }
      return (
        <div className="ordercontainer">
          <div className="orderCard">
            <h1 className="order-heading">Order Total: {totalamount()}</h1>
            <p>{cartList.length} items in cart</p>
            <button className="checkOutBtn">Checkout</button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
