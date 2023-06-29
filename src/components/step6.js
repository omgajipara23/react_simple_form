import { Button } from 'react-bootstrap'
import './style/donepage.css'
import BasicForm from './basicform'
import { useState } from 'react'

const Step6 = () => {
    const [formsubmit, setFormSubmit] = useState(true)

    return (
        <div>


            {formsubmit ? <div>
                < div class="card" >
                    <div>
                        <i className="checkmark">✓</i>
                    </div>
                    <p>Your Response Has Been Recorded</p>
                    <div>
                        <Button variant='dark' style={{ width: '30%' }} onClick={() => { setFormSubmit(false) }}>Submit Another Response</Button>
                    </div>
                </div >
            </div > :
                <BasicForm />}
        </div>
    )
}
export default Step6