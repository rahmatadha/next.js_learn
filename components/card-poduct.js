import { Card,Pagination,Row,Col } from 'antd';

export default  function Cardproduct () {
    const { Meta } = Card;
    return(
        <div className="w-87% m-auto">
            <Row>
                <div className="mx-4 mb-10">
                <Card
                    hoverable
                    style={{ width: 250 }}
                    cover={<img alt="Bateeq" src="/images/images/asset/WEL09142edt.png" />}
                >
                    <Meta title="Name Product" description="Rp.450.000" />
                </Card>
                </div>
                <div className="mx-4 mb-10">
                <Card
                    hoverable
                    style={{ width: 250 }}
                    cover={<img alt="Bateeq" src="/images/images/asset/WEL09142edt.png" />}
                >
                    <Meta title="Name Product" description="Rp.450.000" />
                </Card>
                </div>
                <div className="mx-4 mb-10">
                <Card
                    hoverable
                    style={{ width: 250 }}
                    cover={<img alt="Bateeq" src="/images/images/asset/WEL09142edt.png" />}
                >
                    <Meta title="Name Product" description="Rp.450.000" />
                </Card>
                </div>
                <div className="mx-4 mb-10">
                <Card
                    hoverable
                    style={{ width: 250 }}
                    cover={<img alt="Bateeq" src="/images/images/asset/WEL09142edt.png" />}
                >
                    <Meta title="Name Product" description="Rp.450.000" />
                </Card>
                </div>
                <div className="mx-4 mb-10">
                <Card
                    hoverable
                    style={{ width: 250 }}
                    cover={<img alt="Bateeq" src="/images/images/asset/WEL09142edt.png" />}
                >
                    <Meta title="Name Product" description="Rp.450.000" />
                </Card>
                </div>
                <div className="mx-4 mb-10">
                <Card
                    hoverable
                    style={{ width: 250 }}
                    cover={<img alt="Bateeq" src="/images/images/asset/WEL09142edt.png" />}
                >
                    <Meta title="Name Product" description="Rp.450.000" />
                </Card>
                </div>
                <div className="mx-4 mb-10">
                <Card
                    hoverable
                    style={{ width: 250 }}
                    cover={<img alt="Bateeq" src="/images/images/asset/WEL09142edt.png" />}
                >
                    <Meta title="Name Product" description="Rp.450.000" />
                </Card>
                </div>
                <div className="mx-4 mb-10">
                <Card
                    hoverable
                    style={{ width: 250 }}
                    cover={<img alt="Bateeq" src="/images/images/asset/WEL09142edt.png" />}
                >
                    <Meta title="Name Product" description="Rp.450.000" />
                </Card>
                </div>
            </Row>
                <div className="flex justify-center my-40">
                <Pagination defaultCurrent={1} total={50} />
                </div>

            </div>
            
    )
}