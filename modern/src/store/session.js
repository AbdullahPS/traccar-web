import { createSlice } from '@reduxjs/toolkit';
import { supportedLanguages } from '../common/localization';
import { saveState } from '../common/localization';

const { reducer, actions } = createSlice({
  name: 'session',
  initialState: {
    server: null,
    user: null,
    language:'en'
  },
  reducers: {
    updateServer(state, action) {
      state.server = action.payload;
    },
    updateUser(state, action) {
      state.user = action.payload;
    },
    updateLanguege(state,action){

        saveState(supportedLanguages[action.payload]);
        ////console.log(t(`userEmail`)+'  ' +action.payload)
       state.language=supportedLanguages[action.payload].data;

    }
  },
});

export { actions as sessionActions };
export { reducer as sessionReducer };
