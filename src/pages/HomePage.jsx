import React from "react";
import FeatureCard from "../components/FeatureCard";

const HomePage = () => {
  const features = [
    {
      title: "소개",
      description: "제 소개입니다.",
    },
    {
      title: "프로젝트",
      description: "제가 만든 프로젝트들 입니다.",
    },
    {
      title: "연락처",
      description: "저에게 연락하는 방법입니다.",
    },
    {
      title: "여러분이 원하는",
      description: "항목을 새로 만들어 보세요.",
    },
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <h2>안녕하세요, 저는 <span className="highlight">이서준</span>입니다 👋</h2>
        <p className="hero-subtitle">동국대학교 정보통신공학과 백엔드 개발자 지망생입니다.</p>
        <p className="hero-desc">이 포트폴리오는 React로 제작되었습니다. 아래 메뉴에서 제 소개, 프로젝트, 연락처를 확인하세요.</p>
      </div>
      <div className="features">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
