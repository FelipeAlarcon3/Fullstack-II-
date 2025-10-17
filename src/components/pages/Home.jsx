import Product from '../organisms/Product'

export default function Home() {
  return (
    <div>
      <section id="first">
        <img src="imagenes/Huerto Hogar 1.png" alt="" />
        <p>
          Bienvenido/a a tu mercado en línea, Aquí la frescura va directo del
          campo a tu hogar. Descubre la mejor selección de frutas y verduras,
          elegidas a mano, para que disfrutes del sabor más puro y natural.
          ¡Empieza a llenar tu canasta!
        </p>
        <nav>
          <a href="iniciar sesion.html">Iniciar Sesión</a>
          <a href="#" id="cart-button">🛒 Carrito</a>
          <a href="PerfilUsuario.html">Perfil</a>
        </nav>
      </section>

      <section id="filtro-y-buscador">
        <div className="search-bar">
          <input type="text" placeholder="Buscar productos..." />
          <button>Buscar</button>
        </div>
        <div className="filter-options">
          <label htmlFor="categoria-filtro">Filtrar por categoría:</label>
          <select id="categoria-filtro">
            <option value="todos">Todos los productos</option>
            <option value="frutas">Frutas</option>
            <option value="verduras">Verduras</option>
            <option value="lacteos">Lácteos</option>
            <option value="otros">Otros</option>
          </select>
        </div>
      </section>

      <h1>Nuestros Productos</h1>

      <section id="second">
        <div className="producto">
          <img src="https://thumbs.dreamstime.com/b/leche-de-granja-en-diferentes-platos-la-mesa-madera-naturaleza-desenfocada-el-fondo-167953475.jpg" alt="" />
          <p>Leche Entera</p>
          <p>
            Descripción: Directa del campo a tu mesa, nuestra leche es pura y
            natural. Con una textura cremosa y un sabor inigualable, cada vaso
            te da la energía y los nutrientes que necesitas para empezar bien el
            día
          </p>
          <p className="price">$1590 CLP</p>
          <button>Agregar al carrito</button>
        </div>

        <div className="producto">
          <img src="https://quaker.lat/mx/sites/default/files/imgs/QuakerMX0004_DESKTOP-640x480.jpg" alt="" />
          <p>Quinoa</p>
          <p className="price">$5000</p>
          <p>
            La quinoa posee un alto contenido en fibra y en proteínas, pero su
            índice glucémico es muy bajo, por este motivo, es una buena opción
            para aquellas personas que están a dieta, son diabéticas o quieren
            mantener el peso. Ayuda a mejorar el tránsito intestinal.
          </p>
          <button>Agregar al carrito</button>
        </div>

        <div className="producto">
          <img
            src="imagenes/zanahorias-zanahorias-organicas-frescas_213438-1450.jpg"
            alt=""
          />
          <p>Zanahorias Orgánicas</p>
          <p className="price">$900 CLP</p>
          <p>
            Descripción: Zanahorias crujientes cultivadas sin pesticidas en la
            Región de O'Higgins. Excelente fuente de vitamina A y fibra, ideales
            para ensaladas, jugos o como snack saludable.
          </p>
          <button>Agregar al carrito</button>
        </div>

        <div className="producto">
          <img src="imagenes/Fuji_apple.jpg" alt="" />
          <p>Manzana Fuji</p>
          <p className="price">$1200 CLP</p>
          <p>
            Descripción: Manzanas Fuji crujientes y dulces, cultivadas en el
            Valle del Maule. Perfectas para meriendas saludables o como
            ingrediente en postres. Estas manzanas son conocidas por su textura
            firme y su sabor equilibrado entre dulce y ácido.
          </p>
          <button>Agregar al carrito</button>
        </div>

        <div className="producto">
          <img src="imagenes/Starr_070730-7915_Citrus_sinensis.jpg" alt="" />
          <p>Naranjas Valencia</p>
          <p className="price">$1500 CLP</p>
          <p>
            Descripción: Jugosas y ricas en vitamina C, estas naranjas Valencia
            son ideales para zumos frescos y refrescantes. Cultivadas en
            condiciones climáticas óptimas que aseguran su dulzura y jugosidad.
          </p>
          <button>Agregar al carrito</button>
        </div>

        <div className="producto">
          <img
            src="imagenes/depositphotos_86959796-stock-photo-fresh-honey-with-dipper.jpg"
            alt=""
          />
          <p>Miel Orgánica</p>
          <p className="price">$5000 CLP</p>
          <p>
            Descripción: Miel pura y orgánica producida por apicultores locales.
            Rica en antioxidantes y con un sabor inigualable, perfecta para
            endulzar de manera natural tus comidas y bebidas.
          </p>
          <button>Agregar al carrito</button>
        </div>

        <div className="producto">
          <img src="imagenes/recetas-con-espinacas-1.webp" alt="" />
          <p>Espinacas Frescas</p>
          <p className="price">$700 CLP</p>
          <p>
            Descripción: Espinacas frescas y nutritivas, perfectas para
            ensaladas y batidos verdes. Estas espinacas son cultivadas bajo
            prácticas orgánicas que garantizan su calidad y valor nutricional.
          </p>
          <button>Agregar al carrito</button>
        </div>

        <div className="producto">
          <img
            src="imagenes/fresh-organic-bunch-cavendish-banana-600nw-2301070675.webp"
            alt=""
          />
          <p>Plátanos Cavendish</p>
          <p className="price">$800 CLP</p>
          <p>
            Descripción: Plátanos maduros y dulces, perfectos para el desayuno o
            como snack energético. Estos plátanos son ricos en potasio y
            vitaminas, ideales para mantener una dieta equilibrada.
          </p>
          <button>Agregar al carrito</button>
        </div>

        <div className="producto">
          <img src="imagenes/Pimientos tricolores.jpg" alt="" />
          <p>Pimientos Tricolores</p>
          <p className="price">$970 CLP</p>
          <p>
            Descripción: Perfecto para ensaladas, salteados y como ingrediente
            en una gran variedad de platos. Excelente para preparar conservas.
          </p>
          <button>Agregar al carrito</button>
        </div>

        <div className="producto">
          <img src="imagenes/Pepinos.jpg" alt="" />
          <p>Pepinos Frescos</p>
          <p className="price">$750 CLP</p>
          <p>
            Descripción: Ofrece pepinos con una piel vibrante de color verde
            oscuro, sin manchas amarillas ni defectos. Al tacto, deben sentirse
            firmes y sin zonas blandas. Las puntas deben estar frescas y no
            resecas, lo cual es un signo de que el producto está en óptimas
            condiciones.
          </p>
          <button>Agregar al carrito</button>
        </div>

        <div className="producto">
          <img src="imagenes/Lechuga.jpg" alt="" />
          <p>Lechuga</p>
          <p className="price">$500 CLP</p>
          <p>
            Descripción: Crujiente, fresca y llena de vida. Cultivada con
            cuidado y cosechada en su punto óptimo, esta lechuga no es solo un
            ingrediente, es la base para una comida saludable y deliciosa.
          </p>
          <button>Agregar al carrito</button>
        </div>

        <div className="producto">
          <img src="imagenes/Papa chilena.jpg" alt="" />
          <p>Papas</p>
          <p className="price">$320 CLP</p>
          <p>
            Descripción: Imagina la textura perfecta para tu puré cremoso, la
            base ideal para unas papas fritas doradas y crujientes, o la
            compañera perfecta para asar con tus carnes favoritas. ¡Lista para
            transformar tu cocina!
          </p>
          <button>Agregar al carrito</button>
        </div>
      </section>

      <h1>Contáctanos</h1>
      <section id="fourth">
        <p>
          Para más información, visita{" "}
          <a
            href="https://www.instagram.com/leeetyyy1_?igsh=MTFpOGNmYWlqeHhj"
            target="_blank"
            rel="noopener noreferrer"
          >
            esta página
          </a>.
                  ¿Dónde nos ubicamos?{" "}
          <a
            href="https://www.google.com/maps/place/Serfrut/@-33.0401006,-71.6741319,12z/data=!4m10!1m2!2m1!1sverduler%C3%ADa!3m6!1s0x9689dde69ff49265:0x7658eeeb6ea7d60d!8m2!3d-33.0177458!4d-71.5545713!15sCgt2ZXJkdWxlcsOtYVoNIgt2ZXJkdWxlcsOtYZIBGWZydWl0X2FuZF92ZWdldGFibGVfc3RvcmWaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnMxVDFaNlRteGxXR1JYVlVWMFZGWlhPREZVU0ZJd1pGZGtkbEpGUlJBQqoBRRABKg8iC3ZlcmR1bGVyw61hKA4yHxABIhub05XP6APWFzi54Hs0XyLOjYcuokeczxsNAA0yDxACIgt2ZXJkdWxlcsOtYeABAPoBBAgAECQ!16s%2Fg%2F11f3hb7410?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            esta página
          </a>.
        </p>
      </section>
    </div>
  );
}


    