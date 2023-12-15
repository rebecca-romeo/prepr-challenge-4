import IndividualLabCard from "./labs/IndividualLabCard";
import IndividualChallengeCard from "./challenges/IndividualChallengeCard";
import IndividualResourceCard from "./resources/IndividualResourceCard";
import PagesNav from './navigation/PagesNav';
import { useState } from "react";

function Tabs() {
  const [toggleTabsState, setToggleTabsState] = useState("labs");

  const toggleTab = (currentTab) => {
    setToggleTabsState(currentTab)
  }

  return (
    <div className="tabsContainer poppins bold">

      <div className="tabsGroup">
        <div
          className={toggleTabsState === "labs" ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab("labs")}
        > Labs
        </div>

        <div
          className={toggleTabsState === "challenges" ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab("challenges")}
        >Challenges
        </div>

        <div
          className={toggleTabsState === "resources" ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab("resources")}
        >Resources
        </div>

        <div
          className={toggleTabsState === "projects" ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab("projects")}
        >Projects
        </div>

      </div>

      <PagesNav />

      <div className="contentTabs">

        <div
          className={toggleTabsState === "labs" ? "content active-content" : "content"}
        >
          <IndividualLabCard />
          <IndividualLabCard />
        </div>

        <div
          className={toggleTabsState === "challenges" ? "content active-content" : "content"}
        >
          <IndividualChallengeCard />
          <IndividualChallengeCard />
        </div>

        <div
          className={toggleTabsState === "resources" ? "content active-content" : "content"}
        >
          <IndividualResourceCard />
          <IndividualResourceCard />
        </div>

        <div
          className={toggleTabsState === "projects" ? "content active-content" : "content"}
        ></div>


      </div>

    </div>
  )
}

export default Tabs;