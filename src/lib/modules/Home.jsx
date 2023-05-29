import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [edu, setEdu] = useState([]);
  const [count, setCount] = useState(0);
//   const [titles, setTitles] = useState([]);

//   const addTitleToSidebar = (title) => {
//     setTitles([...titles, title]);
//   };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setEdu(data));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8 col-span-12">
          {edu.map((education, index) => (
            <Card
              key={index}
              education={education}
              count={count}
              setCount={setCount}
            />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-12">
          <Sidebar count={count} />
          {/* <Card title="Card 1" addTitle={() => addTitleToSidebar("Card 1")} />
          <Card title="Card 2" addTitle={() => addTitleToSidebar("Card 2")} /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
