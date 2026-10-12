
import './App.css';

const platos = [
  {
    nombre: 'Pasta artesanal',
    descripcion: 'Pasta fresca con salsa cremosa y parmesano.',
    precio: '$ 8.500',
    imagen:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=85',
  },
  {
    nombre: 'Pizza de la casa',
    descripcion: 'Mozzarella, tomates frescos y albahaca.',
    precio: '$ 9.000',
    imagen:
      'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=85',
  },
  {
    nombre: 'Risotto cremoso',
    descripcion: 'Arroz cremoso con hongos y hierbas frescas.',
    precio: '$ 8.000',
    imagen:
      'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=85',
  },
];

function App() {
  return (
    <div className="pagina">
      <header className="navbar">
        <a className="logo" href="#inicio">
          basilico<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#menu">Nuestro menú</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="boton boton-nav" href="#menu">
          Ver menú ↗
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-contenido">
            <p className="etiqueta">
              ✳ COCINA ITALIANA ARTESANAL
            </p>

            <h1>
              El sabor de Italia,
              <br />
              <span>hecho con amor.</span>
            </h1>

            <p className="hero-descripcion">
              Ingredientes frescos, recetas tradicionales
              y momentos que merecen compartirse.
            </p>

            <div className="hero-botones">
              <a className="boton boton-principal" href="#menu">
                Descubrir menú →
              </a>

              <a className="boton boton-secundario" href="#nosotros">
                Nuestra historia
              </a>
            </div>

            <p className="hero-nota">
              Hecho con ingredientes frescos, todos los días.
            </p>
          </div>

          <div className="hero-imagen">
            <div className="hero-etiqueta">
              <span>✳</span>
              <div>
                <strong>Fatto con amore</strong>
                <p>Hecho con amor</p>
              </div>
            </div>
          </div>
        </section>

        <section className="menu-seccion" id="menu">
          <div className="seccion-encabezado">
            <div>
              <p className="etiqueta">NUESTROS FAVORITOS</p>
              <h2>Un pedacito de Italia</h2>
            </div>

            <p className="seccion-descripcion">
              Sabores auténticos, ingredientes seleccionados
              y recetas preparadas al momento.
            </p>
          </div>

          <div className="platos-grid">
            {platos.map((plato) => (
              <article className="plato-card" key={plato.nombre}>
                <img
                  className="plato-imagen"
                  src={plato.imagen}
                  alt={plato.nombre}
                />

                <div className="plato-info">
                  <div className="plato-titulo">
                    <h3>{plato.nombre}</h3>
                    <span>{plato.precio}</span>
                  </div>

                  <p>{plato.descripcion}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="nosotros" id="nosotros">
          <p className="etiqueta">LA ESENCIA DE BASILICO</p>
          <h2>La buena comida nos reúne.</h2>
          <p>
            Creemos en las recetas hechas con paciencia,
            los ingredientes frescos y las mesas llenas
            de historias para compartir.
          </p>
        </section>

        <section className="contacto" id="contacto">
          <div>
            <p className="etiqueta">TE ESPERAMOS</p>
            <h2>Tu próxima comida favorita te espera.</h2>
            <p>De martes a domingo · 12:00 a 00:00</p>
          </div>

          <a
            className="boton boton-claro"
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noreferrer"
          >
            Contactanos por WhatsApp ↗
          </a>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#inicio">
          basilico<span>.</span>
        </a>
        <p>Buena comida, buenos momentos.</p>
        <p>© 2026 Basilico · Proyecto de portfolio</p>
      </footer>
    </div>
  );
}

export default App;
