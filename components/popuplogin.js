import {Checkbox,Button,Modal,Form,Input} from 'antd'
import Link from 'next/link'

export default  function Popuplogin ({visible, handleCancel, handleOk}) {

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
                <Button id="button-link-log"><p className="mt-3 mb-0">Register</p></Button>
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
            <div className="text-right text-black">
              <Link href="/login/forget-pass"><a className="text-black underline">Forgot Password?</a></Link>
              </div>
              <div>
              <Checkbox>Remember me</Checkbox>
              </div>
            </div>
            <div className="text-center mb-10">
                <Button id="button-reg">LOG IN</Button>
                <p>or Login With</p>
            </div>
            <div className="grid-logwith text-center mb-10">
                <Button id="button-loggoo">Google</Button>
                <Button id="button-logtwit">Twitter</Button>
                <Button id="button-logfb">Facebook</Button>
            </div>

              <p className="text-center">Don’t have an Account? <Button id="button-link-log"><p>Register here</p></Button></p>
        </div>
    </Modal>
    )
}
