const { createSlice, nanoid } = require('@reduxjs/toolkit');

const initialState = {
    users: []
}

const userSlice = createSlice({
    name:"addUserSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const data = {
                id: nanoid(),
                name: action.payload.name,
                lname: action.payload.lastName
            }
            state.users.push(data);
        },
        getUser: (state, action) => { 
            state.users.map((user) => user.id === action.payload.id ? data : user);
            console.log(state.users);
        },
        editUser: (state, action) => {
            const newdata = action.payload;
            console.log(newdata);
            for (let user of state.users) {
                if (user.id === newdata.id) {
                    user = newdata;
                }
            }
            console.log(state.users);
        },
        removeUser: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
        }
    }
});

export const { addUser, getUser, removeUser, editUser } = userSlice.actions;
export default userSlice.reducer;