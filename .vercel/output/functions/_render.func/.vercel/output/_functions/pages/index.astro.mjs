/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderHead, e as renderSlot, f as createAstro, g as renderComponent } from '../chunks/astro/server_CZuyNLFT.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$WhatsAppLink = createComponent(($$result, $$props, $$slots) => {
  const WHATSAPP_NUMBER = "56934880568";
  const WHATSAPP_MESSAGE = "Hola Stefy Food, me gustar\xEDa hacer un pedido.";
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(WHATSAPP_URL, "href")} target="_blank" class=""> <img src="/images/whatsapp.svg" alt="whatsapp" class="fixed bottom-5 right-5 w-12 h-12 rounded-full shadow-lg hover:scale-125 hover:opacity-75"> </a>`;
}, "/Users/camilo/Documents/dev/restaurante/foot/src/components/WhatsAppLink.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Stefy Food"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/camilo/Documents/dev/restaurante/foot/src/layouts/Layout.astro", void 0);

const $$Maps = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="text-center"> <span class="text-primary text-sm">Encuéntranos aquí:</span> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.5549520013687!2d-68.93231742395153!3d-22.445770779582165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ac09eb298ec0bb%3A0xaffd484c3085a179!2sEj%C3%A9rcito%203437%2C%201393251%20Calama%2C%20El%20Loa%2C%20Antofagasta!5e0!3m2!1ses!2scl!4v1728501115841!5m2!1ses!2scl" width="200" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded-sm">
        
    </iframe> </div>`;
}, "/Users/camilo/Documents/dev/restaurante/foot/src/components/Maps.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full mt-10 border-primary border-t-2 flex flex-col md:flex-row justify-center items-center md:justify-between pt-10 pb-20"> <span class="text-primary text-center">
@ 2024 Stefy Food
<span aria-hidden class="hidden md:inline">/</span> <br aria-hidden class="block md:hidden">
Todos los derechos reservados.
</span> ${renderComponent($$result, "Maps", $$Maps, {})} <ul class="flex flex-row gap-x-6 items-center mt-4 md:mt-0 "> <li> <a href="https://www.instagram.com/stefy_food1/" target="_blank" rel="noopener" class="text-primary hover:scale-125 hover:opacity-70 transition inline-block"> <img src="/images/instagramoriginal.svg" alt="Instagram" width="40"> </a> </li> <li> <a href="https://www.instagram.com/stefy_food1/" target="_blank" rel="noopener" class="text-primary hover:scale-125 hover:opacity-70 transition inline-block"> <img src="/images/facebookblue.svg" alt="facebook" width="40"> </a> </li> </ul> </footer>`;
}, "/Users/camilo/Documents/dev/restaurante/foot/src/sections/Footer.astro", void 0);

const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="mb-2"> <img src="images/cachapa-cover.jpg" alt="logo stefy food" class=" object-cover h-28 md:h-48 w-full rounded-b-lg"> </div> <div class="flex justify-center md:justify-start md:gap-x-20 items-center gap-4"> <img src="images/logo_stefy_food.png" alt="logo stefy food" class="w-20 h-20 md:w-40 md:h-40 rounded-full shadow-lg"> <div> <h1 class="text-primary font-extrabold text-4xl md:text-7xl my-2">Stefy Food</h1> <h4 class="text-primary text-sm md:text-base ">
La mejor comida rápida de Calama. <br> <span class="text-red-500">➤</span> Encuentranos en ejército 3437. <br> <span class="text-red-500">🛵</span> Delivery a toda Calama. <br> <span class="text-red-500">🕛</span> Horario de Miércoles a Lunes.
</h4> </div> </div> </section>`;
}, "/Users/camilo/Documents/dev/restaurante/foot/src/sections/Hero.astro", void 0);

const PRODUCTOS = [
    {
        id: 1,
        imagen: "perro-caliente.jpeg",
        nombre: "Perro Caliente Sencillo",
        descripcion: "Hot dog estilo venezolano con salchicha, repollo, papitas al hilo, queso rallado y una combinación de salsas tradicionales.",
        precio: 2000,
        categoria: "Perros Calientes",
        ingredientesExtras: ["Queso amarillo", "Tocineta", "Aguacate", "Huevo frito"],
      },
      {
        id: 2,
        imagen: "perro-caliente.jpeg",
        nombre: "Perro Caliente Especial",
        descripcion: "Hot dog estilo venezolano con salchicha, opción de pollo desmenuzado, tocino crujiente o carne mechada, acompañado de repollo, papitas al hilo, queso rallado y una combinación de salsas tradicionales.",
        precio: 3000,
        categoria: "Perros Calientes",
        ingredientesExtras: ["Queso amarillo", "Tocineta", "Aguacate", "Huevo frito", "Carne Mechada", "Pollo Desmenuzado"],
      },
      {
        id: 3,
        imagen: "perro-caliente.jpeg",
        nombre: "Perro Caliente Mixto",
        descripcion: "Hot dog estilo venezolano con salchicha, una mezcla de pollo desmenuzado y carne mechada, acompañado de repollo, papitas al hilo, queso rallado y una combinación de salsas tradicionales.",
        precio: 4000,
        categoria: "Perros Calientes",
        ingredientesExtras: ["Queso amarillo", "Tocineta", "Aguacate", "Huevo frito", "Pollo Desmenuzado", "Carne Mechada"],
      },
      {
        id: 4,
        imagen: "hamburguesa.jpeg",
        nombre: "Hamburguesa Especial",
        descripcion: "Deliciosa hamburguesa con opción de pollo, carne de res jugosa o carne mechada, cebolla, acompañada de huevo, lechuga fresca, tomate, queso, papitas al hilo y salsas tradicionales. Todo servido en un pan suave y tostado.",
        precio: 5000,
        categoria: "Hamburguesas",
        
      },
      {
        id: 5,
        imagen: "hamburguesa-chuleta.jpg",
        nombre: "Hamburguesa de Chuleta Ahumada",
        descripcion: "Exquisita hamburguesa con chuleta ahumada, acompañada de lechuga fresca, huevo, rodajas de tomate,cebolla, queso fundido, papitas al hilo y una mezcla de salsas tradicionales. Servida en un suave pan tostado para un sabor único.",
        precio: 6000,
        categoria: "Hamburguesas",
        
      },
      {
        id: 6,
        imagen: "hamburguesa-mixta.jpeg",
        nombre: "Hamburguesa Mixta",
        descripcion: "Hamburguesa doble (res, chuleta ahumada, pollo) acompañada de lechuga fresca, huevo, tomate, cebolla, queso derretido, papitas al hilo y una mezcla de salsas tradicionales. Servida en un pan suave y tostado.",
        precio: 7000,
        categoria: "Hamburguesas",
        ingredientesExtras: ["Queso amarillo", "Tocineta", "Aguacate", "Huevo frito", "Salsa BBQ", "Queso cheddar"],
      },
      {
        id: 7,
        imagen: "hamburguesa-mixta.jpeg",
        nombre: "Hamburguesa Triple",
        descripcion: "Hamburguesa doble (res, chuleta ahumada, pollo) acompañada de lechuga fresca, huevo, tomate, cebolla, queso derretido, papitas al hilo y una mezcla de salsas tradicionales. Servida en un pan suave y tostado.",
        precio: 9000,
        categoria: "Hamburguesas",
        ingredientesExtras: ["Queso amarillo", "Tocineta", "Aguacate", "Huevo frito", "Salsa BBQ", "Queso cheddar"],
      },
      {
          id: 8,
          imagen: "arepa.jpg",
          nombre: "Arepa con Dos Rellenos",
          descripcion: "Arepa tradicional venezolana rellena con la combinación de dos ingredientes a elección: pollo desmenuzado, carne mechada, huevo frito, queso o tocineta crujiente, carne picada, cerdo picado. Servida caliente y crujiente, ideal para un desayuno o almuerzo completo.",
          precio: 2000,
          categoria: "Arepas",
          opcionesDeRelleno: ["Pollo Desmenuzado", "Carne Mechada", "Huevo Frito", "Queso", "Tocineta"],
          ingredientesExtras: ["Aguacate", "Salsa de ajo", "Queso amarillo", "Guasacaca"],
        },

    {
      id: 9,
      imagen: "cachapa-cover.jpg",
      nombre: "Cachapa Clásica",
      descripcion: "Dulce y esponjosa cachapa hecha de maíz tierno, acompañada de queso de mano fresco, fundido entre dos capas de maíz.",
      precio: 5000,
      categoria: "Cachapas",
      ingredientesExtras: ["Jamón", "Tocineta", "Queso amarillo", "Chorizo"],
    },
    {
        id: 10,
        imagen: "cachapa-cerdo.jpeg",
        nombre: "Cachapa Especial",
        descripcion: "Deliciosa cachapa venezolana hecha de maíz tierno, acompañada de queso de mano mas la opción de relleno de carne mechada, pollo picado, carne picada, cerdo o tocino.",
        precio: 6000,
        categoria: "Cachapas",
        opcionesDeRelleno: ["Carne Mechada", "Cerdo"],
        ingredientesExtras: ["Queso amarillo", "Tocineta", "Huevo frito", "Aguacate"],
      },
      {
        id: 11,
        imagen: "cachapa-mixta.webp",
        nombre: "Cachapa Super Especial",
        descripcion: "Cachapa venezolana hecha de maíz tierno, rellena con queso de mano y una combinación de dos ingredientes entre carne mechada, cerdo, pollo picado, tocino, carne picada.",
        precio: 7000,
        categoria: "Cachapas",
        ingredientesExtras: ["Queso amarillo", "Tocineta", "Huevo frito", "Aguacate"],
      },
      {
        id: 12,
        imagen: "pepito.jpg",
        nombre: "Pepito",
        descripcion: "Clásico pepito venezolano con una base de pan suave y relleno de carne de res, pollo, cerdo, tocino, huevo, lechuga, tomate, cebolla y queso cheddar, papitas al hilo y una mezcla de salsas tradicionales para darle el toque perfecto.",
        precio: 10000,
        categoria: "Pepitos",
        opcionesDeRelleno: ["Carne de Res", "Pollo", "Mixto"],
        ingredientesExtras: ["Tocineta", "Queso amarillo", "Aguacate", "Huevo frito"],
      },
      {
        id: 13,
        imagen: "bebidas.jpg",
        nombre: "Bebidas en Lata",
        descripcion: "Refrescantes bebidas en lata para acompañar tu comida. Elige entre una variedad de opciones clásicas como refrescos de Coca Cola, Pepsi, Pap, Kem Piña, Bilz.",
        precio: 1500,
        categoria: "Bebidas",
        opcionesDisponibles: ["Coca-Cola", "Pepsi", "Fanta", "Sprite", "Té Helado"],
      },
      {
        id: 13,
        imagen: "bebidas600ml.jpg",
        nombre: "Bebidas 600 ml",
        descripcion: "Refrescantes bebidas en lata para acompañar tu comida. Elige entre una variedad de opciones clásicas como refrescos de Coca Cola, Pepsi, Bilz, Pap, Kem Piña.",
        precio: 2000,
        categoria: "Bebidas",
        opcionesDisponibles: ["Coca-Cola", "Pepsi", "Fanta", "Sprite", "Té Helado"],
      },
    
    
  ];

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, description, price, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a href="#" class="flex gap-x-5 border-neutral-400 border-b-2 mt-4 p-1 hover:scale-105 md:max-w-md  "> <img${addAttribute(`/images/${image}`, "src")}${addAttribute(title, "alt")} class="w-40 h-40 rounded-lg object-cover"> <div> <h2 class="text-primary font-bold text-xl "> ${title} </h2> <p class="text-sm text-primary"> ${description} </p> <span class="text-primary font-bold text-sm">$ ${price}</span> </div> </a>`;
}, "/Users/camilo/Documents/dev/restaurante/foot/src/components/Card.astro", void 0);

const $$Products = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col md:flex-row md:flex-wrap md:justify-between mt-3 "> ${PRODUCTOS.map((producto) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "title": producto.nombre, "description": producto.descripcion, "price": producto.precio, "image": producto.imagen })}`)} </section>`;
}, "/Users/camilo/Documents/dev/restaurante/foot/src/sections/Products.astro", void 0);

const $$Promo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-yellow-400 text-center p-4 mt-6 mx-auto max-w-4xl rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"> <h2 class=" text-xl md:text-2xl font-bold text-primary">
¡Pregunta por la Promoción del día!
</h2> </section>`;
}, "/Users/camilo/Documents/dev/restaurante/foot/src/sections/Promo.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Stefy Food" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class=" md:max-w-5xl mx-auto px-2"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Promo", $$Promo, {})} ${renderComponent($$result2, "Products", $$Products, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "WhatsAppLink", $$WhatsAppLink, { "<": true, "main": true })}</main>` })}`;
}, "/Users/camilo/Documents/dev/restaurante/foot/src/pages/index.astro", void 0);

const $$file = "/Users/camilo/Documents/dev/restaurante/foot/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
