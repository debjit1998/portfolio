import Sidebar from "./Sidebar";
import Main from "./Main";

function Home() {
  return (
    <div className="container">
      <div className="row app__row">
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-9">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default Home;
