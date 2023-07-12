import React from "react";
import Button from 'react-bootstrap/Button';
import { BackToListing } from "./backToListing";

const Step5 = (props) => {
    const { data, next, demo, back, addDocument, fileValidation, changeImage, viewdisable } = props;
    return (
        <div>
            <BackToListing />
            <form>
                <div className="container py-5" style={{ backgroundColor: 'cadetblue', width: '50%', marginTop: '0.5%', borderRadius: '30px' }}>
                    <h1>React Multi Step Form</h1>
                    <div style={{ width: '100%' }}>
                        <fieldset className="form-group border p-3" style={{ height: '100%' }}>
                            <legend className="w-auto px-2">Upload Documents</legend>
                            <div>
                                <p>File Must Be png or jpg</p>
                            </div>

                            {
                                data.map((item, index) => {
                                    return (
                                        <div key={index} style={{ borderBottom: '1px solid #403d3d', marginBottom: '15px' }}>
                                            <div style={{ display: 'flex' }} >
                                                <label>Select Document:</label>

                                                <div className="form-check form-check-inline">
                                                    <select className="custom-select" value={item.documentname} name='documentname' onChange={(e) => fileValidation(e, index)} disabled={viewdisable ? true : false}>
                                                        <option>Select Document</option>
                                                        <option value="adharcard">Adhar Card</option>
                                                        <option value="passbook">Passbook</option>
                                                        <option value="leavingcertificate">Leaving Certificate</option>
                                                    </select>
                                                    <div>
                                                        {
                                                            data[index].documentnameerror ? <p style={{ color: 'red' }}>{data[index].documentnameerror}</p> : null
                                                        }
                                                    </div>
                                                </div>

                                                <div>
                                                    {
                                                        item.documentfile ? <img src={item.documentfile[0]} style={{ height: '100px' }} /> : <input type="file" name="documentfile" onChange={(e) => demo(e, index)} disabled={viewdisable ? true : false}></input>
                                                    }

                                                    <Button onClick={() => changeImage(index)} disabled={viewdisable ? true : false}>Cancel</Button>

                                                    <div>
                                                        {
                                                            data[index].fileerror ? <p style={{ color: 'red' }}>{data[index].fileerror}</p> : null
                                                        }
                                                    </div>
                                                </div>


                                            </div>

                                        </div>
                                    )
                                })
                            }

                            <Button variant="dark" style={{ marginBottom: '10px' }} onClick={addDocument} disabled={viewdisable ? true : false}>
                                Add More
                            </Button>
                            <br></br>
                            <Button onClick={back} variant="dark" style={{ marginRight: '10px' }}>Back</Button>
                            <Button onClick={next} variant="success" type="submit" disabled={viewdisable ? true : false}>Submit</Button>

                        </fieldset>


                    </div>
                </div >
            </form >
        </div>
    );
};
export default Step5;