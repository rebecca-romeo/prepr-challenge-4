import Filters from "./main/navigation/Filters";
import Tabs from "./main/Tabs";


function Main() {
  return (
    <main>
      <section className="main wrapper">

        <div className="mainContainer1">
        <Filters />
        </div>

        <div className="mainContainer2">
          <Tabs />
        </div>
      </section>


    </main>
  );
}

export default Main;