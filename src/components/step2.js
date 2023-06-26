import React from "react";
import { Button } from "react-bootstrap";
const Step2 = (props) => {
    const { data, handleinput, next, back, error } = props;
    return (
        <form>

            <div className="container py-5" style={{ backgroundColor: 'cadetblue', width: '50%', marginTop: '0.5%', borderRadius: '30px' }}>
                <h1>React Multi Step Form</h1>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ width: '45%' }}>
                        <fieldset className="form-group border p-3" style={{ height: '100%' }}>
                            <legend className="w-auto px-2">Bank Details</legend>
                            <div style={{ marginBottom: '20px' }}>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <input type="text" className="form-control" placeholder='Bank Name' value={data.bankname} name='bankname' onChange={handleinput} />
                                </div>
                                {
                                    error.bankname ? <p style={{ color: 'red' }}>{error.bankname}</p> : null
                                }
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <input type="text" className="form-control" placeholder='IFSC Code' name='ifsc' onChange={handleinput} value={data.ifsc} />
                                </div>
                                {
                                    error.ifsc ? <p style={{ color: 'red' }}>{error.ifsc}</p> : null
                                }
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <input type="text" className="form-control" placeholder='Branch' name='branch' onChange={handleinput} value={data.branch} />
                                </div>
                                {
                                    error.branch ? <p style={{ color: 'red' }}>{error.branch}</p> : null
                                }
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <input type="number" className="form-control" placeholder='Account Number' name='accountnumber' onChange={handleinput} value={data.accountnumber} />
                                </div>

                                {
                                    error.accountnumber ? <p style={{ color: 'red' }}>{error.accountnumber}</p> : null
                                }
                            </div>

                            <Button onClick={back} variant="dark" style={{ marginRight: '10px' }}>Back</Button>
                            <Button onClick={next} variant="dark">Next</Button>

                        </fieldset>
                    </div>
                </div>
            </div>


        </form>
    );
};
export default Step2;