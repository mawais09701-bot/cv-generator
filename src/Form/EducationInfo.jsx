import InputBox from "./InputBox";

function EducationInfo({ legend, formData, onChange }) {
  return (
    <>
      <fieldset>
        <legend>{legend}</legend>

        <InputBox
          onChange={onChange}
          title="College Name"
          type="text"
          labelFor="college-name"
          name="collegeName"
          value={formData.collegeName}
          placeHolder="Government Degree College Mingora"
        />
        <InputBox
          onChange={onChange}
          title="Title Of Study"
          type="text"
          labelFor="study-title"
          name="titleOfStudy"
          value={formData.titleOfStudy}
          placeHolder="Computer Science"
        />
        <InputBox
          onChange={onChange}
          title="Study Start Date"
          type="date"
          labelFor="study-start"
          name="studyStartDate"
          value={formData.studyStartDate}
        />
        <InputBox
          onChange={onChange}
          title="Study End Date"
          type="date"
          labelFor="study-end"
          name="studyEndDate"
          value={formData.studyEndDate}
        />
      </fieldset>
    </>
  );
}

export default EducationInfo;
