import searchStyles from '../../styles/search.module.css'
import Layout from '../../components/layout'
import Cardproduct from '../../components/card-poduct'
import Alsolike from '../../components/also-like'
import { Card } from 'antd';
export default function Search() {
    const { Meta } = Card;
    return (
        <Layout>
            <div className={searchStyles.titleSearch}>
                <div className={searchStyles.w50left}>
                <p className="my-4">Search results</p>
                <h2 className="my-4 font-bold text-30">“Loungewear”</h2>
                </div>
                <div className={searchStyles.w50right}>
                <p className="my-4">1,465 Results</p>
                <p className="my-4">Filter / Sort by</p>
                </div>
            </div>

            <Cardproduct/>
            <div>
                <h2>You May Also Like</h2>
            </div>
            <Alsolike/>
            {/* <div>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>

            </div> */}
            
        {/* <div className={searchStyles.search}>
            <div className={searchStyles.titleSearch}>
                <div className={searchStyles.w50left}>
                <p className="my-4">Search results</p>
                <h2 className="my-4 font-bold text-30">“Loungewear”</h2>
                </div>
                <div className={searchStyles.w50right}>
                <p className="my-4">1,465 Results</p>
                <p className="my-4">Filter / Sort by</p>
                </div>
            </div>
            <div className={searchStyles.gridImg}>
                <div className={searchStyles.product}>
                    <img src="/images/images/asset/WEL09142edt.png" />
                    <label className="my-4">Name Product</label>
                    <br />
                    <label className="my-4">Price Product</label>
                </div>
                <div className={searchStyles.product}>
                    <img src="/images/images/asset/WEL09142edt.png" />
                    <label>Name Product</label>
                    <br />
                    <label>Price Product</label>
                </div>
                <div className={searchStyles.product}>
                <img src="/images/images/asset/WEL09142edt.png" />
                    <label>Name Product</label>
                    <br />
                    <label>Price Product</label>
                </div>
                <div className={searchStyles.product}>
                <img src="/images/images/asset/WEL09142edt.png" />
                    <label>Name Product</label>
                    <br />
                    <label>Price Product</label>
                </div>
            </div>
            <div className={searchStyles.wrepperpagination}>
            <div class="pagination">
                    <a href="#">&laquo;</a>
                    <a href="#">1</a>
                    <a class="active" href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">5</a>
                    <a href="#">6</a>
                    <a href="#">next &raquo;</a>
            </div>
            </div>
            <br/>
            <div>
                <div>
                    <h2>You May Also Like</h2>
                </div>
                <div className={searchStyles.gridImg}>
                <div className={searchStyles.product}>
                <img src="/images/images/asset/WEL09152edt.png" />
                    <label>Name Product</label>
                    <br />
                    <label>Price Product</label>
                </div>
                <div className={searchStyles.product}>
                <img src="/images/images/asset/WEL09152edt.png" />
                    <label>Name Product</label>
                    <br />
                    <label>Price Product</label>
                </div>
                <div className={searchStyles.product}>
                <img src="/images/images/asset/WEL09152edt.png" />
                    <label>Name Product</label>
                    <br />
                    <label>Price Product</label>
                </div>
                <div className={searchStyles.product}>
                <img src="/images/images/asset/WEL09152edt.png" />
                    <label>Name Product</label>
                    <br />
                    <label>Price Product</label>
                </div>
                </div>
            </div>
        </div> */}
        </Layout>
    )
}