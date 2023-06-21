import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Body from "./components/Body";

function App() {
  return (
    <div className="">
      <Header />
      <div className="flex ">
        <SideNav  />
        <Body />
      </div>
    </div>
  );
}

export default App;
