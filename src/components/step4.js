import React from "react";
import Button from 'react-bootstrap/Button';

const Step4 = (props) => {
    const { data, next, back, addAddress, removeAddress, handleaddress } = props;
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
                                                    <input type="text" value={item.area} className="form-control" placeholder='Area' name='area' onChange={(e) => handleaddress(e, index)} />
                                                </div>
                                                {
                                                    item.areacheck ? <p style={{ color: 'red' }}>{item.areacheck}</p> : null
                                                }
                                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                                    <input type="text" value={item.streetname} className="form-control" placeholder='Street Name' name='streetname' onChange={(e) => handleaddress(e, index)} />
                                                </div>
                                                {
                                                    item.streetnamecheck ? <p style={{ color: 'red' }}>{item.streetnamecheck}</p> : null
                                                }
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <div className="form-group" style={{ marginBottom: '15px', width: '49%' }}>
                                                        <input type="text" className="form-control" placeholder='Landmark' name='landmark' value={item.landmark} onChange={(e) => handleaddress(e, index)} />
                                                    </div>
                                                    {
                                                        item.landmarkcheck ? <p style={{ color: 'red' }}>{item.landmarkcheck}</p> : null
                                                    }

                                                    <div className="form-group" style={{ marginBottom: '15px', width: '49%' }}>
                                                        <input type="number" className="form-control" placeholder='Zipcode' name='zipcode' value={item.zipcode} onChange={(e) => handleaddress(e, index)} />
                                                    </div>
                                                    {
                                                        item.zipcodecheck ? <p style={{ color: 'red' }}>{item.zipcodecheck}</p> : null
                                                    }
                                                </div>

                                                <div style={{ marginBottom: '10px', borderBottom: '1px solid', paddingBottom: '15px' }}>
                                                    <div style={{ display: 'flex' }}>

                                                        <label style={{ marginLeft: '14px' }}>City:</label>
                                                        <div className="form-check form-check-inline">
                                                            <select className="custom-select" value={item.city} name='city' onChange={(e) => handleaddress(e, index)}>
                                                                <option value="">City</option>
                                                                <option value="rajkot">Rajkot</option>
                                                                <option value="jamnagar">Jamnagar</option>
                                                                <option value="ahemdabad">Ahmedabad</option>
                                                                <option value="surat">Surat</option>
                                                            </select>
                                                            {
                                                                item.citycheck ? <p style={{ color: 'red' }}>{item.citycheck}</p> : null
                                                            }
                                                        </div>


                                                        <label style={{ marginLeft: '14px' }}>State:</label>
                                                        <div className="form-check form-check-inline">
                                                            <select className="custom-select" value={item.state} name='state' onChange={(e) => handleaddress(e, index)}>
                                                                <option value="2019">State</option>
                                                                <option value="Delhi">Delhi</option>
                                                                <option value="Punjab">Punjab</option>
                                                                <option value="gujarat">Gujarat</option>
                                                                <option value="Bihar">Bihar</option>
                                                            </select>
                                                            {
                                                                item.statecheck ? <p style={{ color: 'red' }}>{item.statecheck}</p> : null
                                                            }
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