import React from "react";

const Header = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { key: "home", label: "홈" },
    { key: "about", label: "소개" },
    { key: "projects", label: "프로젝트" },
    { key: "contact", label: "연락처" },
  ];

  return (
    <header className="header">
      <h1>🧑‍💻 이서준의 포트폴리오</h1>
      <nav>
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setCurrentPage(item.key)}
            className={currentPage === item.key ? "nav-active" : ""}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
