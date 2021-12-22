import React from "react";
import { Link } from "react-router-dom";
import Image from "../Image/Image";
import "./ProfileTile.scss";

function ProfileTile({ profile, showCharacter }) {
  return (
    <Link to={`/people/view/${profile.id}`} className="profile-tile">
      <div className="profile-img">
        <Image
          size="w185"
          imageType="profile"
          imagePath={profile.profile_path}
        />
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
