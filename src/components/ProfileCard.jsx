import React from "react";
import doraImage from "../assets/dora.jpg";

const ProfileCard = () => {
  return (
    <div className="profile">
      <img src={doraImage} alt="프로필" width="120" height="120" />
      <div className="profile-info">
        <h3>이서준 (Lee Seojun)</h3>
        <p>동국대학교 정보통신공학과 재학 중입니다.</p>
        <p>백엔드 개발에 관심이 많으며 꾸준히 성장하는 개발자를 목표로 하고 있습니다.</p>
      </div>
    </div>
  );
};

export default ProfileCard; 