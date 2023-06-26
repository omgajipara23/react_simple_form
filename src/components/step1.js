import React from "react";
import { Button } from "react-bootstrap";
const Step1 = (props) => {
    const { data, handleinput, next, formSubmit, error } = props;
    return (
        <form onSubmit={formSubmit}>
            <div className="container py-5" style={{ backgroundColor: 'cadetblue', width: '50%', marginTop: '0.5%', borderRadius: '30px' }}>
                <h1 >React Multi Step Form</h1>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ width: '45%' }}>
                        <fieldset className="form-group border p-3" style={{ height: '100%' }}>
                            <legend className="w-auto px-2">Basic Details</legend>
                            <div style={{ marginBottom: '20px' }}>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <input type="text" className="form-control" placeholder='First Name' name='firstname' value={data.firstname} onChange={handleinput} />
                                </div>

                                {
                                    error.firstname ? <p style={{ color: 'red' }}>{error.firstname}</p> : null
                                }
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <input type="text" className="form-control" placeholder='Last Name' name='lastname' onChange={handleinput} value={data.lastname} />
                                </div>
                                {
                                    error.lastname ? <p style={{ color: 'red' }}>{error.lastname}</p> : null
                                }
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <input type="email" className="form-control" placeholder='Email' name='email' onChange={handleinput} value={data.email} />
                                </div>
                                {
                                    error.email ? <p style={{ color: 'red' }}>{error.email}</p> : null
                                }
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <input type="number" className="form-control" placeholder='Phone Number' name='number' onChange={handleinput} value={data.number} />
                                </div>

                                {
                                    error.number ? <p style={{ color: 'red' }}>{error.number}</p> : null
                                }

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
                                {
                                    error.gender ? <p style={{ color: 'red' }}>{error.gender}</p> : null
                                }
                                <br></br>
                            </div>
                            <Button onClick={next} variant="dark">Next</Button>

                        </fieldset>

                    </div>
                </div>
            </div>


        </form>
    );
};
export default Step1;