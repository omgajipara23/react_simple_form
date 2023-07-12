import { configureStore } from "@reduxjs/toolkit";
import listingSlices from "./slices/listing.slices";

export const store = configureStore({
    reducer: {
        listing: listingSlices
    }
})