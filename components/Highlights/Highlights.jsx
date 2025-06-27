import "./highlights.css"

export default function Highlights({ data }) {
  return (
    <section className="highlights-container">
      {data.map((highlight, index) => (
        <div
          key={highlight.id}
          className="highlight-card"
          style={{ backgroundImage: `url(${highlight.image})` }}
        >
          <div className="highlight-content">
            <h2 className="highlight-title">{highlight.title}</h2>
            <p className="highlight-text">{highlight.text}</p>
            <a href="#" className="highlight-button">Shop Now</a>
          </div>
        </div>
      ))}
    </section>
  )
}
