import Navbar from "./components/Navbar";
import Herobox from "./components/Herobox";
import Card from "./components/Card";
import "./App.css";
import data from "./data";
export default function App() {
  const Ncards = data.map((x) => {
    return <Card key={x.id} {...x} />;
  });
  return (
    <div className="Page">
      <Navbar />
      <Herobox />
      <section className="cards-list">{Ncards}</section>
    </div>
  );
}
