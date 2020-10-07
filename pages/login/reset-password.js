import {Input} from 'antd'
import phoneStyles from '../../styles/phoneverif.module.css'
export default function Resetpassword () {
    return (
        <div>
            <div className={phoneStyles.center}>
                <h2 className="font-bold text-left grid-input-respas1">Reset Password</h2>

                <div className="grid-input-respas" >
                    <label className="text-left">New Password*</label>
                    <br/>
                    <input />
                    <br/>
                    <label className="text-left">Confirm New Password*</label>
                    <br/>
                    <input />
                </div>
                <div className="btnlogin text-center">
                    <button>SAVE NEW PASSWORD</button>
                </div>
            </div>            
        </div>
    )
}