import React from "react";
import Button from 'react-bootstrap/Button';

const Step4 = (props) => {
    const { data, handleinput, next, back, addAddress, removeAddress } = props;
    return (
        <form>


            <div className="container py-5" style={{ backgroundColor: 'cadetblue', width: '50%', marginTop: '0.5%', borderRadius: '30px' }}>
                <h1>React Multi Step Form</h1>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '25px' }}>

                        <div style={{ width: '100%' }}>
                            <fieldset className="form-group border p-3" style={{ height: 'auto' }}>
                                <legend className="w-auto px-2">Address Details</legend>
                                {
                                    data.map((item, index) => {
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
                                <Button onClick={back} variant="dark" style={{ marginRight: '10px' }}>Back</Button>
                                <Button onClick={next} variant="dark">Next</Button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};
export default Step4;