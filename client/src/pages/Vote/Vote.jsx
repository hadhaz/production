import { useEffect } from "react";

import EnterToken from "./EnterToken";
import VotingPage from "./VotingPage";

import { useSelector, useDispatch } from "react-redux";
import { setUserLogin } from "../../store/authSlice";
import Status from "./components/Status";

const Vote = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const token = localStorage?.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(setUserLogin());
    }
  }, [token, dispatch]);

  return (
    <>
      <Status />
      {user ? <VotingPage /> : <EnterToken />}
    </>
  );
};

export default Vote;
