import { Button } from 'react-bootstrap'
import './style/donepage.css'
import BasicForm from './basicform'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Step6 = () => {
    const [formsubmit, setFormSubmit] = useState(true)
    const navigate = useNavigate()
    function tablelist(params) {
        navigate("/listing")
    }
    return (
        <div>


            {formsubmit ? <div>
                < div className="card" >
                    <div>
                        <i className="checkmark">✓</i>
                    </div>
                    <p style={{ fontSize: '20px' }}>Your Response Has Been Recorded</p>

                    <div>
                        <Button variant='dark' style={{ width: '30%' }} onClick={() => { setFormSubmit(false) }}>Submit Another Response</Button>
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <Button variant='dark' style={{ width: '30%' }} onClick={() => tablelist()}>Back To Listing</Button>
                    </div>
                </div >
            </div > :
                <BasicForm />}


        </div>
    )
}
export default Step6