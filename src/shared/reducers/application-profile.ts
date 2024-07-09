import axios from 'axios';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { serializeAxiosError } from './reducer.utils';

const initialState = {
  inProduction: true,
};

export type ApplicationProfileState = Readonly<typeof initialState>;

export const getProfile = createAsyncThunk('applicationProfile/get_profile', async () => axios.get<any>('management/info'), {
  serializeError: serializeAxiosError,
});

export const ApplicationProfileSlice = createSlice({
  name: 'applicationProfile',
  initialState: initialState as ApplicationProfileState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.inProduction = data.activeProfiles.includes('prod');
    });
  },
});

// Reducer
export default ApplicationProfileSlice.reducer;