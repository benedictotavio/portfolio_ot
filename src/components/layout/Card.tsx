import { useState } from "react";
import { AiFillGithub, AiFillChrome } from "react-icons/ai";
import Stacks, { SVGObject } from "./Stacks";

type Props = {
  title: string;
  secondBtn: boolean;
  linkSite?: string;
  linkGit: string;
  stacksIcon: SVGObject[];
};

const Card = ({ title, secondBtn, linkSite, stacksIcon, linkGit }: Props) => {
  const [activeTab, setActiveTab] = useState("#tab1");

  const handleTabClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const tabId = e.currentTarget?.getAttribute("href");
    setActiveTab(tabId as string);
  };

  return (
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className={`nav-item ${activeTab === "home" ? "active" : ""}`}>
            <a className="nav-link" href="#tab1" onClick={handleTabClick}>
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
          <a href={linkGit} target="_blank" className="btn btn-primary mx-2">
            GitHub{" "}
            <i>
              <AiFillGithub />
            </i>
          </a>
          {secondBtn && (
            <a
              href={linkSite}
              target="_blank"
              className="btn btn-secondary mx-2"
            >
              Site{" "}
              <i>
                <AiFillChrome />
              </i>
            </a>
          )}
        </div>
      )}
      {activeTab === "#tab2" && <Stacks arrStacks={stacksIcon} />}
      {activeTab === "#tab3" && <div>Content of Tab 3</div>}
    </div>
  );
};

export default Card;
