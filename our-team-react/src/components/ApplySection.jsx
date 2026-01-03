export default function ApplySection({
  openForm,
  closeForm,
  showForm,
  onSubmit,
}) {
  return (
    <section className="apply-section" id="apply-section">
      <h2>Want to Join Our Team?</h2>
      <p>
        We are always looking for motivated professionals. Send us your CV and
        become part of Urban Build.
      </p>
      <button onClick={openForm} id="openFormBtn" className="apply-btn">
        Apply for a Job
      </button>

      <div
        id="applyForm"
        className={`form-container ${showForm ? "show" : ""}`}
      >
        <span id="closeForm" className="close-btn" onClick={closeForm}>
          &times;
        </span>

        <form id="jobForm" onSubmit={onSubmit}>
          <h3>Job Application</h3>
          <label for="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Full Name"
          />

          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="filanfisteku@gmail.com"
          />

          <label for="phone">Phone Number</label>
          <input
            type="tel"
            inputmode="numeric"
            pattern="[0-9]{6,15}"
            placeholder="044-123-456"
          />

          <label for="position">Position Applied For</label>
          <input
            type="text"
            id="position"
            name="position"
            required
            placeholder="Architect"
          />

          <label for="cv">Upload CV</label>
          <input type="file" id="cv" name="cv" required placeholder="CV" />

          <button type="submit" class="apply-btn">
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}
