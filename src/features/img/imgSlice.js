import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    imgs: [],
};

const imgSlice = createSlice({
    name: 'img',
    initialState,
    reducers: {
        setImgs: (state, action) => {
            state.imgs = action.payload;
        },
    },
});

export const {setImgs} = imgSlice.actions;

export const selectImgs = (state) => state.img.imgs;

export default imgSlice.reducer;
