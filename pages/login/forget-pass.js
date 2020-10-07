import {Input,Button} from 'antd'
import phoneStyles from '../../styles/phoneverif.module.css'
export default function Forgetpassword () {
    return (
        <div>
            <div className={phoneStyles.center}>
                <h2 className="font-bold text-left grid-input-respas1">Forgot Password</h2>
                <p className="grid-input-respas1 text-left text-base">Input registered email or phone number. A verification number will be sent to reset your password.</p>
                <div className="grid-input-respas" >
                    <label className="text-left">Phone Number or Email*</label>
                    <br/>
                    <input className="mb-6" />
                    <br/>
                    <div className="text-center mb-6">
                        <button className="bg-black hover:bg-white hover:text-black border-1 border-black text-white  py-2 px-6 rounded">SEND CODE</button>
                    </div>
                    <p className="text-center font-bold">Verification Code</p>
                </div>
                <div className="gridInput" >
                    <input />
                    <input />
                    <input />
                    <input />
                </div>
                <div className="btnlogin text-center">
                    <button className="mb-6">RESET PASSWORD</button>
                    <p className="grid-input-respas1">Waiting for  xx seconds to resend verification code</p>
                </div>
            </div>            
        </div>
    )
}