import {Button,Select,Input,Modal} from 'antd'
// import Select from 'react-select';
export default  function Popupregister ({visiblereg, handleCancelreg, handleOkreg}) {

    const { Option } = Select;

    return (
        <Modal
          title=""
          visible={visiblereg}
          onOk={handleOkreg}
          onCancel={handleCancelreg}
          footer={[]}
        >
            <div className="wrepper-reg">
            <div className="wrepper-header-reg">
                <p className="text-24 font-bold">Register</p>
                <Button id="button-link-log"><p className="mt-3 mb-0">Log In</p></Button>
            </div>
          <div className="grid-inputreg reg mb-10">
          <p>First Name*</p>
            <Input/>
            <p>Last Name*</p>
            <Input/>
            <p>Phone Number*</p>
            <Select
            placeholder="+62"
          >
            <Option value="+62">+62</Option>
            <Option value="+63">+63</Option>
            <Option value="+64">+64</Option>
          </Select>
            <Input style={{width:'77%',float:'right'}}/>
            <p>Email</p>
            <Input/>
            <p>Password*</p>
            <Input/>
            <p>Confirm Password*</p>
            <Input/>
          </div>
            <div className="text-center">
                <Button id="button-reg">Register</Button>
                <p>Already have an Account? <Button id="button-link-log"><p>Log In here</p></Button></p>
            </div>
        </div>
        </Modal>
    )
}
