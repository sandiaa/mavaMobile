import axios from "../apis/baseURL";

export const findUser = async (number) => {
  var result = Boolean();
  await axios.get(`/userExist?number=${number}`).then(
    (res) => {
      result = res.data.userExist;
    },
    (err) => {
      result = false;
    }
  );
  return result;
};
