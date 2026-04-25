export default function SectionWrapper({ title, children }) {
  return (
    <div className="section-wrapper">
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </div>
  )
}
