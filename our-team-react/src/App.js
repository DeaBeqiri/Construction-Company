import { useState } from "react";

import foto1 from "./assets/foto1.jpg";
import foto13 from "./assets/foto13.jpg";
import foto3 from "./assets/foto3.jpg";
import foto4 from "./assets/foto4.jpg";
import foto5 from "./assets/foto5.jpg";
import foto12 from "./assets/foto12.jpg";
import foto11 from "./assets/foto11.jpg";
import foto8 from "./assets/foto8.jpg";
import foto9 from "./assets/foto9.jpg";
import foto10 from "./assets/foto10.jpg";

import Section from "./components/Secton";
import Footer from "./components/Footer";
import Card from "./components/Card";
import NavBarSection from "./components/NavBar";
import ApplySection from "./components/ApplySection";

import "./App.css";

var desc1 =
  " Our success is built on the strength of our people. We are a dedicated team of construction professionals, engineers, and project managers  committed to delivering high-quality, safe, and sustainable building solutions.";

var desc2 =
  " With years of experience across residential, commercial, and industrial projects, our team works collaboratively to ensure every project iscompleted on time, within budget, and to the highest standards.";

function App() {
  const [showForm, setShowForm] = useState(false);

  function openForm() {
    setShowForm(true);
  }
  function closeForm() {
    setShowForm(false);
  }

  function handleSubmit() {
    alert("Application submitted!");
    closeForm();
  }

  return (
    <div>
      <NavBarSection></NavBarSection>
      <Section
        title={"Meet Our Team"}
        paragraph={desc1}
        styleClass={"team"}
      ></Section>

      <Section
        title={"Professionals You Can Trust"}
        paragraph={desc2}
        styleClass={"about-team"}
      ></Section>

      <section className="team-section">
        <div className="team-grid">
          <Card
            name={"Gentiana Ahmeti"}
            job={"CEO & Project Manager"}
            description={
              " Leads the company with over 15 years of experience in construction management."
            }
            image={foto1}
          ></Card>
          <Card
            name={"Elira Berisha"}
            job={"Senior Architect"}
            description={
              "Transforms ideas into functional and aesthetic spaces."
            }
            image={foto13}
          ></Card>
          <Card
            name={"Besart Gashi"}
            job={"Lead Engineer"}
            description={
              "Ensures all projects meet safety and structural standards."
            }
            image={foto3}
          ></Card>
          <Card
            name={"Linda Shala"}
            job={"Construction Supervisor"}
            description={"Oversees daily construction site operations."}
            image={foto4}
          ></Card>
          <Card
            name={"Drita Krasniqi"}
            job={"Technical Engineer"}
            description={"Ensures technical plans meet engineering standards."}
            image={foto5}
          ></Card>
          <Card
            name={"Perparim Ahmeti"}
            job={"Project Coordinator"}
            description={
              "Organizes teams and schedules to ensure smooth project delivery."
            }
            image={foto12}
          ></Card>
          <Card
            name={"Arben Krasniqi"}
            job={"Operations Manager"}
            description={"Oversees daily operations and workflow efficiency."}
            image={foto11}
          ></Card>
          <Card
            name={"Blerim Sadiku"}
            job={"Quantity Surveyor"}
            description={
              "Manages costs, budgets, and material quantities for projects."
            }
            image={foto8}
          ></Card>
          <Card
            name={"Naim Ibrahimi"}
            job={"Civil Engineer"}
            description={
              "Plans and supervises construction quality and structural safety."
            }
            image={foto9}
          ></Card>
          <Card
            name={"Arian Mehmeti"}
            job={"Procurement & Logistics Officer"}
            description={
              "Handles materials, suppliers, and on-time deliveries."
            }
            image={foto10}
          ></Card>
        </div>
      </section>

      <ApplySection
        openForm={openForm}
        closeForm={closeForm}
        showForm={showForm}
        onSubmit={handleSubmit}
      ></ApplySection>

      <Footer></Footer>
    </div>
  );
}

export default App;
