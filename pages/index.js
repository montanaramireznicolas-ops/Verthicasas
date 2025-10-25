export default function Home() {
  return (
    <>
      <head>
        <title>Verthica S.A.S</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Verthica S.A.S - Huertas verticales ecológicas hechas en guadua y tela geotextil"
        />
      </head>

      <body style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0, backgroundColor: "#f5f5f5" }}>
        <header style={{ backgroundColor: "#2e7d32", color: "white", padding: "20px", textAlign: "center" }}>
          <h1>VERTHICA S.A.S</h1>
          <p>Innovación ecológica en espacios urbanos 🌿</p>
        </header>

        <main style={{ padding: "40px", textAlign: "center" }}>
          <section style={{ backgroundColor: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", maxWidth: "800px", margin: "auto" }}>
            <h2>HUERTA VERTICAL</h2>
            <img
              src="/huerta-vertical.jpg"
              alt="Huerta vertical Verthica"
              style={{ width: "100%", borderRadius: "12px", marginBottom: "15px" }}
            />
            <p>
              Hecha a base de <strong>guadua rolliza</strong> y <strong>tela geotextil</strong>,
              diseñada para reemplazar de manera ecológica las construcciones con materiales
              de alto impacto ambiental.
            </p>
            <p style={{ fontSize: "20px", fontWeight: "bold", color: "#2e7d32" }}>
              💰 Precio: $350.000 COP / m²
            </p>

            <div style={{ marginTop: "25px" }}>
              <p style={{ fontWeight: "bold", fontSize: "18px" }}>🌐 Síguenos:</p>
              <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
                <a href="https://www.instagram.com/verthica.sas" target="_blank" rel="noopener noreferrer" style={{ color: "#2e7d32", textDecoration: "none" }}>
                  Instagram
                </a>
                <a href="https://www.facebook.com/verthica.sas" target="_blank" rel="noopener noreferrer" style={{ color: "#2e7d32", textDecoration: "none" }}>
                  Facebook
                </a>
                <a href="mailto:contacto@verthica.com" style={{ color: "#2e7d32", textDecoration: "none" }}>
                  Correo
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer style={{ textAlign: "center", padding: "15px", backgroundColor: "#2e7d32", color: "white", marginTop: "40px" }}>
          <p>© 2025 Verthica S.A.S — Todos los derechos reservados.</p>
        </footer>
      </body>
    </>
  );
}
