import { Card,Pagination,Row,Col } from 'antd';

export default  function Alsolike () {
    const { Meta } = Card;
    return(
        <div className="w-87% m-auto">
            <Row>
                <div className="mx-10 mb-10">
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="Bateeq" src="/images/images/asset/WEL09152edt.png" />}
                >
                    <Meta title="Name Product" description="Rp.450.000" />
                </Card>
                </div>
                <div className="mx-10 mb-10">
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="Bateeq" src="/images/images/asset/WEL09142edt.png" />}
                >
                    <Meta title="Name Product" description="Rp.450.000" />
                </Card>
                </div>
                <div className="mx-10 mb-10">
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="Bateeq" src="/images/images/asset/WEL09152edt.png" />}
                >
                    <Meta title="Name Product" description="Rp.450.000" />
                </Card>
                </div>
            </Row>

            </div>
            
    )
}