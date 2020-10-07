import { Button } from 'antd'
import {RightOutlined} from '@ant-design/icons'

export default function OrderTotals({cartTotals}){
    const totals =[
        {
            label:'Sub Total',
            value:'Rp 3,185,000'
        },
        {
            label:'Points Collected',
            value:'20 Pts'
        },
    ]
    const discount =[
        {
            labelPotentialDisc:'Potential Discount',
            valuePotentialDisc:'Rp 100,000'
        }
    ]
    return(
        <div className="flex-initial w-1/3 phone:w-full tablet:w-full">
        <div className="bg-white lg:shadow-orderTotals w-full mb-8">
             <div className="py-12 px-10 border-b ">
                <Button size={'large'} block style={{textAlign:'left', margin:'25px 0'}}>Use Your Reward <RightOutlined style={{marginTop:'3px', float:'right'}}/> </Button>
            </div>
            <div className="py-12 mx-10 phone:mx-6">
            {cartTotals ?( 
                <table className="w-full">
                    <tbody>
                           <tr className="subtotal">
                            <td className="label pb-4">
                               <span className="font-bold text-2xl">Subtotal</span>
                            </td>
                            <td className="value text-right pb-4">
                                <span className="font-semibold text-2xl">Rp 3,185,000</span>
                            </td>
                        </tr>

                        <tr className="points">
                            <td className="label pb-4">
                               <span className="text-base font-bold text-base">Points Collected</span>
                            </td>
                            <td className="value text-right  pb-4 text-base font-semibold">
                                <span className="text-base">20 Pts</span>
                            </td>
                        </tr>
                    </tbody >
                   <tfoot className="border-t border-table">
                   <tr className="points">
                            <td className="label py-4">
                               <span className="text-base font-bold text-base">Potential Discount</span>
                            </td>
                            <td className="value text-right  py-4 text-base font-semibold">
                                <span className="text-base">Rp 100,000</span>
                            </td>
                        </tr>
                   </tfoot>
                </table>
                 ):(
                     <table className="w-full">
                          <tbody>
                        <tr className="subtotal">
                         <td className="label pb-4">
                            <span className="font-bold text-2xl">Subtotal</span>
                         </td>
                         <td className="value text-right pb-4">
                             <span className="font-semibold text-2xl">Rp 3,185,000</span>
                         </td>
                     </tr>

                     <tr className="points">
                         <td className="label pb-4">
                            <span className="text-base font-bold text-base">Points Collected</span>
                         </td>
                         <td className="value text-right  pb-4 text-base font-semibold">
                             <span className="text-base">20 Pts</span>
                         </td>
                     </tr>
                 </tbody >
                     </table>
                    )}
            </div>
        </div>
        <Button style={{backgroundColor:"black", color:"white",textTransform:"uppercase"}}block>Checkout</Button>
    </div>
    )
}