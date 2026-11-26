import { useState } from "react";
import { site, business } from "../content";
import { Arrow } from "../components/Arrow";
import { Reveal } from "../components/Reveal";

/**
 * Inquiry form prototype.
 * 询盘表单原型。
 *
 * The runtime provides no form, database or file service, so submitting only
 * validates the fields and shows a local preview. Nothing is transmitted,
 * stored or uploaded, and no response time is promised.
 * 运行环境没有表单、数据库或文件服务，因此提交只校验字段并展示本地预览：
 * 不发送、不存储、不上传任何内容，也不承诺回复时效。
 */
export function InquiryForm() {
  const copy = site.contact;
  const email: string | null = business.email;
  const [values, setValues] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "checking" | "preview" | "invalid">("idle");

  const required = ["name", "company", "email", "service", "quantity", "message"];
  const set = (key: string) => (event: { currentTarget: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement }) =>
    setValues((current) => ({ ...current, [key]: event.currentTarget.value }));

  const submit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setStatus("checking");
    const next: Record<string, string> = {};
    for (const key of required)
      if (!(values[key] ?? "").trim()) next[key] = copy.validation.required;
    if ((values.email ?? "").trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = copy.validation.email;
    setErrors(next);
    setStatus(Object.keys(next).length ? "invalid" : "preview");
  };

  const fields = [
    { key: "name", label: copy.fields.name, placeholder: copy.fields.namePlaceholder, required: true, type: "text" },
    { key: "company", label: copy.fields.company, placeholder: copy.fields.companyPlaceholder, required: true, type: "text" },
    { key: "email", label: copy.fields.email, placeholder: copy.fields.emailPlaceholder, required: true, type: "email" },
    { key: "country", label: copy.fields.country, placeholder: copy.fields.countryPlaceholder, required: false, type: "text" },
    { key: "quantity", label: copy.fields.quantity, placeholder: copy.fields.quantityPlaceholder, required: true, type: "text" },
    { key: "material", label: copy.fields.material, placeholder: copy.fields.materialPlaceholder, required: false, type: "text" },
    { key: "tolerance", label: copy.fields.tolerance, placeholder: copy.fields.tolerancePlaceholder, required: false, type: "text" },
    { key: "budget", label: copy.fields.budget, placeholder: copy.fields.budgetPlaceholder, required: false, type: "text" },
  ];

  return (
    <section id="inquiry-form" className="section container inquiry">
      <div className="inquiry-layout">
        <div className="inquiry-side">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.infoTitle}</h2>
          <dl className="company-list">
            <div>
              <dt>{copy.channels[0].label}</dt>
              <dd>
                {email ? (
                  <a href={`mailto:${email}`}>{email}</a>
                ) : (
                  <>
                    {copy.channels[0].value}{" "}
                    <span className="state-badge">{site.ui.unconfigured}</span>
                  </>
                )}
              </dd>
            </div>
            {copy.channels.slice(1).map((channel) => (
              <div key={channel.label}>
                <dt>{channel.label}</dt>
                <dd>
                  {channel.value}{" "}
                  <span className="state-badge">{site.ui.unconfigured}</span>
                </dd>
              </div>
            ))}
            <div>
              <dt>{copy.officeLabel}</dt>
              <dd>{copy.officeValue}</dd>
            </div>
            <div>
              <dt>{copy.hoursLabel}</dt>
              <dd>{copy.hoursValue}</dd>
            </div>
            <div>
              <dt>{copy.responseLabel}</dt>
              <dd>{copy.responseValue}</dd>
            </div>
          </dl>
          <div className="notice" role="note">
            <h3>{copy.backendNoticeTitle}</h3>
            <p>{copy.backendNotice}</p>
          </div>
          <div className="notice notice-plain">
            <h3>{copy.integrationTitle}</h3>
            <ul>
              {copy.integration.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <p className="privacy">
            <strong>{copy.privacyTitle}</strong>
            {copy.privacy}
          </p>
        </div>
        <Reveal className="inquiry-main">
          <h2 className="form-title">{copy.formTitle}</h2>
          <p className="form-intro">{copy.formIntro}</p>
          <form onSubmit={submit} noValidate>
            <div className="field-grid">
              {fields.map((field) => (
                <label className="field" key={field.key}>
                  <span className="field-label">
                    {field.label}
                    <em>{field.required ? copy.fields.required : copy.fields.optional}</em>
                  </span>
                  <input
                    type={field.type}
                    name={field.key}
                    value={values[field.key] ?? ""}
                    onChange={set(field.key)}
                    placeholder={field.placeholder}
                    aria-invalid={errors[field.key] ? "true" : undefined}
                    aria-describedby={errors[field.key] ? `error-${field.key}` : undefined}
                  />
                  {errors[field.key] && (
                    <span className="field-error" id={`error-${field.key}`}>
                      {errors[field.key]}
                    </span>
                  )}
                </label>
              ))}
              <label className="field field-wide">
                <span className="field-label">
                  {copy.fields.service}
                  <em>{copy.fields.required}</em>
                </span>
                <select
                  name="service"
                  value={values.service ?? ""}
                  onChange={set("service")}
                  aria-invalid={errors.service ? "true" : undefined}
                  aria-describedby={errors.service ? "error-service" : undefined}
                >
                  <option value="">{copy.fields.servicePlaceholder}</option>
                  {site.services.items.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <span className="field-error" id="error-service">
                    {errors.service}
                  </span>
                )}
              </label>
              <label className="field field-wide">
                <span className="field-label">
                  {copy.fields.message}
                  <em>{copy.fields.required}</em>
                </span>
                <textarea
                  name="message"
                  rows={5}
                  value={values.message ?? ""}
                  onChange={set("message")}
                  placeholder={copy.fields.messagePlaceholder}
                  aria-invalid={errors.message ? "true" : undefined}
                  aria-describedby={errors.message ? "error-message" : undefined}
                />
                {errors.message && (
                  <span className="field-error" id="error-message">
                    {errors.message}
                  </span>
                )}
              </label>
            </div>
            <fieldset className="upload">
              <legend>{copy.upload.label}</legend>
              <p>{copy.upload.hint}</p>
              <label className="upload-button">
                <input
                  type="file"
                  name="attachments"
                  multiple
                  accept=".step,.stp,.iges,.igs,.x_t,.sldprt,.pdf,.dxf,.dwg,.zip,.png,.jpg"
                  onChange={(event) =>
                    setFiles(
                      Array.from(event.currentTarget.files ?? [])
                        .slice(0, 5)
                        .map((file) => file.name),
                    )
                  }
                />
                <span>{copy.upload.button}</span>
              </label>
              <p className="upload-meta">
                {copy.upload.accepted}: STEP · IGES · X_T · SLDPRT · PDF · DXF
                <br />
                {copy.upload.maxFiles}
              </p>
              {files.length > 0 ? (
                <ul className="file-list">
                  {files.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                  <li>
                    <button type="button" className="link-button" onClick={() => setFiles([])}>
                      {copy.upload.clear}
                    </button>
                  </li>
                </ul>
              ) : (
                <p className="file-empty">{copy.upload.empty}</p>
              )}
            </fieldset>
            <div className="form-actions">
              <button className="button primary" type="submit">
                {status === "checking" ? copy.submitting : copy.submit}
                <Arrow diagonal />
              </button>
              {status !== "idle" && (
                <p className="form-status" role="status" aria-live="polite">
                  {status === "invalid"
                    ? `${copy.validation.summary}: ${copy.validation.required}`
                    : status === "preview"
                      ? copy.preview.title
                      : copy.submitting}
                </p>
              )}
            </div>
            {status === "preview" && (
              <div className="preview-card">
                <h3>{copy.preview.title}</h3>
                <p>{copy.preview.intro}</p>
                <dl>
                  {[...fields.map((f) => ({ key: f.key, label: f.label })), { key: "service", label: copy.fields.service }, { key: "message", label: copy.fields.message }].map(
                    (row) => (
                      <div key={row.key}>
                        <dt>{row.label}</dt>
                        <dd>{values[row.key] || "—"}</dd>
                      </div>
                    ),
                  )}
                  <div>
                    <dt>{copy.preview.filesLabel}</dt>
                    <dd>{files.length ? files.join(", ") : copy.preview.filesNone}</dd>
                  </div>
                </dl>
                <button
                  type="button"
                  className="text-link"
                  onClick={() => {
                    setValues({});
                    setFiles([]);
                    setErrors({});
                    setStatus("idle");
                  }}
                >
                  {copy.preview.reset}
                </button>
              </div>
            )}
          </form>
          <p className="demo-note">{copy.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
