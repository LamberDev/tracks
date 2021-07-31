import tracker from "../api/tracker";
import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) =>  {
    return async ({ email, password}) => {
        try {
            const response = await tracker.post('/signup', { email, password });
            console.log(response.data);
        } catch(err) {
            console.log(err.response.data);
        }
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {signup},
    {isSignedIn: false}
)