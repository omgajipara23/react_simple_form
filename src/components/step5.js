import React from "react";
import Button from 'react-bootstrap/Button';

const Step5 = (props) => {
    const { data, handleinput, next, back, addDocument } = props;
    return (
        <form>
            <div className="container py-5" style={{ backgroundColor: 'cadetblue', width: '50%', marginTop: '0.5%', borderRadius: '30px' }}>
                <h1>React Multi Step Form</h1>
                <div style={{ width: '100%' }}>
                    <fieldset className="form-group border p-3" style={{ height: '100%' }}>
                        <legend className="w-auto px-2">Upload Documents</legend>

                        {
                            data.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div style={{ display: 'flex' }} >
                                            <label>Select Document:</label>
                                            <div className="form-check form-check-inline">
                                                <select className="custom-select" name='documentname'>

                                                    <option value="2019">Adhar Card</option>
                                                    <option value="2020">Passbook</option>
                                                    <option value="2021">Leaving Certificate</option>
                                                </select>
                                            </div>

                                            <div>
                                                <input type="file" name="documentfile"></input>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <Button variant="dark" style={{ marginBottom: '10px' }} onClick={addDocument} >
                            Add More
                        </Button>
                        <br></br>
                        <Button onClick={back} variant="dark" style={{ marginRight: '10px' }}>Back</Button>
                        <Button onClick={next} variant="success" type="submit" >Submit</Button>

                    </fieldset>


                </div>
            </div >
        </form >
    );
};
export default Step5;