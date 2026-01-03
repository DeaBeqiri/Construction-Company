export default function Section({ title, paragraph, styleClass }) {
  return (
    <section className={styleClass}>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </section>
  );
}
