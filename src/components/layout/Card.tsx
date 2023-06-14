import { FormEvent, useState } from "react";
import { AiFillGithub } from "react-icons/ai";

type Props = {
  title: string;
};

const Card = ({ title }: Props) => {
  const [activeTab, setActiveTab] = useState("#tab1");
  const [activeLink, setActiveLink] = useState("desc");

  const handleLinkClick = (tab: string) => {
    setActiveLink(tab);
  };

  const handleTabClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    link: string
  ) => {
    e.preventDefault();
    const tabId = e.currentTarget?.getAttribute("href");
    setActiveTab(tabId as string);
    handleLinkClick(link);
  };

  return (
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className={`nav-item ${activeTab === "home" ? "active" : ""}`}>
            <a
              className="nav-link"
              href="#tab1"
              onClick={(e) => handleTabClick(e, "desc")}
            >
              Description
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#tab2" onClick={handleTabClick}>
              Stacks
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#tab3" onClick={handleTabClick}>
              Repo
            </a>
          </li>
        </ul>
      </div>

      {activeTab === "#tab1" && (
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            GitHub{" "}
            <i>
              <AiFillGithub />
            </i>
          </a>
        </div>
      )}
      {activeTab === "#tab2" && <div>Content of Tab 2</div>}
      {activeTab === "#tab3" && <div>Content of Tab 3</div>}
    </div>
  );
};

export default Card;
