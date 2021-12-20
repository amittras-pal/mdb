import React from "react";
import { Link } from "react-router-dom";
import { useApiConfiguration } from "../../../services/hooks/queryHooks";
import placeholder from "../../../resources/images/img-placeholder-v.png";
import "./ProfileTile.scss";

function ProfileTile({ profile, showCharacter }) {
  const { data: configData } = useApiConfiguration();
  return (
    <Link to={`/people/view/${profile.id}`} className="profile-tile">
      <div className="profile-img">
        {profile.profile_path ? (
          <img
            src={`${configData?.data?.images.secure_base_url}/w185${profile.profile_path}`}
            alt=""
          />
        ) : (
          <img src={placeholder} alt="" />
        )}
      </div>
      <div className="profile-info">
        <p className="fw-bold mb-1">{profile.name}</p>
        {!showCharacter && (
          <p className="small mb-2">{profile.known_for_department}</p>
        )}
        {showCharacter && <p className="small mb-2">{profile.character}</p>}
      </div>
    </Link>
  );
}

export default ProfileTile;
