import './cart.scss';

function Cart() {
  return (
    <>
      <h1>This is Cart page</h1>
      <section className="cart">
        <div className="left">
            <div className="heading">
              <h1>cart items</h1>
            </div>

            <div className="delivery">
              <address>
                  <h3>Delivered to :</h3>
                  <p>Kolaghat,purba medinipur,west bengal -721134</p>
              </address>
              <button>
                edit
              </button>
            </div>
        </div>

        <div className="right">
          <h1>bill section</h1>
          <table className='table_top'>
            <tbody>
            <tr>
              <td>item ordered : </td>
              <td>10</td>
            </tr>

            <tr>
              <td>price : </td>
              <td>30,000.00</td>
            </tr>

            <tr>
              <td>discount price : </td>
              <td>1,250.00</td>
            </tr>

            <tr>
              <td>delivery charges : </td>
              <td>500.00</td>
            </tr>
            </tbody>

            <tfoot>
            <tr>
              <td>total price : </td>
              <td>28,250.00</td>
            </tr>
            </tfoot>

          </table>

          <div className="buttons">
            <input type="button" value="place order" />
            <input type="button" value="cancel" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
