import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        documentname: "",
        documentfile: ""
    }
]
const uploadDocSlice = createSlice({
    name: "uploadDocSlice",
    initialState,
    reducers: {
        addMoreDocument(state, action) {
            state.push(action.payload)
        },

        addDocumentValue(state, action) {
            // state.map((item, index) => {
            //     if (index === action.payload[1]) {
            //         state.splice(index, 1, action.payload[0])
            //     }
            // })



            state[action.payload[1]].documentname = action.payload[0]
        },

        addInputFileValue(state, action) {
            state[action.payload[1]].documentfile = action.payload[0]
        },

        addDocError(state, action) {

            if (action.payload[1] === false) {
                state[action.payload[0]].docNameError = "Please Select Document Name"
            } else {
                state[action.payload].docNameError = ""
            }
        },

        addInputFileError(state, action) {
            if (action.payload[1] === false) {
                state[action.payload[0]].fileError = "Invalid Document"
            } else if (action.payload[1] === true) {
                state[action.payload[0]].fileError = ""
            } else {
                state[action.payload].fileError = "Please Select File"
            }
        },

        imgChange(state, action) {
            state.map((item, index) => {
                if (index == action.payload) {
                    state[action.payload].documentfile = ""
                }
            })
        },

        removeAllDataFromState(state, action) {
            state.length = 0
            const obj = {
                documentname: "",
                documentfile: ""
            }
            state.push(obj)
        },

        setAllDocumentData(state, action) {
            state.length = 0
            const payload = action.payload
            payload.map((item) => {
                state.push(item)
            })
        }

    }
})

export default uploadDocSlice.reducer
export const { addMoreDocument, setAllDocumentData, imgChange, removeAllDataFromState, addDocumentValue, addDocError, addInputFileValue, addInputFileError } = uploadDocSlice.actions