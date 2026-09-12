import InputBox from "./InputBox.jsx";

function GeneralInfo({ onChange, legend, formData }) {
  return (
    <>
      <fieldset>
        <legend>{legend}</legend>
        <InputBox
          onChange={onChange}
          title="Name"
          type="text"
          labelFor="name"
          name="name"
          value={formData.name}
          placeHolder="Muhammad Awais"
        />
        <InputBox
          onChange={onChange}
          title="Email"
          type="email"
          labelFor="email"
          name="email"
          value={formData.email}
          placeHolder="mawais08901@gmail.com"
        />
        <InputBox
          onChange={onChange}
          title="Phone"
          type="tel"
          labelFor="phone"
          name="phone"
          value={formData.phone}
          placeHolder="Your Number"
        />
      </fieldset>
    </>
  );
}

export default GeneralInfo;
