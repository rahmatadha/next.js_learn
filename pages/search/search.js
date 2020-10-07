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
            <div className="mx-8pr">
                <h2 className="text-30 tablet:text-center">You May Also Like</h2>
            </div>
            <Alsolike/>
        </Layout>
    )
}