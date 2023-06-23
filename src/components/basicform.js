import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function BasicForm() {

    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        number: "",
        gender: "",
        bankname: "",
        ifsc: "",
        branch: "",
        accountnumber: "",
        information: "off",
        term: "off"
    })

    const [document, setDocument] = useState({
        adharcard: "",
        passbook: "",
        certificate: ""
    })

    const [education, setEducation] = useState([
        {
            boardname: "",
            coursename: "",
            score: "",
            passingyear: "",
            language: "",
            result: ""
        }
    ])

    const [address, setAddress] = useState([
        {
            area: "",
            streetname: "",
            landmark: "",
            zipcode: "",
            city: "",
            state: ""
        }
    ])

    function addAddress() {
        const addField = {
            area: "",
            streetname: "",
            landmark: "",
            zipcode: "",
            city: "",
            state: ""
        }

        const add = [...address, addField]
        setAddress(add)
    }

    function addeducation() {
        const addEdu = {
            boardname: "",
            coursename: "",
            score: "",
            passingyear: "",
            language: "",
            result: ""
        }

        const addrow = [...education, addEdu]
        setEducation(addrow)
    }

    function removefield(index) {
        const rows = [...education];
        console.log(index, "index")
        rows.splice(index, 1);
        setEducation(rows);
    }

    function removeAddress(i) {
        const field = [...address]
        field.splice(i, 1)
        setAddress(field)
    }

    function handleinput(event) {
        const newobj = { ...values, [event.target.name]: event.target.value }
        setValues(newobj)
    }

    function formSubmit(e) {
        e.preventDefault()
        console.log(values);
    }


    return (
        <>
            <div className="container py-5" style={{ backgroundColor: 'cadetblue', width: '100%', marginTop: '0.5%', borderRadius: '30px' }}>
                <h1 style={{ marginBottom: '2rem' }}>React Basic Form</h1>


                <form onSubmit={formSubmit}>

                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                        <div style={{ width: '45%' }}>
                            <fieldset className="form-group border p-3" style={{ height: '100%' }}>
                                <legend className="w-auto px-2">Basic Details</legend>
                                <div style={{ marginBottom: '20px' }}>
                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <input type="text" className="form-control" placeholder='First Name' name='firstname' onChange={handleinput} />
                                    </div>
                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <input type="text" className="form-control" placeholder='Last Name' name='lastname' onChange={handleinput} />
                                    </div>
                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <input type="email" className="form-control" placeholder='Email' name='email' onChange={handleinput} />
                                    </div>
                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <input type="number" className="form-control" placeholder='Phone Number' name='number' onChange={handleinput} />
                                    </div>

                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" value="male" id='male' name='gender' onChange={handleinput} />
                                        <label className="form-check-label" htmlFor="male">male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" value="female" id='female' name='gender' onChange={handleinput} />
                                        <label className="form-check-label" htmlFor="female">female</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" value="other" id='other' name='gender' onChange={handleinput} />
                                        <label className="form-check-label" htmlFor="other">other</label>
                                    </div>
                                    <br></br>


                                </div>
                            </fieldset>
                        </div>


                        <div style={{ width: '45%' }}>
                            <fieldset className="form-group border p-3" style={{ height: '100%' }}>
                                <legend className="w-auto px-2">Bank Details</legend>
                                <div style={{ marginBottom: '20px' }}>
                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <input type="text" className="form-control" placeholder='Bank Name' name='bankname' onChange={handleinput} />
                                    </div>
                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <input type="text" className="form-control" placeholder='IFSC Code' name='ifsc' onChange={handleinput} />
                                    </div>
                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <input type="text" className="form-control" placeholder='Branch' name='branch' onChange={handleinput} />
                                    </div>
                                    <div className="form-group" style={{ marginBottom: '15px' }}>
                                        <input type="number" className="form-control" placeholder='Account Number' name='accountnumber' onChange={handleinput} />
                                    </div>
                                </div>
                            </fieldset>
                        </div>

                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '25px' }}>

                        <div style={{ width: '45%' }}>
                            <fieldset className="form-group border p-3" style={{ height: 'auto' }}>
                                <legend className="w-auto px-2">Education Details</legend>
                                {
                                    education.map((item, index) => {
                                        return (
                                            <div style={{ marginBottom: '20px' }} key={index}>
                                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                                    <input type="text" className="form-control" placeholder='Name Of Board' name='boardname' />
                                                </div>
                                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                                    <input type="text" className="form-control" placeholder='Name Of Course' name='coursename' />
                                                </div>

                                                <div style={{ display: 'flex' }}>
                                                    <div className="form-group" style={{ marginBottom: '15px', width: '45%' }}>
                                                        <input type="email" className="form-control" placeholder='Score' name='score' />
                                                    </div>

                                                    <div style={{ display: 'flex' }}>

                                                        <label style={{ marginLeft: '14px' }}>Passing Year:</label>
                                                        <div className="form-check form-check-inline">
                                                            <select className="custom-select" name='passingyear'>

                                                                <option value="2019">2019</option>
                                                                <option value="2020">2020</option>
                                                                <option value="2021">2021</option>
                                                                <option value="2022">2022</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                </div>


                                                <div style={{ marginBottom: '10px' }}>
                                                    <label style={{ float: 'left' }}>Language Of Course:</label>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" value="english" id='english' name='language' />
                                                        <label className="form-check-label" >English</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" value="hindi" id='hindi' name='language' />
                                                        <label className="form-check-label" >Hindi</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" value="gujarati" id='gujarati' name='language' />
                                                        <label className="form-check-label" >Gujarati</label>
                                                    </div>
                                                </div>

                                                <div className="form-group" style={{ marginBottom: '15px', borderBottom: "1px solid", paddingBottom: '15px' }}>
                                                    <label style={{ float: 'left' }}>Result:</label>
                                                    <input type='file' name='result'></input>

                                                    {index > 0 ? <Button variant="danger" onClick={() => removefield(index)}>
                                                        Delete
                                                    </Button> : null}
                                                </div>




                                            </div>
                                        )
                                    })
                                }
                                <div>
                                    <Button variant="dark" style={{ marginBottom: '10px' }} onClick={addeducation} >
                                        Add More
                                    </Button>
                                    <br></br>
                                </div>
                            </fieldset>
                        </div>

                        <div style={{ width: '45%' }}>
                            <fieldset className="form-group border p-3" style={{ height: 'auto' }}>
                                <legend className="w-auto px-2">Address Details</legend>
                                {
                                    address.map((item, index) => {
                                        return (
                                            <div style={{ marginBottom: '20px' }} key={index}>
                                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                                    <input type="text" className="form-control" placeholder='Area' name='area' />
                                                </div>
                                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                                    <input type="text" className="form-control" placeholder='Street Name' name='streetname' />
                                                </div>

                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <div className="form-group" style={{ marginBottom: '15px', width: '49%' }}>
                                                        <input type="email" className="form-control" placeholder='Landmark' name='landmark' />
                                                    </div>


                                                    <div className="form-group" style={{ marginBottom: '15px', width: '49%' }}>
                                                        <input type="email" className="form-control" placeholder='Zipcode' name='zipcode' />
                                                    </div>

                                                </div>

                                                <div style={{ marginBottom: '10px', borderBottom: '1px solid', paddingBottom: '15px' }}>
                                                    <div style={{ display: 'flex' }}>

                                                        <label style={{ marginLeft: '14px' }}>City:</label>
                                                        <div className="form-check form-check-inline">
                                                            <select className="custom-select" name='city'>
                                                                <option value="Delhi">Rajkot</option>
                                                                <option value="Punjab">Jamnagar</option>
                                                                <option value="Jharkhand">Ahmedabad</option>
                                                                <option value="Bihar">Surat</option>
                                                            </select>
                                                        </div>


                                                        <label style={{ marginLeft: '14px' }}>State:</label>
                                                        <div className="form-check form-check-inline">
                                                            <select className="custom-select" name='state'>
                                                                <option value="Delhi">Delhi</option>
                                                                <option value="Punjab">Punjab</option>
                                                                <option value="Jharkhand">Gujarat</option>
                                                                <option value="Bihar">Bihar</option>
                                                            </select>
                                                        </div>
                                                        {index > 0 ? <Button variant="danger" onClick={() => removeAddress(index)}>
                                                            Delete
                                                        </Button> : null}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div>
                                    <Button variant="dark" style={{ marginBottom: '10px' }} onClick={addAddress}>
                                        Add More
                                    </Button>
                                    <br></br>
                                </div>
                            </fieldset>
                        </div>

                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '25px' }}>

                        <div style={{ width: '45%' }}>
                            <fieldset className="form-group border p-3" style={{ height: '100%' }}>
                                <legend className="w-auto px-2">Upload Documents</legend>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ float: 'left' }}>Adhar Card:</label>
                                    <input type='file' name='adharcard'></input>
                                </div>

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ float: 'left' }}>Bank Passbook:</label>
                                    <input type='file' name='passbook'></input>
                                </div>

                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label style={{ float: 'left' }}>Leaving Certificate:</label>
                                    <input type='file' name='certificate'></input>
                                </div>

                            </fieldset>
                        </div>

                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="info" name='information' onChange={handleinput} />
                            <label className="form-check-label" htmlFor="info">All Information Is Corract</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="terms" name='term' onChange={handleinput} />
                            <label className="form-check-label" htmlFor="terms">I agree all terms and conditons</label>
                        </div>
                    </div>

                    <div style={{ marginTop: '10px' }}>
                        <Button variant="success" type="submit" id='btnSubmit'>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default BasicForm