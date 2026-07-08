export function PageHeader({ title, lead }: { title: string; lead: string }) {
  return (
    <section className="page-header">
      <div className="container page-header__inner">
        <h1 className="page-header__title">{title}</h1>
        <p className="page-header__lead">{lead}</p>
      </div>
    </section>
  );
}
