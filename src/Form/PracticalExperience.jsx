import InputBox from "./InputBox";

function PracticalExperience({ legend, formData, onChange }) {
  return (
    <>
      <fieldset>
        <legend>{legend}</legend>

        <InputBox
          onChange={onChange}
          title="Company Name"
          type="text"
          name="companyName"
          value={formData.companyName}
          placeHolder="The Odin Project"
        />
        <InputBox
          onChange={onChange}
          title="Job Title"
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          placeHolder="Learning React"
        />
        <InputBox
          onChange={onChange}
          title="Duration / Experience"
          type="text"
          name="duration"
          value={formData.duration}
          placeHolder="3 Months"
        />
      </fieldset>
    </>
  );
}

export default PracticalExperience;
