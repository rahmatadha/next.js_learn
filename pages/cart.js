import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import {MinusOutlined, PlusOutlined, RightOutlined} from '@ant-design/icons'
import { Button } from 'antd'

export default function Cart() {
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
        <Layout>
            <Head>
                <title>Cart</title>
            </Head>
            <div className="w-full my-24 pl-100px">
                     <div className="title text-4xl text-left mb-6 w-full block">
                       <h1>My Bag</h1>
                   </div>
                   <div className="flex">
                        <div className="flex-1  mr-16">
                            <table className="table-fixed">
                                <thead>
                                    <tr >
                                        <th className="border-t border-b border-table w-2 py-4 px-4"><input type="checkbox"></input></th>
                                        <th className="border-t border-b border-table w-1/4 py-4 px-4"></th>
                                        <th className="border-t border-b border-table w-3/4 py-4 px-6 text-right"><span>Delete</span></th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-b border-table">
                                        <td className="border-b border-table py-4 px-4"><input type="checkbox"></input></td>
                                        <td className="border-b border-table py-2 px-2 justify-center">
                                            <div className="max-w-150px max-h-150px rounded overflow-hidden mx-auto">
                                                <img src="/images/homepage/arrival1.png" className="mx-auto"/>
                                            </div>
                                        </td>
                                        <td className="border-b border-table py-4 px-4 font-medium">
                                            <div className="title lg:text-lg mb-2">
                                                <h1>Sierra Top</h1>
                                            </div>
                                            <div className="unit-price text-base">
                                                <span>Rp 849,000</span>
                                            </div>
                                            <div className="attributes py-8 grid grid-cols-5 items-center">
                                                <div className="attrColor items-center col-span-1">
                                                    <span className="uppercase text-11px inline-block ">Color</span>
                                                    <div className="ml-4  inline-block align-middle">
                                                    <div className="bg-clip-content bg-blue-600 p-1 border border-black w-30px h-30px"></div>
                                                    </div>
                                                </div>
                                                <div className="attrSize items-center col-span-1">
                                                    <span className="uppercase text-11px inline-block ">Size</span>
                                                    <div className="ml-4  inline-block align-middle">
                                                    <div className="bg-black text-white p-1 border border-black w-30px h-30px text-center">XS</div>
                                                    </div>
                                                </div>
                                                <div className="Quantity items-center col-span-2">
                                                    <div class="inline-flex  justify-center px-8">
                                                        <button class="flex hover:bg-gray-400 text-black text-lg font-bold py-2 px-3 rounded-l items-center">
                                                            <MinusOutlined />
                                                        </button>
                                                        <input className="w-1/2 border py-1 px-1"/>
                                                        <button class="flex hover:bg-gray-400 text-black text-lg font-bold py-2 px-3 rounded-r items-center">
                                                            <PlusOutlined/>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="Del-btn items-center col-span-1 flex justify-end pr-4">
                                                    <button class="flex hover:bg-gray-400 py-1 px-1 rounded-l items-center">
                                                        <svg className="fill-current text-table inline-block h-10 w-10" viewBox="0 0 21 26" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18.6418 3.17308H14.2788V2.37981C14.2788 1.06759 13.2113 0 11.899 0H8.72596C7.41375 0 6.34615 1.06759 6.34615 2.37981V3.17308H1.98317C0.889651 3.17308 0 4.06273 0 5.15625V7.93269C0 8.37078 0.355186 8.72596 0.793269 8.72596H1.22679L1.91213 23.118C1.97266 24.389 3.0168 25.3846 4.28921 25.3846H16.3358C17.6082 25.3846 18.6524 24.389 18.7129 23.118L19.3982 8.72596H19.8317C20.2698 8.72596 20.625 8.37078 20.625 7.93269V5.15625C20.625 4.06273 19.7353 3.17308 18.6418 3.17308ZM7.93269 2.37981C7.93269 1.94242 8.28857 1.58654 8.72596 1.58654H11.899C12.3364 1.58654 12.6923 1.94242 12.6923 2.37981V3.17308H7.93269V2.37981ZM1.58654 5.15625C1.58654 4.93756 1.76448 4.75962 1.98317 4.75962H18.6418C18.8605 4.75962 19.0385 4.93756 19.0385 5.15625V7.13942C18.794 7.13942 2.59959 7.13942 1.58654 7.13942V5.15625ZM17.1281 23.0425C17.1079 23.4662 16.7599 23.7981 16.3358 23.7981H4.28921C3.86506 23.7981 3.51701 23.4662 3.49688 23.0425L2.81511 8.72596H17.8099L17.1281 23.0425Z" />
                                                            <path d="M10.3125 22.2115C10.7506 22.2115 11.1058 21.8564 11.1058 21.4183V11.1058C11.1058 10.6677 10.7506 10.3125 10.3125 10.3125C9.87441 10.3125 9.51923 10.6677 9.51923 11.1058V21.4183C9.51923 21.8564 9.87436 22.2115 10.3125 22.2115Z" />
                                                            <path d="M14.2788 22.2115C14.7169 22.2115 15.0721 21.8564 15.0721 21.4183V11.1058C15.0721 10.6677 14.7169 10.3125 14.2788 10.3125C13.8407 10.3125 13.4855 10.6677 13.4855 11.1058V21.4183C13.4855 21.8564 13.8407 22.2115 14.2788 22.2115Z" />
                                                            <path d="M6.34613 22.2115C6.78421 22.2115 7.13939 21.8564 7.13939 21.4183V11.1058C7.13939 10.6677 6.78421 10.3125 6.34613 10.3125C5.90804 10.3125 5.55286 10.6677 5.55286 11.1058V21.4183C5.55286 21.8564 5.90799 22.2115 6.34613 22.2115Z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                       
                                    </tr>
                                    <tr className="border-t border-b border-table">
                                        <td className="border-b border-table py-4 px-4"><input type="checkbox"></input></td>
                                        <td className="border-b border-table py-2 px-2 justify-center">
                                            <div className="max-w-150px max-h-150px rounded overflow-hidden mx-auto">
                                                <img src="/images/homepage/arrival1.png" className="mx-auto"/>
                                            </div>
                                        </td>
                                        <td className="border-b border-table py-4 px-4 font-medium">
                                            <div className="title lg:text-lg mb-2">
                                                <h1>Sierra Top</h1>
                                            </div>
                                            <div className="unit-price text-base">
                                                <span>Rp 849,000</span>
                                            </div>
                                            <div className="attributes py-8 grid grid-cols-5">
                                                <div className="attrColor items-center col-span-1">
                                                    <span className="uppercase text-11px inline-block ">Color</span>
                                                    <div className="ml-4  inline-block align-middle">
                                                    <div className="bg-clip-content bg-blue-600 p-1 border border-black w-30px h-30px"></div>
                                                    </div>
                                                </div>
                                                <div className="attrSize items-center col-span-1">
                                                    <span className="uppercase text-11px inline-block ">Size</span>
                                                    <div className="ml-4  inline-block align-middle">
                                                    <div className="bg-black text-white p-1 border border-black w-30px h-30px text-center">XS</div>
                                                    </div>
                                                </div>
                                                <div className="Quantity items-center col-span-2">
                                                    <div class="inline-flex  justify-center px-8">
                                                        <button class="flex hover:bg-gray-400 text-black text-lg font-bold py-2 px-3 rounded-l items-center">
                                                            <MinusOutlined />
                                                        </button>
                                                        <input className="w-1/2 border text-center py-1 px-1"/>
                                                        <button class="flex hover:bg-gray-400 text-black text-lg font-bold py-2 px-3 rounded-r items-center">
                                                            <PlusOutlined/>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="Del-btn items-center col-span-1 flex justify-end pr-4">
                                                    <svg className="fill-current text-table inline-block h-10 w-10" viewBox="0 0 21 26" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.6418 3.17308H14.2788V2.37981C14.2788 1.06759 13.2113 0 11.899 0H8.72596C7.41375 0 6.34615 1.06759 6.34615 2.37981V3.17308H1.98317C0.889651 3.17308 0 4.06273 0 5.15625V7.93269C0 8.37078 0.355186 8.72596 0.793269 8.72596H1.22679L1.91213 23.118C1.97266 24.389 3.0168 25.3846 4.28921 25.3846H16.3358C17.6082 25.3846 18.6524 24.389 18.7129 23.118L19.3982 8.72596H19.8317C20.2698 8.72596 20.625 8.37078 20.625 7.93269V5.15625C20.625 4.06273 19.7353 3.17308 18.6418 3.17308ZM7.93269 2.37981C7.93269 1.94242 8.28857 1.58654 8.72596 1.58654H11.899C12.3364 1.58654 12.6923 1.94242 12.6923 2.37981V3.17308H7.93269V2.37981ZM1.58654 5.15625C1.58654 4.93756 1.76448 4.75962 1.98317 4.75962H18.6418C18.8605 4.75962 19.0385 4.93756 19.0385 5.15625V7.13942C18.794 7.13942 2.59959 7.13942 1.58654 7.13942V5.15625ZM17.1281 23.0425C17.1079 23.4662 16.7599 23.7981 16.3358 23.7981H4.28921C3.86506 23.7981 3.51701 23.4662 3.49688 23.0425L2.81511 8.72596H17.8099L17.1281 23.0425Z" />
                                                        <path d="M10.3125 22.2115C10.7506 22.2115 11.1058 21.8564 11.1058 21.4183V11.1058C11.1058 10.6677 10.7506 10.3125 10.3125 10.3125C9.87441 10.3125 9.51923 10.6677 9.51923 11.1058V21.4183C9.51923 21.8564 9.87436 22.2115 10.3125 22.2115Z" />
                                                        <path d="M14.2788 22.2115C14.7169 22.2115 15.0721 21.8564 15.0721 21.4183V11.1058C15.0721 10.6677 14.7169 10.3125 14.2788 10.3125C13.8407 10.3125 13.4855 10.6677 13.4855 11.1058V21.4183C13.4855 21.8564 13.8407 22.2115 14.2788 22.2115Z" />
                                                        <path d="M6.34613 22.2115C6.78421 22.2115 7.13939 21.8564 7.13939 21.4183V11.1058C7.13939 10.6677 6.78421 10.3125 6.34613 10.3125C5.90804 10.3125 5.55286 10.6677 5.55286 11.1058V21.4183C5.55286 21.8564 5.90799 22.2115 6.34613 22.2115Z" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </td>
                                       
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Order Summary */}
                        <div className="flex-initial bg-blue-300 w-1/3">
                            <div className="bg-white lg:shadow-orderTotals w-full">
                                 <div className="py-12 px-10 border-b ">
                                    <Button size={'large'} block style={{textAlign:'left', margin:'25px 0'}}>Use Your Reward <RightOutlined style={{marginTop:'3px', float:'right'}}/> </Button>
                                </div>
                                <div className="py-12 mx-10 border-b">
                                    <table className="w-full"> 
                                        <tbody>
                                            {totals.map((x,i) => {
                                                return <tr key={i}>
                                                <td className="label pb-2">
                                                   <span className="text-base font-bold">{x.label}</span>
                                                </td>
                                                <td className="value text-right pb-2">
                                                    <span className="text-base">{x.value}</span>
                                                </td>
                                            </tr>
                                            })}
                                            
                                            
                                        </tbody >
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </Layout>
    )
}