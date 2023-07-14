import { useContext, useState } from 'react';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Step5 from './step5';
import Step6 from './step6';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addListingData, editListingData } from '../store/slices/listing.slices';
import { addDocError, addDocumentValue, addInputFileError, addInputFileValue, addMoreDocument } from '../store/slices/uploadDoc.slices';

function BasicForm(props) {
    const { id } = useParams();
    let { isView } = props

    let listingData = useSelector((state) => state.listing)

    let uploadDocState = useSelector((state) => state.uploadDoc)
    console.log(uploadDocState, "redux state");


    const [error, setError] = useState({})

    const dispatch = useDispatch();

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
    })

    const [flag, setFlag] = useState(true)

    const [completed, setCompleted] = useState(false)

    const [document, setDocument] = useState([{
        documentname: "",
        documentfile: "",
    }
    ])

    // const [demoState, setDemoState] = useState([{}])

    // console.log(demoState, "demo state");

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

    const [formSub, setFormSub] = useState(false)

    useEffect(() => {


        if (id != undefined) {
            const getAllDataFromLocal = [...listingData]
            if (getAllDataFromLocal.length > 0) {
                const data = getAllDataFromLocal.filter(ele => ele[4].id == id)
                setValues(data[0][0].basicDetails)
                setEducation(data[0][1].allEducation)
                setAddress(data[0][2].finalAddress)
                setDocument(data[0][3].allDocument)
            }
        }
    }, [])

    useEffect(() => {
        if (completed === true && flag === true) {
            console.log({ completed, flag });
            setCurrentStep(6)
        }
    }, [completed])

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

        let demo = event.target.name.split('-')
        let elementName = demo[0]

        newform[index] = {
            ...newform[index],
            [elementName]: event.target.value

        }
        setEducation(newform)
    }

    function handleaddress(event, index) {
        let newAddress = [...address]
        newAddress[index] = {
            ...newAddress[index],
            [event.target.name]: event.target.value
        }
        // newAddress[index][event.target.name] = event.target.value
        setAddress(newAddress)
    }

    function fileValidation(event, index) {
        dispatch(addDocumentValue([event.target.value, index]))
    }

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
            reader.readAsDataURL(file);
        });
    };

    async function demo(event, index) {

        // let test = [...document]

        // test[index][event.target.name] = baseImage
        // setDocument(test)
        const file = event.target.files[0]
        const baseImage = await getBase64(file)
        dispatch(addInputFileValue([baseImage, index]))
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
            case 3:
                fieldError = Step3Validation()
                break;
            case 4:
                fieldError = Step4Validation()
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

    }

    const back = () => {
        setError({})
        setCurrentStep(currentStep - 1);
    }

    function handleinput(event) {
        const newobj = { ...values, [event.target.name]: event.target.value }
        setValues(newobj)
    }

    useEffect(() => {



        console.log({ formSub });
        function step5Validation() {
            console.log({ formSub });
            if (formSub) {
                console.log({ uploadDocState });
                const cloneDoc = [...uploadDocState]
                const cloneLength = cloneDoc.length
                cloneDoc.map((item, index) => {
                    console.log("asgasdfasghdjhasdjhfasd", item);
                    console.log(item.fileerror, item.documentnameerror);
                    if (item.docNameError || item.fileError) {
                        setFlag(false)
                        console.log("=====");
                    }
                    if (index + 1 == cloneLength) {
                        setCompleted(true)
                    }

                })
            }
        }

        step5Validation()


    }, [formSub])




    function formSubmit(e) {

        let flag = true

        e.preventDefault()

        uploadDocState.map((item, index) => {


            if (item.documentname == '') {

                console.log(" in ifff");
                dispatch(addDocError([index, false]))

            } else {
                console.log("in else");
                dispatch(addDocError(index))
            }

            if (item.documentfile.length > 0) {

                var str = item.documentfile[0];
                var patternArr = ['data:image/jpeg', 'data:image/png'];

                function contains(target, pattern) {
                    var value = 0;
                    pattern.forEach(function (word) {
                        value = value + target.includes(word);
                    });
                    return (value === 1)
                }

                const fileIsValidOrNot = contains(str, patternArr)

                if (fileIsValidOrNot === false) {

                    dispatch(addInputFileError([index, false]))
                }
                else {

                    dispatch(addInputFileError([index, true]))
                }
            } else {
                dispatch(addInputFileError(index))
            }
        })



        // const cloneDoc = [...uploadDocState]
        // const cloneLength = cloneDoc.length
        // cloneDoc.map((item, index) => {

        //     if (item.fileerror || item.documentnameerror) {
        //         setFlag(false)
        //     }
        //     if (index + 1 == cloneLength) {
        //         setCompleted(true)
        //     }

        // })

        // if (flag) {
        //     // setCurrentStep(6)
        // }


        let allFormData = [{ basicDetails: values }, { allEducation: education }, { finalAddress: address }, { allDocument: document }]




        if (listingData.length == 0) {

            allFormData.push({ id: 1 })
            dispatch(addListingData(allFormData))

        } else {

            if (id) {
                allFormData.push({ id: id })
                dispatch(editListingData(allFormData))
            } else {
                const id = listingData.length
                const updateId = id + 1
                allFormData.push({ id: updateId })
                dispatch(addListingData(allFormData))

            }

        }

        setFormSub(true)

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
        // const docAdd = [...uploadDocState, newDoc]
        // setDocument(docAdd)
        dispatch(addMoreDocument(newDoc))

    }

    function step1Validation(values) {
        const error = {}
        // if (values.firstname === "") {
        //     error.firstname = " please enter firstname"
        // }
        // else if (values.firstname.match(/\d+/g)) {
        //     error.firstname = "please Enter only char"
        // }
        // else if (values.firstname.length < 2) {
        //     error.firstname = "please Enter atleast 2 char"
        // }
        // if (values.lastname === "") {
        //     error.lastname = " please enter lastname"
        // }
        // else if (values.lastname.match(/\d+/g)) {
        //     error.lastname = "please Enter only char"
        // }
        // else if (values.lastname.length < 2) {
        //     error.lastname = "please Enter atleast 2 char"
        // }
        // const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // if (values.email === "") {
        //     error.email = "Please enter email"
        // } else if (!values.email.match(mailformat)) {
        //     error.email = "Please enter valid email"
        // }
        // if (values.number === "") {
        //     error.number = "Please enter the number"
        // } else if (values.number.length < 10 || values.number.length > 10) {
        //     error.number = "Please enter valid number"
        // }
        // if (values.gender === "") {
        //     error.gender = "Please fill gender"
        // }
        return error
    }

    function Step2Validation(values) {
        const error = {}
        // if (values.bankname === "") {
        //     error.bankname = "Please enter bank name"
        // } else if (values.bankname.match(/\d+/g)) {
        //     error.bankname = "please Enter only char"
        // }


        // const IFSCFormate = /^[A-Z]{4}0[A-Z0-9]{6}$/
        // if (values.ifsc === "") {
        //     error.ifsc = "Please enter IFSC code "
        // } else if (!values.ifsc.match(IFSCFormate)) {
        //     error.ifsc = "Please enter valid IFSC code"
        // }

        // if (values.branch === "") {
        //     error.branch = "Please enter branch name"
        // } else if (values.branch.match(/\d+/g)) {
        //     error.branch = "please Enter only char"
        // }


        // const accountFormate = /^[0-9]{9,18}$”/
        // if (values.accountnumber === "") {
        //     error.accountnumber = "Please enter account number"
        // } else if (values.accountnumber.match(accountFormate)) {
        //     error.accountnumber = "Please enter valid account number"
        // }

        return error
    }

    function Step3Validation() {
        const error = {}

        // const data = [...education]
        // for (let i = 0; i < data.length; i++) {

        //     const boardnameString = data[i].boardname.toString()


        //     if (data[i].boardname === "") {
        //         error.boardname = "Enter board name"
        //         data[i] = {
        //             ...data[i],
        //             boradnamecheck: "Enter board name"
        //         }
        //         // data[i].boradnamecheck = "Enter board name"
        //     }
        //     else if (boardnameString.match(/\d+/g)) {
        //         error.boardname = "please Enter only char"
        //         data[i] = {
        //             ...data[i],
        //             boradnamecheck: "please Enter only char"
        //         }
        //         // data[i].boradnamecheck = "please Enter only char"
        //     } else {
        //         data[i] = {
        //             ...data[i],
        //             boradnamecheck: ""
        //         }
        //         // data[i].boradnamecheck = ""
        //     }

        //     const coursenameString = data[i].coursename.toString()

        //     if (data[i].coursename === "") {
        //         error.coursename = "Enter course name"
        //         data[i] = {
        //             ...data[i],
        //             coursenamecheck: "Enter course name"
        //         }
        //         // data[i].coursenamecheck = "Enter course name"
        //     } else if (coursenameString.match(/\d+/g)) {
        //         error.coursename = "please Enter only char"
        //         data[i] = {
        //             ...data[i],
        //             coursenamecheck: "please Enter only char"
        //         }
        //         // data[i].coursenamecheck = "please Enter only char"
        //     }
        //     else {
        //         data[i] = {
        //             ...data[i],
        //             coursenamecheck: ""
        //         }
        //         // data[i].coursenamecheck = ""
        //     }

        //     const scroeString = Number(data[i].score)


        //     if (data[i].score === "") {
        //         error.score = "Enter score"
        //         data[i] = {
        //             ...data[i],
        //             scorecheck: "Enter score"
        //         }
        //         // data[i].scorecheck = "Enter score"
        //     } else if (scroeString > 100 || scroeString < 10) {
        //         error.score = "Enter valid score"
        //         data[i] = {
        //             ...data[i],
        //             scorecheck: "Enter valid score"
        //         }
        //         // data[i].scorecheck = "Enter valid score"
        //     } else {
        //         data[i] = {
        //             ...data[i],
        //             scorecheck: ""
        //         }
        //         // data[i].scorecheck = ""
        //     }

        //     if (data[i].passingyear === "") {
        //         error.passingyear = "Enter passing year"
        //         data[i] = {
        //             ...data[i],
        //             passingyearcheck: "Enter passing year"
        //         }
        //         // data[i].passingyearcheck = "Enter passing year"
        //     } else {
        //         data[i] = {
        //             ...data[i],
        //             passingyearcheck: ""
        //         }
        //         // data[i].passingyearcheck = ""
        //     }

        //     if (data[i].language === "") {
        //         error.language = "Fill language"
        //         data[i] = {
        //             ...data[i],
        //             languagecheck: "Fill language"
        //         }
        //         // data[i].languagecheck = "Fill language"
        //     } else {
        //         data[i] = {
        //             ...data[i],
        //             languagecheck: ""
        //         }
        //         // data[i].languagecheck = ""
        //     }

        //     if (data[i].result === "") {
        //         error.result = "Please upload result"
        //         data[i] = {
        //             ...data[i],
        //             resultcheck: "Please upload result"
        //         }
        //         // data[i].resultcheck = "Please upload result"
        //     } else {
        //         data[i] = {
        //             ...data[i],
        //             resultcheck: ""
        //         }
        //         // data[i].resultcheck = ""
        //     }

        // }
        // setEducation(data)
        return error
    }

    function Step4Validation() {
        const error = {}

        // const alphaNumberic = /^[A-Za-z0-9]+$/;

        // const data = [...address]

        // for (let i = 0; i < data.length; i++) {

        //     if (data[i].area == "") {
        //         error.area = "Please enter area"
        //         data[i] = {
        //             ...data[i],
        //             areacheck: "Please enter area"
        //         }
        //         // data[i].areacheck = "Please enter area"
        //     } else if (!(data[i].area.match(alphaNumberic))) {
        //         error.area = "Enter valid address"
        //         data[i] = {
        //             ...data[i],
        //             areacheck: "Enter valid address"
        //         }
        //         // data[i].areacheck = "Enter valid address"
        //     }
        //     else {
        //         data[i] = {
        //             ...data[i],
        //             areacheck: ""
        //         }
        //         // data[i].areacheck = ""
        //     }

        //     if (data[i].streetname == "") {
        //         error.streetname = "Please enter streat name"
        //         data[i] = {
        //             ...data[i],
        //             streetnamecheck: "Please enter streat name"
        //         }
        //         // data[i].streetnamecheck = "Please enter streat name"
        //     } else if (!(data[i].streetname[0].match(alphaNumberic))) {
        //         error.streetname = "Enter valid streat name"
        //         data[i] = {
        //             ...data[i],
        //             streetnamecheck: "Enter valid streat name"
        //         }
        //         // data[i].streetnamecheck = "Enter valid streat name"
        //     }
        //     else {
        //         data[i] = {
        //             ...data[i],
        //             streetnamecheck: ""
        //         }
        //         // data[i].streetnamecheck = ""
        //     }

        //     if (data[i].landmark == "") {
        //         error.landmark = "Please enter landmark"
        //         data[i] = {
        //             ...data[i],
        //             landmarkcheck: "Please enter landmark"
        //         }
        //         // data[i].landmarkcheck = "Please enter landmark"
        //     } else if (!(data[i].landmark[0].match(alphaNumberic))) {
        //         error.landmark = "Enter valid landmark"
        //         data[i] = {
        //             ...data[i],
        //             landmarkcheck: "Enter valid landmark"
        //         }
        //         // data[i].landmarkcheck = "Enter valid landmark"
        //     }
        //     else {
        //         data[i] = {
        //             ...data[i],
        //             landmarkcheck: ""
        //         }
        //         // data[i].landmarkcheck = ""
        //     }

        //     let regex = new RegExp(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/);

        //     const zipcodeNumber = data[i].zipcode.toString()
        //     if (data[i].zipcode === "") {
        //         error.zipcode = "Please enter zipcode"
        //         data[i] = {
        //             ...data[i],
        //             zipcodecheck: "Please enter zipcode"
        //         }
        //         // data[i].zipcodecheck = "Please enter zipcode"
        //     } else if (regex.test(zipcodeNumber) == false) {
        //         error.zipcode = "Enter valid zipcode"
        //         data[i] = {
        //             ...data[i],
        //             zipcodecheck: "Enter valid zipcode"
        //         }
        //         // data[i].zipcodecheck = "Enter valid zipcode"
        //     }
        //     else {
        //         data[i] = {
        //             ...data[i],
        //             zipcodecheck: ""
        //         }
        //         // data[i].zipcodecheck = ""
        //     }

        //     if (data[i].city === "") {
        //         error.city = "Please select city"
        //         data[i] = {
        //             ...data[i],
        //             citycheck: "Please select city"
        //         }
        //         // data[i].citycheck = "Please select city"
        //     } else {
        //         data[i] = {
        //             ...data[i],
        //             citycheck: ""
        //         }
        //         // data[i].citycheck = ""
        //     }

        //     if (data[i].state === "") {
        //         error.state = "Please select state"
        //         data[i] = {
        //             ...data[i],
        //             statecheck: "Please select state"
        //         }
        //         // data[i].statecheck = "Please select state"
        //     } else {
        //         data[i] = {
        //             ...data[i],
        //             statecheck: ""
        //         }
        //         data[i].statecheck = ""
        //     }
        // }

        // setAddress(data)
        return error

    }


    function changeImage(index) {
        const updateDocument = [...document]
        updateDocument[index] = {
            ...updateDocument[index],
            documentfile: ""
        }
        setDocument(updateDocument)

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
                    viewdisable={isView}
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
                    viewdisable={isView}
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
                    viewdisable={isView}
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
                    handleaddress={handleaddress}
                    viewdisable={isView}
                />
            );
        case 5:
            return (
                <Step5
                    data={uploadDocState}
                    addDocument={addDocument}
                    fileValidation={fileValidation}
                    demo={demo}
                    next={formSubmit}
                    back={back}
                    changeImage={changeImage}
                    viewdisable={isView}
                />
            );
        case 6:
            return (
                <Step6 />
            )
        default:
            return
    }
}

export default BasicForm