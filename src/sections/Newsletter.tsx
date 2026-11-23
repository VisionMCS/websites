import { useState } from "react";
import { site } from "../content";

// Prototype signup only. Nothing is sent, stored or confirmed — see the note.
// 仅为原型演示：不发送、不存储、不确认提交成功，见下方说明。
export function Newsletter() {
  const [value, setValue] = useState("");
  return (
    <section className="newsletter section" aria-labelledby="newsletter-title">
      <div className="container newsletter-inner">
        <div className="newsletter-copy">
          <h2 id="newsletter-title">{site.newsletter.title}</h2>
          <p>{site.newsletter.description}</p>
        </div>
        <form
          className="newsletter-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="visually-hidden" htmlFor="newsletter-email">
            {site.ui.emailLabel}
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={value}
            placeholder={site.newsletter.placeholder}
            onChange={(event) => setValue(event.target.value)}
          />
          <button className="button-primary" type="submit">
            {site.newsletter.button}
          </button>
        </form>
        <p className="newsletter-note">{site.newsletter.note}</p>
      </div>
    </section>
  );
}
