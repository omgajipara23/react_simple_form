import { useState } from 'react';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Step5 from './step5';
import Button from 'react-bootstrap/Button';

function BasicForm() {

    const [error, setError] = useState({})

    const [currentStep, setCurrentStep] = useState(1);
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

    const [document, setDocument] = useState([{
        documentname: "",
        documentfile: ""
    }
    ])

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

    function handleaddremove(event, index) {
        let newform = [...education]
        newform[index][event.target.name] = [event.target.value]

        setEducation(newform)
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

    const next = () => {
        var fieldError

        switch (currentStep) {
            case 1:
                fieldError = step1Validation(values)
                break;
            case 2:
                fieldError = Step2Validation(values)
                break;
            default:
                break;
        }

        var length = Object.keys(fieldError).length;
        if (length === 0) {
            setCurrentStep(currentStep + 1);
        } else {
            setError(fieldError)
        }
    };
    const back = () => {
        setError({})
        setCurrentStep(currentStep - 1);
    };

    function handleinput(event) {
        const newobj = { ...values, [event.target.name]: event.target.value }
        setValues(newobj)
    }

    function formSubmit(e) {
        e.preventDefault()
        // console.log(values);
    }

    function fileHandel(event, index) {
        let newform = [...education]
        const file = event.target.files[0]
        let setFile = newform.map((item, i) => {
            if (i === index) {
                return { ...item, result: file.name }
            } else {
                return { ...item }
            }
        })

        setEducation(setFile)
    }

    function addDocument() {
        const newDoc = {
            documentname: "",
            documentfile: ""
        }
        const docAdd = [...document, newDoc]
        setDocument(docAdd)
    }
    // console.log(education);

    function step1Validation(values) {
        const error = {}
        console.log(typeof (values.firstname, "++++++++++++++++++++++++++++++++++++++++++"));
        if (values.firstname === "") {
            error.firstname = " please enter firstname"
        }
        else if (values.firstname.match(/\d+/g)) {
            error.firstname = "please Enter only char"
        }
        else if (values.firstname.length < 2) {
            error.firstname = "please Enter atleast 2 char"
        }
        if (values.lastname === "") {
            error.lastname = " please enter lastname"
        }
        else if (values.lastname.match(/\d+/g)) {
            error.lastname = "please Enter only char"
        }
        else if (values.lastname.length < 2) {
            error.lastname = "please Enter atleast 2 char"
        }
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (values.email === "") {
            error.email = "Please enter email"
        } else if (!values.email.match(mailformat)) {
            error.email = "Please enter valid email"
        }
        if (values.number === "") {
            error.number = "Please enter the number"
        } else if (values.number.length < 10 || values.number.length > 10) {
            error.number = "Please enter valid number"
        }
        if (values.gender === "") {
            error.gender = "Please fill gender"
        }
        return error
    }


    function Step2Validation(values) {
        const error = {}

        if (values.bankname === "") {
            error.bankname = "Please enter bank name"
        } else if (values.bankname.match(/\d+/g)) {
            error.bankname = "please Enter only char"
        }


        const IFSCFormate = /^[A-Z]{4}0[A-Z0-9]{6}$/
        if (values.ifsc === "") {
            error.ifsc = "Please enter IFSC code "
        } else if (!values.ifsc.match(IFSCFormate)) {
            error.ifsc = "Please enter valid IFSC code"
        }

        if (values.branch === "") {
            error.branch = "Please enter branch name"
        } else if (values.branch.match(/\d+/g)) {
            error.branch = "please Enter only char"
        }


        const accountFormate = /^[0-9]{9,18}$”/
        if (values.accountnumber === "") {
            error.accountnumber = "Please enter account number"
        } else if (values.accountnumber.match(accountFormate)) {
            error.accountnumber = "Please enter valid account number"
        }

        return error
    }


    switch (currentStep) {
        case 1:
            return (
                <Step1
                    data={values}
                    formSubmit={formSubmit}
                    handleinput={handleinput}
                    error={error}
                    next={next}
                />
            );
        case 2:
            return (
                <Step2
                    data={values}
                    handleinput={handleinput}
                    next={next}
                    error={error}
                    back={back}
                />
            );
        case 3:
            return (
                <Step3
                    data={education}
                    addeducation={addeducation}
                    removefield={removefield}
                    handleinput={handleinput}
                    handleaddremove={handleaddremove}
                    fileHandel={fileHandel}
                    next={next}
                    back={back}
                />
            );
        case 4:
            return (
                <Step4
                    data={address}
                    addAddress={addAddress}
                    removeAddress={removeAddress}
                    handleinput={handleinput}
                    next={next}
                    back={back}
                />
            );
        case 5:
            return (
                <Step5
                    data={document}
                    addDocument={addDocument}
                    handleinput={handleinput}
                    next={next}
                    back={back}
                />
            );
        default:
            return
    }

    // return (
    //     <>
    //         <div className="container py-5" style={{ backgroundColor: 'cadetblue', width: '100%', marginTop: '0.5%', borderRadius: '30px' }}>
    //             <h1 style={{ marginBottom: '2rem' }}>React Basic Form</h1>


    //             <form onSubmit={formSubmit}>

    //                 <div style={{ display: 'flex', justifyContent: 'space-around' }}>






    //                 </div>






    //                 <div style={{ marginTop: '10px' }}>
    //                     <Button variant="success" type="submit" id='btnSubmit'>
    //                         Submit
    //                     </Button>
    //                 </div>
    //             </form>
    //         </div>
    //     </>
    // )
}

export default BasicForm