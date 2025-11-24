function Header() {
  const headerStyle = {
    backgroundColor: "var(--color-primary)",
    color: "#FFFFFF",
    padding: "0.75rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 100,
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontWeight: 700,
    fontSize: "1.1rem",
  };

  const navStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    fontSize: "0.95rem",
  };

  const linkStyle = {
    color: "#FFFFFF",
    textDecoration: "none",
  };

  const actionsStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    fontSize: "0.85rem",
  };

  const pillButton = {
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.6)",
    borderRadius: "999px",
    color: "#FFFFFF",
    padding: "0.35rem 0.9rem",
    cursor: "pointer",
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <span role="img" aria-label="Benitatxell logo">
          🌊
        </span>
        <span>Turisme Benitatxell</span>
      </div>

      <nav style={navStyle}>
        <a href="#inicio" style={linkStyle}>
          Inicio
        </a>
        <a href="#que-hacer" style={linkStyle}>
          ¿Qué hacer?
        </a>
        <a href="#mapa" style={linkStyle}>
          Mapa
        </a>
        <a href="#agenda" style={linkStyle}>
          Agenda
        </a>
        <a href="#planifica" style={linkStyle}>
          Planifica tu visita
        </a>
      </nav>

      <div style={actionsStyle}>
        <a href="#favoritos" style={linkStyle}>
          ♥ Mis favoritos
        </a>
        <select
          defaultValue="es"
          style={{
            ...pillButton,
            backgroundColor: "rgba(0,0,0,0.15)",
            border: "none",
          }}
        >
          <option value="va">VA</option>
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
        <button type="button" style={pillButton}>
          A11y
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const heroStyle = {
    position: "relative",
    width: "100%",
    height: "70vh",
    overflow: "hidden",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    background:
      "linear-gradient(135deg, #1E3E8A 0%, #2C4194 40%, #3F83C0 100%)",
  };

  const overlayStyle = {
    maxWidth: "800px",
    padding: "0 1.5rem",
  };

  const titleStyle = {
    fontSize: "3rem",
    fontWeight: 700,
    marginBottom: "1rem",
  };

  const subtitleStyle = {
    fontSize: "1.3rem",
    marginBottom: "1.5rem",
  };

  const buttonsWrapperStyle = {
    display: "flex",
    gap: "1rem",
    marginTop: "1rem",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const primaryButton = {
    backgroundColor: "var(--color-accent)",
    color: "#000",
    padding: "0.8rem 1.8rem",
    borderRadius: "30px",
    border: "none",
    fontSize: "1rem",
    cursor: "pointer",
    textDecoration: "none",
  };

  const secondaryButton = {
    backgroundColor: "transparent",
    border: "2px solid rgba(255,255,255,0.8)",
    color: "#FFF",
    padding: "0.8rem 1.8rem",
    borderRadius: "30px",
    fontSize: "1rem",
    cursor: "pointer",
    textDecoration: "none",
  };

  return (
    <section id="inicio" style={heroStyle}>
      <div style={overlayStyle}>
        <h1 style={titleStyle}>Respira Benitatxell</h1>
        <p style={subtitleStyle}>
          Una web turística conectada con los datos en tiempo real y el Sistema
          de Inteligencia Turística del Poble Nou de Benitatxell.
        </p>

        <div style={buttonsWrapperStyle}>
          <a href="#mapa" style={primaryButton}>
            Ver mapa turístico
          </a>
          <a href="#planifica" style={secondaryButton}>
            Planifica tu visita
          </a>
        </div>
      </div>
    </section>
  );
}

function InfoStrip() {
  const wrapperStyle = {
    display: "flex",
    gap: "2rem",
    padding: "1.5rem 2rem",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 2px 6px rgba(0,0,0,0.07)",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: "-2rem",
    position: "relative",
    zIndex: 2,
  };

  const itemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const labelStyle = {
    fontSize: "0.9rem",
    color: "var(--color-text-muted)",
  };

  const valueStyle = {
    fontSize: "1.2rem",
    fontWeight: 600,
    color: "var(--color-primary-dark)",
  };

  const items = [
    { label: "Tiempo", value: "—" },
    { label: "Estado del mar", value: "—" },
    { label: "Aforo calas", value: "—" },
    { label: "Aforo parkings", value: "—" },
    { label: "Accesos", value: "—" },
  ];

  return (
    <div style={wrapperStyle}>
      {items.map((item, i) => (
        <div key={i} style={itemStyle}>
          <div style={labelStyle}>{item.label}</div>
          <div style={valueStyle}>{item.value}</div>
        </div>
      ))}
    </div>
  );
}

function SectionWrapper({ id, title, children, bg = "var(--color-bg)" }) {
  const wrapperStyle = {
    padding: "3rem 2rem",
    backgroundColor: bg,
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: 700,
    marginBottom: "1.5rem",
    color: "var(--color-primary-dark)",
  };

  return (
    <section id={id} style={wrapperStyle}>
      <h2 style={titleStyle}>{title}</h2>
      {children}
    </section>
  );
}

function CardGrid() {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1.5rem",
  };

  const cardStyle = {
    backgroundColor: "var(--color-bg-card)",
    borderRadius: "12px",
    padding: "1.5rem",
    textDecoration: "none",
    color: "var(--color-text-main)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  };

  const cards = [
    {
      title: "Respira Benitatxell",
      text: "Espacios de silencio, puntos de meditación y una naturaleza para respirar.",
    },
    {
      title: "Calas y mar",
      text: "Las calas de Benitatxell con información práctica y estado en tiempo real.",
    },
    {
      title: "Rutas y naturaleza",
      text: "Senderos y rutas para descubrir el territorio a pie o en bicicleta.",
    },
    {
      title: "Patrimonio 360",
      text: "Museu al Vent, pesqueres de cingle y otros recursos en 360º.",
    },
  ];

  return (
    <div style={gridStyle}>
      {cards.map((card, i) => (
        <article key={i} style={cardStyle}>
          <h3 style={{ marginBottom: "0.5rem" }}>{card.title}</h3>
          <p style={{ color: "var(--color-text-muted)" }}>{card.text}</p>
        </article>
      ))}
    </div>
  );
}

function MapBlock() {
  const textStyle = {
    color: "var(--color-text-muted)",
    marginBottom: "1.5rem",
    maxWidth: "700px",
  };

  const boxStyle = {
    borderRadius: "12px",
    backgroundColor: "#FFFFFF",
    border: "1px dashed rgba(0,0,0,0.2)",
    padding: "3rem",
    textAlign: "center",
    color: "var(--color-text-muted)",
  };

  return (
    <>
      <p style={textStyle}>
        Aquí se integrará el mapa turístico interactivo con calas, rutas,
        miradores, espacios de silencio y servicios turísticos.
      </p>
      <div style={boxStyle}>
        Mapa turístico (placeholder). Aquí irá el iframe o componente de mapa
        cuando esté disponible.
      </div>
    </>
  );
}

function Carousel() {
  const trackStyle = {
    display: "flex",
    overflowX: "auto",
    gap: "1rem",
    paddingBottom: "0.5rem",
  };

  const cardStyle = {
    minWidth: "260px",
    backgroundColor: "var(--color-bg-card)",
    borderRadius: "12px",
    padding: "1.25rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  };

  const subtitleStyle = {
    fontSize: "0.85rem",
    color: "var(--color-text-muted)",
    marginBottom: "0.25rem",
  };

  const items = [
    {
      tag: "Evento",
      title: "Mitjafavafest",
      text: "Fiesta gastronómica y cultural del Poble Nou de Benitatxell.",
    },
    {
      tag: "Experiencia",
      title: "Ruta dels Penya-segats",
      text: "Un recorrido único junto al acantilado para descubrir el Mediterráneo.",
    },
    {
      tag: "Respira Benitatxell",
      title: "Espacios de silenci",
      text: "Puntos especialmente seleccionados para desconectar y respirar.",
    },
  ];

  return (
    <div style={trackStyle}>
      {items.map((item, i) => (
        <article key={i} style={cardStyle}>
          <div style={subtitleStyle}>{item.tag}</div>
          <h3 style={{ marginBottom: "0.5rem" }}>{item.title}</h3>
          <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
            {item.text}
          </p>
        </article>
      ))}
    </div>
  );
}

function Footer() {
  const footerStyle = {
    backgroundColor: "#1E3E8A",
    color: "#FFFFFF",
    padding: "2.5rem 2rem 1.5rem",
    marginTop: "3rem",
  };

  const columnsWrapperStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "2rem",
    marginBottom: "2rem",
  };

  const columnTitleStyle = {
    fontWeight: 600,
    marginBottom: "0.75rem",
    fontSize: "0.95rem",
  };

  const linkStyle = {
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: "0.85rem",
    display: "block",
    marginBottom: "0.35rem",
  };

  const smallTextStyle = {
    fontSize: "0.8rem",
    opacity: 0.8,
    textAlign: "center",
    borderTop: "1px solid rgba(255,255,255,0.25)",
    paddingTop: "1rem",
  };

  return (
    <footer style={footerStyle}>
      <div style={columnsWrapperStyle}>
        <div>
          <h3 style={columnTitleStyle}>Turismo Benitatxell</h3>
          <p style={{ fontSize: "0.85rem", margin: 0 }}>
            [Dirección Oficina de Turismo]
            <br />
            Tel: [Teléfono]
            <br />
            E-mail: [correo@benitatxell.org]
          </p>
        </div>

        <div>
          <h3 style={columnTitleStyle}>Información útil</h3>
          <a href="#" style={linkStyle}>
            Buzón de sugerencias
          </a>
          <a href="#" style={linkStyle}>
            Denuncias oferta ilegal
          </a>
          <a href="#" style={linkStyle}>
            Derechos y obligaciones del turista
          </a>
        </div>

        <div>
          <h3 style={columnTitleStyle}>Legal</h3>
          <a href="#" style={linkStyle}>
            Aviso legal
          </a>
          <a href="#" style={linkStyle}>
            Política de privacidad
          </a>
          <a href="#" style={linkStyle}>
            Política de cookies
          </a>
        </div>

        <div>
          <h3 style={columnTitleStyle}>Síguenos</h3>
          <a href="#" style={linkStyle}>
            Instagram
          </a>
          <a href="#" style={linkStyle}>
            Facebook
          </a>
        </div>
      </div>

      <div style={smallTextStyle}>
        © {new Date().getFullYear()} Ajuntament del Poble Nou de Benitatxell. Todos los
        derechos reservados.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <InfoStrip />

      <SectionWrapper id="mapa" title="Mapa turístico">
        <MapBlock />
      </SectionWrapper>

      <SectionWrapper id="que-hacer" title="¿Qué hacer?">
        <CardGrid />
      </SectionWrapper>

      <SectionWrapper id="agenda" title="Ahora en Benitatxell" bg="#FFFFFF">
        <Carousel />
      </SectionWrapper>

      <SectionWrapper id="planifica" title="Planifica tu visita">
        <p
          style={{
            color: "var(--color-text-muted)",
            maxWidth: "650px",
            marginBottom: "1.5rem",
          }}
        >
          Descubre dónde comer, dónde dormir y qué servicios turísticos tienes a tu
          disposición para organizar tu estancia en el Poble Nou de Benitatxell.
        </p>
        <a
          href="#planifica"
          style={{
            display: "inline-block",
            padding: "0.8rem 1.6rem",
            borderRadius: "999px",
            backgroundColor: "var(--color-accent)",
            color: "#000000",
            textDecoration: "none",
            fontSize: "0.95rem",
          }}
        >
          Empezar a planificar
        </a>
      </SectionWrapper>

      <Footer />
    </div>
  );
}
