import Socials from "@/components/Socials";
import styles from "../styles/Contact.module.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Loader from "@/components/Loader";

export type MessageFormat = {
  name: FormDataEntryValue | string | null;
  email: FormDataEntryValue | string | null;
  subject: FormDataEntryValue | string | null;
  message: FormDataEntryValue | string | null;
  reply_to: FormDataEntryValue | string | null;
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
  const [status, setStatus] = useState<string>("Send Message");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const temp: MessageFormat = {
      name: data.get("name"),
      email: data.get("email"),
      reply_to: data.get("email"),
      subject: data.get("subject"),
      message: data.get("message"),
    };
    try {
      setStatus("loading");
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        temp,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      if (res.status == 200) setStatus("Message sent!");
    } catch (err) {
      setStatus("Failed to send!");
    } finally {
      const timer = setTimeout(() => setStatus("Send Message"), 3000);
      form.reset();
      return () => clearTimeout(timer);
    }
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
            <button type="submit" className={styles.submit + " bg"}>
              {status == "loading" ? <Loader /> : status}
            </button>
          </form>
        </div>
      </ContactLayout>
    </div>
  );
}
