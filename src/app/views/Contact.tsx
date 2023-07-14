import Socials from "@/components/Socials";
import styles from "../styles/Contact.module.css";

export type MessageFormat = {
  name: FormDataEntryValue | string | null;
  email: FormDataEntryValue | string | null;
  subject: FormDataEntryValue | string | null;
  message: FormDataEntryValue | string | null;
};

const ContactHeading = () => (
  <div className={styles.item}>
    <p>
      Feel free to get in touch with me. I am always open to discussing new
      projects,<br></br> creative ideas or opportunities to be part of your
      visions.
    </p>
    <Socials />
  </div>
);
const ContactLayout = ({ children }: { children: React.ReactNode }) => (
  <section className={styles.contact}>
    <h1 className={styles.heading}>Get in touch!</h1>
    <div className={styles.items}>{children} </div>
  </section>
);

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const temp: MessageFormat = {
      name: data.get("name"),
      email: data.get("email"),
      subject: data.get("subject"),
      message: data.get("message"),
    };
    console.log(temp);
  };
  return (
    <div className="view bg">
      <ContactLayout>
        <ContactHeading />
        <div className={styles.item}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.heading2}>Send me a message</h1>
            <input name="name" type="text" placeholder="Your name" required />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              required
            />
            <input
              type="text"
              name="subject"
              className={styles.subject}
              placeholder="What is it about?"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              required
            ></textarea>
            <button type="submit" className={styles.submit}>
              Send Message
            </button>
          </form>
        </div>
      </ContactLayout>
    </div>
  );
}
