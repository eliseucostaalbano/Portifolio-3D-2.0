const GlowCard = ({ card , children  }) => {
  return (
    <div className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column">
      <div className="glow"></div>
      <div className="flex items-center gap-1 mb-5">
       {Array.from({ length: card.nota }, (_, i) => (
          <img key={i} src="/images/star.png" alt="star" className="size-5" />
        ))} 
      </div>
      <div>
        <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
      </div>
    </div>
  )
}

export default GlowCard