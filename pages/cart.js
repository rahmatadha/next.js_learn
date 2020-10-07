import Layout from '../components/CartAndCheckout/cartAndCheckoutLayout'
import OrderTotlas from '../components/CartAndCheckout/orderTotals'
import CartRow from '../components/CartAndCheckout/cartRow'

export default function Cart() {
    return(
        <Layout cart>
                       {/* CartTable */}
                        <div className="flex-1  lg:mr-16 phone:mr-0">
                            <table className="table-fixed">
                                <thead>
                                    <tr >
                                        <th className="border-t border-b border-table w-2 py-4 px-4"><input type="checkbox"></input></th>
                                        <th className="border-t border-b border-table w-1/4 phone:w-1/2 py-4 px-4"></th>
                                        <th className="border-t border-b border-table w-3/4 py-4 px-6 text-right"><span className="phone:hidden">Delete</span></th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <CartRow />
                                    <CartRow />
                                </tbody>
                            </table>
                        </div>
                        {/* Order Totals */}
                        <OrderTotlas cartTotals/>
                  
        </Layout>
    )
}