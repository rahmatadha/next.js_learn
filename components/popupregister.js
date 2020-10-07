import {Button,Select,Input,Modal} from 'antd'
import PopupLogin from '../components/popuplogin'
import React, { useState } from 'react';

export default  function Popupregister ({visiblereg, handleCancelreg, handleOkreg}) {

    const { Option } = Select;

//  LOGIN
    const [visible, setVisible] = useState(false)

    const showModal = () => {
      setVisible(true)
    };
  
    const handleOk = e => {
      console.log(e);
      setVisible(false)
    };
  
    const handleCancel = e => {
      setVisible(false)
    };

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
                <PopupLogin visible={visible} handleCancel={handleCancel} handleOk={handleOk} />
                <Button onClick={showModal} id="button-link-log"><p className="mt-3 mb-0">Log In</p></Button>
            </div>
          <div className="grid-inputreg reg mb-10">
          <p>First Name*</p>
            <Input/>
            <p>Last Name*</p>
            <Input/>
            <div>
            <p>Phone Number*</p>
            <Select
            placeholder="+62"
          >
            <Option value="+62">+62</Option>
            <Option value="+63">+63</Option>
            <Option value="+64">+64</Option>
          </Select>
            <Input id="inputphone"/>
            </div>
            <p>Email</p>
            <Input/>
            <p>Password*</p>
            <Input/>
            <p>Confirm Password*</p>
            <Input/>
          </div>
            <div className="text-center">
                <Button id="button-reg">Register</Button>
                <p>Already have an Account? <Button onClick={showModal} id="button-link-log"><p>Log In here</p></Button></p>
            </div>
        </div>
        </Modal>
    )
}
