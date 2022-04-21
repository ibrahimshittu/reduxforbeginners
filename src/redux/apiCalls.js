import { updateFailure, updateSuccess, updateStart } from "./userSlice";

const updateUser = async (dispatch, userInfo) => {
    dispatch(updateStart());
    try {
        const response = await fetch("https://picture-upload.herokuapp.com/api/v1/user/signup/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
        });
        const data = await response.json();
        dispatch(updateSuccess(data));
    } catch (error) {
        dispatch(updateFailure(error));
    }
}

export default updateUser;