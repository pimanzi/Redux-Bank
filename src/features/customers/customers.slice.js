import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullNames: '',
  nationalId: '',
  createdAt: '',
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullNames, nationalId) {
        return {
          payload: {
            fullNames,
            nationalId,
            createdAt: new Date().toISOString(),
          },
        };
      },

      reducer(state, action) {
        state.fullNames = action.payload.fullNames;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },

    updateCustomer(state, action) {
      state.fullNames = action.payload;
    },
  },
});

export default customerSlice.reducer;
export const { createCustomer, updateCustomer } = customerSlice.actions;

// export default function reducerCustomer(state = initialstateCustomer, action) {
//   switch (action.type) {
//     case 'customer/createCustomer':
//       return {
//         ...state,
//         fullNames: action.payload.fullNames,
//         nationalId: action.payload.nationalId,
//         createdAt: action.payload.createdAt,
//       };

//     case 'customer/updateCustomer':
//       return {
//         ...state,
//         fullNames: action.payload,
//       };

//     default:
//       return state;
//   }
// }
// export function createCustomer(fullNames, nationalId) {
//   return {
//     type: 'customer/createCustomer',
//     payload: { fullNames, nationalId, createdAt: new Date().toISOString() },
//   };
// }

// export function updateCustomer(fullNames) {
//   return {
//     type: 'customer/updateCustomer',
//     payload: fullNames,
//   };
// }
