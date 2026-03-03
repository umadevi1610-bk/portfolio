import React, { useState } from "react";
import "./Certifications.css";

const certificationsData = [
  {
    name: "Web Development",
    issuer: "SoloLearn",
    year: "2025",
    image: "/certs/webdevelopment.jpg",
  },
  {
    name: "MongoDB Basics",
    issuer: "Simplilearn",
    year: "2025",
    image: "/certs/mongodb.jpg",
  },
  {
    name: "AI Using Python Internship",
    issuer: "Durkkas InfoTech",
    year: "2025",
    image: "/certs/AI using Python.jpeg",
  },
  {
    name: "Data Analytics Certification",
    issuer: "NoviTech",
    year: "2025",
    image: "/certs/Data Analytic.jpg",
  },
  {
    name: "AI Workshop Participation",
    issuer:"Saiva Bhanu Kshatriya College",
    year: "2025",
    image: "/certs/AI-Workship.jpeg",
  },
];

const Certifications = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (img) => {
    setModalImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage("");
  };

  return (
    <section className="certifications">
      <h1>Certifications</h1>
      <p className="cert-sub">
        Professional certifications and internship achievements
      </p>

      <div className="cert-grid">
        {certificationsData.map((cert, index) => (
          <div className="cert-card" key={index}>
            <img
              src={cert.image}
              className="cert-img"
              alt={cert.name}
              onClick={() => openModal(cert.image)}
            />
            <h3>{cert.name}</h3>
            <p>{cert.issuer}</p>
            <span>{cert.year}</span>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="cert-modal" onClick={closeModal}>
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <img src={modalImage} alt="Certificate Large View" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;