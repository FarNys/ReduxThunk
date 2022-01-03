import React, { useEffect } from "react";
import { getTeams } from "../actions/teamActions";
import { useDispatch, useSelector } from "react-redux";
import SingleMatch from "../components/SingleMatch";
const TeamsPage = () => {
  const dispatch = useDispatch();
  const teamsData = useSelector((state) => state.team.matches);
  const countData = useSelector((state) => state.team.count);
  useEffect(() => {
    dispatch(getTeams());
    // console.log(teamsData);
  }, [dispatch]);

  return (
    <div className="teamsPage_container">
      TeamPageContainer
      {teamsData !== null ? (
        <div className="match_container_box">
          {teamsData.slice(0, 10).map((el, id) => (
            <SingleMatch el={el} key={id} />
          ))}
        </div>
      ) : (
        <div>Loading . . .</div>
      )}{" "}
      <h1>End Of Line One</h1>
      {countData}
    </div>
  );
};

export default TeamsPage;
