import phoneStyles from '../../styles/phoneverif.module.css'

export default function Registerphonenum() {
    return(
        <div>
            <div className={phoneStyles.center}>
                <h2 className="font-bold grid-input-respas1 text-24">SMS Verification</h2>
                <p className="grid-input-respas1 text-base">A code will be sent to your phone number through SMS.</p>
                <h4 className="grid-input-respas1 text-base font-bold">Verification Code</h4>
                <div className="gridInput" >
                    <input />
                    <input />
                    <input />
                    <input />
                </div>
                <div className="btnphoneregis text-base">
                    <button>REGISTER</button>
                </div>
            </div>            
        </div>
    )
}