import Image from "next/image";
import msg from "../../../public/images/msg.svg";
import styles from "./contact.module.css";
import Button from "../../elements/Button/Button";

export default function ContactPage() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactForm}>
        <form action="#">
          <h1>Schicken Sie uns eine Nachricht</h1>

          <input
            type="text"
            name="name"
            id="name"
            className={styles.formControl}
            placeholder="Name"
            required
          />

          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="E-mail"
              required
            />
            <i className="fa fa-envelope"></i>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              id="subject"
              className={styles.formControl}
              placeholder="Betreff"
              required
            />
            <i className="fa fa-book"></i>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              className={styles.formControl}
              id="message"
              rows="9"
              placeholder="Nachricht"
              required
            ></textarea>
            <i className="fa fa-commenting"></i>
          </div>

          <Button text={"Send"}></Button>
        </form>
      </div>

      <div className={styles.contactImgDiv}>
        <Image className={styles.contactImg} src={msg} alt="Contact Image" />
      </div>
    </div>
  );
}
