import React from "react";
import Button from 'react-bootstrap/Button';


const Step3 = (props) => {
    const { data, next, back, addeducation, removefield, handleaddremove, fileHandel, viewdisable } = props;
    return (
        <form>
            <div className="container py-5" style={{ backgroundColor: 'cadetblue', width: '50%', marginTop: '0.5%', borderRadius: '30px' }}>
                <h1>React Multi Step Form</h1>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '25px' }}>

                        <div style={{ width: '100%' }}>
                            <fieldset className="form-group border p-3" style={{ height: 'auto' }}>
                                <legend className="w-auto px-2">Education Details</legend>
                                {
                                    data.map((item, index) => {
                                        return (
                                            <div style={{ marginBottom: '20px' }} key={index}>
                                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                                    <input type="text" className="form-control" placeholder='Name Of Board' name='boardname' value={item.boardname} onChange={(e) => handleaddremove(e, index)} disabled={viewdisable ? true : false} />
                                                </div>
                                                {
                                                    item.boradnamecheck ? <p style={{ color: 'red' }}>{item.boradnamecheck}</p> : null
                                                }
                                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                                    <input type="text" className="form-control" placeholder='Name Of Course' name='coursename' value={item.coursename} onChange={(e) => handleaddremove(e, index)} disabled={viewdisable ? true : false} />
                                                </div>
                                                {
                                                    item.coursenamecheck ? <p style={{ color: 'red' }}>{item.coursenamecheck}</p> : null
                                                }
                                                <div style={{ display: 'flex' }}>
                                                    <div className="form-group" style={{ marginBottom: '15px', width: '45%' }}>
                                                        <input type="text" className="form-control" placeholder='Score' name='score' value={item.score}
                                                            onChange={(e) => handleaddremove(e, index)} disabled={viewdisable ? true : false} />
                                                    </div>
                                                    {
                                                        item.scorecheck ? <p style={{ color: 'red' }}>{item.scorecheck}</p> : null
                                                    }

                                                    <div style={{ display: 'flex' }}>

                                                        <label style={{ marginLeft: '14px' }}>Passing Year:</label>
                                                        <div className="form-check form-check-inline">
                                                            <select className="custom-select" value={item.passingyear[0]} name='passingyear' onChange={(e) => handleaddremove(e, index)} disabled={viewdisable ? true : false}>
                                                                <option value="2019">Passing year</option>
                                                                <option value="2019">2019</option>
                                                                <option value="2020">2020</option>
                                                                <option value="2021">2021</option>
                                                                <option value="2022">2022</option>
                                                            </select>
                                                            {
                                                                item.passingyearcheck ? <p style={{ color: 'red' }}>{item.passingyearcheck}</p> : null
                                                            }
                                                        </div>

                                                    </div>
                                                </div>


                                                <div style={{ marginBottom: '10px' }}>
                                                    <label style={{ float: 'left' }}>Language Of Course:</label>
                                                    <div className="form-check form-check-inline">

                                                        <input className="form-check-input" type="radio" value="english" id='english' name={`language-${index}`} onChange={(e) => handleaddremove(e, index)} checked={(data[index].language[0] === "english") ? true : false} disabled={viewdisable ? true : false} />

                                                        <label className="form-check-label">English</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">

                                                        <input className="form-check-input" type="radio" value="hindi" id='hindi' name={`language-${index}`} onChange={(e) => handleaddremove(e, index)} checked={(data[index].language[0] === "hindi") ? true : false} disabled={viewdisable ? true : false} />

                                                        <label className="form-check-label">Hindi</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" value="gujarati" id='gujarati' name={`language-${index}`} onChange={(e) => handleaddremove(e, index)} checked={(data[index].language[0] === "gujarati") ? true : false} disabled={viewdisable ? true : false} />

                                                        <label className="form-check-label">Gujarati</label>
                                                    </div>
                                                </div>
                                                {
                                                    item.languagecheck ? <p style={{ color: 'red' }}>{item.languagecheck}</p> : null
                                                }

                                                <div className="form-group" style={{ marginBottom: '15px', borderBottom: "1px solid", paddingBottom: '15px' }}>
                                                    <label style={{ float: 'left' }}>Result:</label>
                                                    <input type='file' name='result' onChange={(e) => fileHandel(e, index)} disabled={viewdisable ? true : false}></input>

                                                    {index > 0 ? <Button variant="danger" onClick={() => removefield(index)}>
                                                        Delete
                                                    </Button> : null}
                                                    {
                                                        item.resultcheck ? <p style={{ color: 'red' }}>{item.resultcheck}</p> : null
                                                    }
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
export default Step3;