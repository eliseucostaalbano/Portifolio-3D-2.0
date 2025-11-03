const Botão = ({ texto, className, id }) => {
  return (
     <a
     onClick={(e) => {
        e.preventDefault(); // Stop the link from jumping instantly

        const target = document.getElementById("counter"); 
        if (target && id) {
          const offset = window.innerHeight * 0.15; 
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`} 
    >
     <div className="cta-button group">
      <div className="bg-circle" />
      <p className="text">{texto}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
        </div>   
    </a>
  )
}

export default Botão