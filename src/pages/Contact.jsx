import { useState } from "react";
import Reveal from "../components/Reveal";
import "./work.css";
import "./contact.css";
import axios from "axios";

const budgets = ["Under ₹1L", "₹1L – ₹3L", "₹3L – ₹8L", "₹8L+"];

export default function Contact() {
  const [budget, setBudget] = useState(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const company = formData.get("company")?.trim();
    const projectDetails = formData.get("message")?.trim();

    if (!name || !email || !projectDetails) {
      setError("Please fill in your name, email, and project details.");
      return;
    }

    // API only accepts { name, email, message } — fold company & budget into message
    const message = `Company: ${company || "N/A"} | Budget: ${budget || "N/A"} | ${projectDetails}`;

    try {
      setSending(true);
      await axios.post(
        `https://portfolio-serverless-six.vercel.app/api/contact`,
        {
          name,
          email,
          message,
        },
      );
      setSent(true);
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setError("Something went wrong sending your message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="pagehero">
        <div className="container">
          <Reveal type="up">
            <p className="eyebrow">Get In Touch</p>
          </Reveal>
          <Reveal type="up" delay={0.08}>
            <h1 className="pagehero__title">
              Tell us what
              <br />
              you're <em>building</em>.
            </h1>
          </Reveal>
          <Reveal type="up" delay={0.16}>
            <p className="pagehero__sub">
              Fill in a few details below and we'll reply within one business
              day, no auto-responder chains, no sales calls you didn't ask for.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section contact">
        <div className="container contact__grid">
          <Reveal type="up" className="contact__form-wrap">
            {sent ? (
              <div className="contact__success">
                <span className="eyebrow">Message sent</span>
                <h2 className="contact__success-title">
                  Thanks, we've got it.
                </h2>
                <p className="contact__success-sub">
                  We'll be in touch at the email address you shared, usually
                  within one business day.
                </p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__row">
                  <label className="contact__field">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      required
                    />
                  </label>
                  <label className="contact__field">
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      required
                    />
                  </label>
                </div>

                <label className="contact__field">
                  <span>Company</span>
                  <input
                    type="text"
                    name="company"
                    placeholder="Where you work"
                  />
                </label>

                <div className="contact__field">
                  <span>Budget range</span>
                  <div className="contact__pills">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        className={`contact__pill cursor-hover ${budget === b ? "is-active" : ""}`}
                        onClick={() => setBudget(b)}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="contact__field">
                  <span>Project details</span>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="What are you building, and what timeline are you working with?"
                    required
                  />
                </label>

                {error && <p className="contact__error">{error}</p>}

                <button
                  type="submit"
                  className="btn filled contact__submit cursor-hover"
                  disabled={sending}
                >
                  {sending ? "Sending…" : "Send message →"}
                </button>
              </form>
            )}
          </Reveal>

          <Reveal type="up" delay={0.1} className="contact__side">
            <div className="contact__block">
              <p className="contact__label">Email</p>
              <a
                href="mailto:hello@weborium.studio"
                className="contact__value cursor-hover"
              >
                weborium.tech@gmail.com
              </a>
            </div>
            <div className="contact__block">
              <p className="contact__label">Phone</p>
              <a
                href="tel:+919106446305"
                className="contact__value cursor-hover"
              >
                +91 91064 46305
              </a>
            </div>
            <div className="contact__block">
              <p className="contact__label">Studio</p>
              <p className="contact__value">Ahmedabad, Gujarat, India</p>
            </div>
            <div className="contact__block">
              <p className="contact__label">Currently</p>
              <p className="contact__value contact__status">
                <span className="contact__dot" /> Accepting new projects
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
