import phoneStyles from '../../styles/phoneverif.module.css'

export default function Registerphonenum() {
    return(
        <div>
            <div className={phoneStyles.center}>
                <h2 className="font-bold">SMS Verification</h2>
                <p>A code will be sent to your phone number through SMS.</p>
                <h4>Verification Code</h4>
                <div className="gridInput" >
                    <input />
                    <input />
                    <input />
                    <input />
                </div>
                <div className="btnphoneregis">
                    <button>REGISTER</button>
                </div>
            </div>            
        </div>
    )
}