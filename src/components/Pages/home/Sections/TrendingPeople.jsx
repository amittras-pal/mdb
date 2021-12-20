import React from "react";
import { usePopularPeople } from "../../../../services/hooks/queryHooks";
import Loader from "../../../Shared/Loader/Loader";
import ProfileTile from "../../../Shared/ProfileTile/ProfileTile";
import ExploreBtn from "../ExploreBtn";

function TrendingPeople() {
  const { data, isLoading } = usePopularPeople();
  return (
    <>
      <div className="d-flex w-100 justify-content-between align-items-center mb-3">
        <p className="fw-bold text-danger mb-0">Happening Stars</p>
        <ExploreBtn linkTo="people" />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="home-section">
          {data.data.results.map((person) => (
            <ProfileTile profile={person} key={person.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default TrendingPeople;
