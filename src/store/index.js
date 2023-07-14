import { configureStore } from "@reduxjs/toolkit";
import listingSlices from "./slices/listing.slices";
import uploadDocSlices from "./slices/uploadDoc.slices";

export const store = configureStore({

    reducer: {
        listing: listingSlices,
        uploadDoc: uploadDocSlices
    }
})