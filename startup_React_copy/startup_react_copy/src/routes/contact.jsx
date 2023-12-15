

export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
      };
      
    return (
    <div className="contact_page">
      <div className="user-data">
        <div id="userNameDisplay"></div>
        <div id="databaseDataContainer"></div>
      </div>
      <h2>Contact Me</h2>
      <p>Fill out the form below, or email me at kreciafullmerart@gmail.com</p>
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name (required)</label>
          <input type="text" className="form-control" id="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name (required)</label>
          <input type="text" className="form-control" id="lastName" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email (required)</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject (optional)</label>
          <input type="text" className="form-control" id="subject" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message (optional)</label>
          <textarea className="form-control" id="message" rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">SUBMIT</button>
      </form>
    </div>
      );
}