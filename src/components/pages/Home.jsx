import { useState, useEffect } from 'react';

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    setCartCount(products.length);
  }, []);

  const productos = [
    {
      code: 'LECHE001',
      name: 'Leche Entera',
      price: '$1590 CLP',
      image: 'https://thumbs.dreamstime.com/b/leche-de-granja-en-diferentes-platos-la-mesa-madera-naturaleza-desenfocada-el-fondo-167953475.jpg',
      description: 'Directa del campo a tu mesa, nuestra leche es pura y natural. Con una textura cremosa y un sabor inigualable, cada vaso te da la energía y los nutrientes que necesitas para empezar bien el día'
    },
    {
      code: 'QUINOA001',
      name: 'Quinoa',
      price: '$5000 CLP',
      image: 'https://quaker.lat/mx/sites/default/files/imgs/QuakerMX0004_DESKTOP-640x480.jpg',
      description: 'La quinoa posee un alto contenido en fibra y en proteínas, pero su índice glucémico es muy bajo, por este motivo, es una buena opción para aquellas personas que están a dieta, son diabéticas o quieren mantener el peso. Ayuda a mejorar el tránsito intestinal.'
    },
    {
      code: 'ZANAHORIA001',
      name: 'Zanahorias Orgánicas',
      price: '$900 CLP',
      image: 'https://img2.rtve.es/i/?w=1600&i=1653900605179.jpg',
      description: 'Zanahorias crujientes cultivadas sin pesticidas en la Región de O\'Higgins. Excelente fuente de vitamina A y fibra, ideales para ensaladas, jugos o como snack saludable.'
    },
    {
      code: 'MANZANA001',
      name: 'Manzana Fuji',
      price: '$1200 CLP',
      image: 'https://viverochillan.cl/wp-content/uploads/2020/06/manzanofuji.jpg',
      description: 'Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule. Perfectas para meriendas saludables o como ingrediente en postres. Estas manzanas son conocidas por su textura firme y su sabor equilibrado entre dulce y ácido.'
    },
    {
      code: 'NARANJA001',
      name: 'Naranjas Valencia',
      price: '$1500 CLP',
      image: 'https://image.tuasaude.com/media/article/uk/dg/beneficios-da-laranja_53623.jpg',
      description: 'Jugosas y ricas en vitamina C, estas naranjas Valencia son ideales para zumos frescos y refrescantes. Cultivadas en condiciones climáticas óptimas que aseguran su dulzura y jugosidad.'
    },
    {
      code: 'MIEL001',
      name: 'Miel Orgánica',
      price: '$5000 CLP',
      image: 'https://saborusachile.cl/wp-content/uploads/2024/08/miel-ok-1240x578.jpg',
      description: 'Miel pura y orgánica producida por apicultores locales. Rica en antioxidantes y con un sabor inigualable, perfecta para endulzar de manera natural tus comidas y bebidas.'
    },
    {
      code: 'ESPINACA001',
      name: 'Espinacas Frescas',
      price: '$700 CLP',
      image: 'https://i.blogs.es/10d3c5/espinacas-rec/450_1000.jpg',
      description: 'Espinacas frescas y nutritivas, perfectas para ensaladas y batidos verdes. Estas espinacas son cultivadas bajo prácticas orgánicas que garantizan su calidad y valor nutricional.'
    },
    {
      code: 'PLATANO001',
      name: 'Plátanos Cavendish',
      price: '$800 CLP',
      image: 'https://vegavirtual.cl/wp-content/uploads/2024/02/CAJA-DE-PLATANO.jpg',
      description: 'Plátanos maduros y dulces, perfectos para el desayuno o como snack energético. Estos plátanos son ricos en potasio y vitaminas, ideales para mantener una dieta equilibrada.'
    },
    {
      code: 'PIMIENTO001',
      name: 'Pimientos Tricolores',
      price: '$970 CLP',
      image: 'https://corp.ametllerorigen.com/wp-content/uploads/2023/11/Blog_pebrot.jpg',
      description: 'Perfecto para ensaladas, salteados y como ingrediente en una gran variedad de platos. Excelente para preparar conservas.'
    },
    {
      code: 'PEPINO001',
      name: 'Pepinos Frescos',
      price: '$750 CLP',
      image: 'https://www.imporalaska.com/uploads/products/2022/01/pic_1643299016_1643299058.jpg',
      description: 'Ofrece pepinos con una piel vibrante de color verde oscuro, sin manchas amarillas ni defectos. Al tacto, deben sentirse firmes y sin zonas blandas. Las puntas deben estar frescas y no resecas, lo cual es un signo de que el producto está en óptimas condiciones.'
    },
    {
      code: 'LECHUGA001',
      name: 'Lechuga',
      price: '$500 CLP',
      image: 'https://cloudfront-us-east-1.images.arcpublishing.com/semana/3REV53527RABTL2YCEI3KJZWAM.jpg',
      description: 'Crujiente, fresca y llena de vida. Cultivada con cuidado y cosechada en su punto óptimo, esta lechuga no es solo un ingrediente, es la base para una comida saludable y deliciosa.'
    },
    {
      code: 'PAPA001',
      name: 'Papas',
      price: '$320 CLP',
      image: 'https://d2kkzshb6n9g86.cloudfront.net/wp-content/uploads/2024/05/papas-1-768x529.jpg',
      description: 'Imagina la textura perfecta para tu puré cremoso, la base ideal para unas papas fritas doradas y crujientes, o la compañera perfecta para asar con tus carnes favoritas. ¡Lista para transformar tu cocina!'
    }
  ];

  
  const handleAddToCart = (producto) => {
    const cart = JSON.parse(localStorage.getItem("products")) || [];
    const exists = cart.find(p => p.code === producto.code);
    
    if (!exists) {
      cart.push(producto);
      localStorage.setItem("products", JSON.stringify(cart));
      setCartCount(cart.length);
      alert(`✅ ${producto.name} agregado al carrito`);
    } else {
      alert(`⚠️ ${producto.name} ya está en el carrito`);
    }
  };

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
          <a href="#" id="cart-button">🛒 Carrito ({cartCount})</a>
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
        {productos.map((producto) => (
          <div key={producto.code} className="producto">
            <img src={producto.image} alt={producto.name} />
            <p>{producto.name}</p>
            <p>{producto.description}</p>
            <p className="price">{producto.price}</p>
            <button onClick={() => handleAddToCart(producto)}>
              Agregar al carrito
            </button>
          </div>
        ))}        
      </section>

      <h1>Contáctanos</h1>
      <section id="fourth">
        <p>
          Para más información, visita{" "}
          <a
            href="https://www.instagram.com/miakhalifa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            esta página
          </a>
          . ¿Dónde nos ubicamos?{" "}
          <a
            href="https://www.google.com/maps/place/Serfrut/@-33.0401006,-71.6741319,12z/data=!4m10!1m2!2m1!1sverduler%C3%ADa!3m6!1s0x9689dde69ff49265:0x7658eeeb6ea7d60d!8m2!3d-33.0177458!4d-71.5545713!15sCgt2ZXJkdWxlcsOtYVoNIgt2ZXJkdWxlcsOtYZIBGWZydWl0X2FuZF92ZWdldGFibGVfc3RvcmWaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnMxVDFaNlRteGxXR1JYVlVWMFZGWlhPREZVU0ZJd1pGZGtkbEpGUlJBQqoBRRABKg8iC3ZlcmR1bGVyw61hKA4yHxABIhub05XP6APWFzi54Hs0XyLOjYcuokeczxsNAA0yDxACIgt2ZXJkdWxlcsOtYeABAPoBBAgAECQ!16s%2Fg%2F11f3hb7410?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            esta página
          </a>
          .
        </p>
      </section>
    </div>
  );
}
