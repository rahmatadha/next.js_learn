import {Checkbox,Button,Modal,Form,Input} from 'antd'
import Link from 'next/link'
import PopupRegister from '../components/popupregister'
import React, { useState } from 'react';

export default  function Popuplogin ({visible, handleCancel, handleOk}) {

  // register

  const [visiblereg, setVisiblereg] = useState(false)

  const showModalreg = () => {
    setVisiblereg(true)
  };

  const handleOkreg = e => {
    console.log(e);
    setVisiblereg(false)
  };

  const handleCancelreg = e => {
    setVisiblereg(false)
  };
    return (
        <Modal
          title=""
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[]}
        >
          <div className="wrepper-reg">
          <div className="wrepper-header-log">
                <p className="text-24 font-bold">LOG IN</p>
                <PopupRegister visiblereg={visiblereg} handleCancelreg={handleCancelreg} handleOkreg={handleOkreg} />
                <Button onClick={showModalreg} id="button-link-log"><p className="mt-3 mb-0">Register</p></Button>
            </div>
            <div className="grid-inputreg mb-10">
            <p>Phone Number or Email </p>
              <Form.Item
              name="username"
              rules={[
                {
                  message: 'Please input your Phone Number Or Email!',
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <p>Password</p>
            {/* <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            > */}
              <Input.Password id="border" />
            {/* </Form.Item> */}
            <div className="text-right text-black mt-2">
              <Link href="/login/forget-pass"><a className="text-black underline">Forgot Password?</a></Link>
              </div>
              <div className="my-6">
              <Checkbox>Remember me</Checkbox>
              </div>
            </div>
            <div className="text-center mb-12">
                <Button id="button-reg">LOG IN</Button>
                <p className="login-with"><span>or Login With</span></p>
            </div>
            <div className="grid-logwith text-center mb-10">
                <Button id="button-loggoo">Google</Button>
                <Button id="button-logtwit">Twitter</Button>
                <Button id="button-logfb">Facebook</Button>
            </div>

              <p className="text-center">Don’t have an Account? <Button onClick={showModalreg} id="button-link-log"><p>Register here</p></Button></p>
        </div>
    </Modal>
    )
}
