import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    [
        {
            "basicDetails": {
                "firstname": "zzzom",
                "lastname": "gajipara",
                "email": "omgajipara23@gmail.com",
                "number": "123456789",
                "gender": "male",
                "bankname": "",
                "ifsc": "",
                "branch": "",
                "accountnumber": ""
            }
        },
        {
            "allEducation": [
                {
                    "boardname": "",
                    "coursename": "",
                    "score": "",
                    "passingyear": "",
                    "language": "",
                    "result": ""
                }
            ]
        },
        {
            "finalAddress": [
                {
                    "area": "",
                    "streetname": "",
                    "landmark": "",
                    "zipcode": "",
                    "city": "",
                    "state": ""
                }
            ]
        },
        {
            "allDocument": [
                {
                    "documentname": [
                        "adharcard"
                    ],
                    "documentfile": [
                        "data:image/jpeg;base64,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"
                    ],
                    "documentnameerror": "",
                    "fileerror": ""
                }
            ]
        },
        {
            "id": 1
        }
    ],
    [
        {
            "basicDetails": {
                "firstname": "demo",
                "lastname": "lastname",
                "email": "demo@gmail.com",
                "number": "1234789",
                "gender": "female",
                "bankname": "",
                "ifsc": "",
                "branch": "",
                "accountnumber": ""
            }
        },
        {
            "allEducation": [
                {
                    "boardname": "",
                    "coursename": "",
                    "score": "",
                    "passingyear": "",
                    "language": "",
                    "result": ""
                }
            ]
        },
        {
            "finalAddress": [
                {
                    "area": "",
                    "streetname": "",
                    "landmark": "",
                    "zipcode": "",
                    "city": "",
                    "state": ""
                }
            ]
        },
        {
            "allDocument": [
                {
                    "documentname": [
                        "adharcard"
                    ],
                    "documentfile": [
                        "data:image/jpeg;base64,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"
                    ],
                    "documentnameerror": "",
                    "fileerror": ""
                }
            ]
        },
        {
            "id": 2
        }
    ]
]

const listingSlice = createSlice({
    name: "listing",
    initialState,
    reducers: {

        addListingData(state, action) {
            state.push(action.payload)
        },

        deleteListingData(state, action) {
            let indexToBeDeleted
            state.map((item, index) => {
                if (item[4].id == +action.payload) {
                    indexToBeDeleted = index
                }
            })
            state.splice(indexToBeDeleted, 1)
        },

        editListingData(state, action) {
            console.log(action.payload);
        }
    }
})

export default listingSlice.reducer
export const { addListingData, deleteListingData, editListingData } = listingSlice.actions