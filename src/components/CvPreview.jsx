function CVPreview({ formData, onEdit }) {
  return (
    <div className="cv-overlay">
      <div className="cv-modal">
        <div className="cv">
          <header className="cv-header">
            <h1>{formData.name}</h1>

            <div className="contact-info">
              <span>{formData.email}</span>
              <span>{formData.phone}</span>
            </div>
          </header>

          <section className="cv-section">
            <h2>Education</h2>

            <div className="cv-item">
              <div className="item-main">
                <h3>{formData.collegeName}</h3>
                <p className="subtitle">{formData.titleOfStudy}</p>
              </div>

              <p className="date">
                {formData.studyStartDate} — {formData.studyEndDate}
              </p>
            </div>
          </section>

          <section className="cv-section">
            <h2>Experience</h2>

            <div className="cv-item">
              <div className="item-main">
                <h3>{formData.companyName}</h3>
                <p className="subtitle">{formData.jobTitle}</p>
              </div>

              <p className="date">{formData.duration}</p>
            </div>
          </section>
        </div>

        <div className="cv-actions">
          <button className="edit-btn" onClick={onEdit}>
            Edit
          </button>

          <button className="print-btn" onClick={() => window.print()}>
            Print
          </button>
        </div>
      </div>
    </div>
  );
}

export default CVPreview;
