import GeneralInfo from "./GeneralInfo.jsx";
import EducationInfo from "./EducationInfo.jsx";
import PracticalExperience from "./PracticalExperience.jsx";
import SubmitButton from "./SubmitButton.jsx";
import CVPreview from "../components/CvPreview.jsx";
import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",

    collegeName: "",
    titleOfStudy: "",
    studyStartDate: "",
    studyEndDate: "",

    companyName: "",
    jobTitle: "",
    duration: "",
  });

  const [showCV, setShowCV] = useState(false);

  function onChange(e, dataName) {
    const newData = { ...formData, [dataName]: e.target.value };
    setFormData(newData);
  }

  function submitForm(e) {
    e.preventDefault();
    console.log(formData);
    setShowCV(true);
  }

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <GeneralInfo
          formData={formData}
          onChange={onChange}
          legend="General Information"
        />
        <EducationInfo
          formData={formData}
          onChange={onChange}
          legend="Educational Information"
        />
        <PracticalExperience
          formData={formData}
          onChange={onChange}
          legend="Practical Experience"
        />
        <SubmitButton text="Generate CV" />
      </form>

      {showCV && (
        <CVPreview formData={formData} onEdit={() => setShowCV(false)} />
      )}
    </>
  );
}

export default Form;
