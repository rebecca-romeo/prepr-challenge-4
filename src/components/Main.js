import MainNav from "./main/navigation/MainNav";
import Filters from "./main/navigation/Filters";
import IndividualLabCard from "./main/labs/IndividualLabCard";
import IndividualChallengeCard from "./main/challenges/IndividualChallengeCard";
import PagesNav from "./main/navigation/PagesNav";


function Main() {
  return (
    <main>
      <MainNav />
      <PagesNav />
      <section className="test wrapper">

        <div className="testContainer1">
        <Filters />
        </div>

        <div className="testContainer2">
          {/* <IndividualLabCard />
          <IndividualLabCard /> */}
          <IndividualLabCard />
          <IndividualChallengeCard />
          <IndividualChallengeCard />
        </div>
      </section>


    </main>
  );
}

export default Main;