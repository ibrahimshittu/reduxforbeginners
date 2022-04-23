import { updateFailure, updateSuccess, updateStart } from "./userSlice";
import axios from "axios"

const updateUser = async (user, dispatch) => {
    dispatch(updateStart());
    try {
        const res = await axios.post("https://picture-upload.herokuapp.com/api/v1/user/signup/", {"email": "shittu22@gmail.com",
    "password": "shittu@gmail.com"});
        console.log(res.data)

        dispatch(updateSuccess(res.data));
    } catch (error) {
        dispatch(updateFailure(error));
    }
}

export default updateUser;