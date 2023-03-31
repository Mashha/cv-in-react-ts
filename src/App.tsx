import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import PersonalData from "./components/PersonalData";
import WorkData from "./components/WorkData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Template from "./components/Template";
import Education from "./components/Education";
import Skills from "./components/Skills";
import uniqid from "uniqid";
import "./App.css";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    address: "",
    city: "",
    country: "",
    phone: "",
    email: "",
    linkedin: "",
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formDataWork, setFormDataWork] = useState([
    {
      id: uniqid(),
      position: "",
      company: "",
      dateFrom: "",
      dateTo: "",
      notes: "",
    },
  ]);

  const [formDataEducation, setFormDataEducation] = useState([
    {
      id: uniqid(),
      universityName: "",
      degree: "",
      educationDescription: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const [formDataSkills, setFormDataSkills] = useState([
    {
      id: uniqid(),
      skill: "",
    },
  ]);

  function newWorkData(): void {
    const newWordDataObj = {
      id: uniqid(),
      position: "",
      company: "",
      dateFrom: "",
      dateTo: "",
      notes: "",
    };
    setFormDataWork((prevData) => [...prevData, newWordDataObj]);
  }

  function newEducationData(): void {
    const newEducationDataObj = {
      id: uniqid(),
      universityName: "",
      degree: "",
      educationDescription: "",
      startDate: "",
      endDate: "",
    };

    setFormDataEducation((prevData) => [...prevData, newEducationDataObj]);
  }

  function newSkillsData() {
    const newSkillsObj = {
      id: uniqid(),
      skill: "",
    };

    setFormDataSkills((prevData) => [...prevData, newSkillsObj]);
  }

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    if (e.target.name === "image") {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    } else {
      const value = e.target.value;

      setFormData({
        ...formData,
        [e.target.name]: value,
      });
    }
  }

  function handleWorkData(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    id: string
  ): void {
    const value = e.target.value;
    const newWorkDataObj = formDataWork.map((workObj) => {
      if (workObj.id === id) {
        return {
          ...workObj,
          [e.target.name]: value,
        };
      } else {
        return workObj;
      }
    });
    setFormDataWork(newWorkDataObj);
  }

  function handleEducData(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    id: string
  ): void {
    const value = e.target.value;
    const newEducationObj = formDataEducation.map((eduObj) => {
      if (eduObj.id === id) {
        return {
          ...eduObj,
          [e.target.name]: value,
        };
      } else {
        return eduObj;
      }
    });
    setFormDataEducation(newEducationObj);
  }

  function handleSkills(
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ): void {
    const value = e.target.value;
    const newSkillsObj = formDataSkills.map((skill) => {
      if (skill.id === id) {
        return {
          ...skill,
          [e.target.name]: value,
        };
      } else {
        return skill;
      }
    });
    setFormDataSkills(newSkillsObj);
  }

  function deleteWorkObj(id: string): void {
    const removeObj = formDataWork.filter((obj) => obj.id !== id);
    setFormDataWork(removeObj);
  }

  function deleteEduObj(id: string): void {
    const removeObj = formDataEducation.filter((obj) => obj.id !== id);
    setFormDataEducation(removeObj);
  }

  function deleteSkillObj(id: string): void {
    const removeObj = formDataSkills.filter((obj) => obj.id !== id);
    setFormDataSkills(removeObj);
  }

  let object = { ...formData };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="form">
          <div className="form-inner">
            <PersonalData {...formData} handleChange={handleChange} />

            <h1>Experience</h1>
            {formDataWork.map((data, id) => (
              <WorkData
                {...data}
                handleWorkData={handleWorkData}
                key={id}
                deleteWorkObj={deleteWorkObj}
              />
            ))}
            {formDataWork.length < 5 && (
              <button onClick={newWorkData}>Add more</button>
            )}

            <h1>Education</h1>
            {formDataEducation.map((data, id) => (
              <Education
                {...data}
                handleEducData={handleEducData}
                key={id}
                deleteEduObj={deleteEduObj}
              />
            ))}
            {formDataEducation.length < 5 && (
              <button onClick={newEducationData}>Add more</button>
            )}

            <h1>Skills</h1>
            {formDataSkills.map((data, id) => (
              <Skills
                {...data}
                key={id}
                handleSkills={handleSkills}
                deleteSkillObj={deleteSkillObj}
              />
            ))}
            {formDataSkills.length < 8 && (
              <button onClick={newSkillsData}>Add more</button>
            )}

            <button onClick={handlePrint} className="print-btn">
              Print CV
            </button>
          </div>
        </div>
        <div className="cv-letter">
          <Template
            {...object}
            formDataWork={formDataWork}
            formDataEducation={formDataEducation}
            formDataSkills={formDataSkills}
            selectedImage={selectedImage}
            ref={ref}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
