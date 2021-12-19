import React from "react";
import { usePopularPeople } from "../../../../services/hooks/queryHooks";
import Loader from "../../../Shared/Loader/Loader";
import ProfileTile from "../../../Shared/ProfileTile/ProfileTile";
import ExploreBtn from "../ExploreBtn";

function TrendingPeople() {
  const { data, isLoading } = usePopularPeople();
  return (
    <>
      <p className="fw-bold text-danger">Happening Stars</p>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="home-section">
          {data.data.results.map((person) => (
            <ProfileTile profile={person} key={person.id} />
          ))}
          <ExploreBtn linkTo="people" />
        </div>
      )}
    </>
  );
}

export default TrendingPeople;
