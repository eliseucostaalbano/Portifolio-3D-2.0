import { useRef } from "react";

const GlowCard = ({ card, index, children }) => {
  const cardRefs = useRef([]);

  const lidarMoveMouse = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.width / 2;

     let angulo = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
     
     angulo = (angulo + 360) % 360;

     card.style.setProperty("--start", angulo + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={lidarMoveMouse(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
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
  );
};

export default GlowCard;
