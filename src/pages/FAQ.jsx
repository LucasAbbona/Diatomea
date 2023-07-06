import { Link } from "react-router-dom";
import AccordionComponenet from "../components/Accordion";

const Faq = () => {
  const FAQ = [
    {
      title: "¿Cuál es el tiempo de demora que lleva personalizar una joya?",
      text: (
        <p>
          El tiempo de demora dependerá de la complejidad de la pieza que se
          encargue. Por lo general el tiempo es de 7 a 10 días hábiles, pero
          para saber con exactitud le pedimos que consulte.
        </p>
      ),
    },
    {
      title: "¿Qué medios de pago recibís?",
      text: (
        <p>
          Recibimos efectivo, transferencias o tarjetas de crédito a través de
          mercado pago.
        </p>
      ),
    },
    {
      title: "¿Trabajas con otros materiales que no sea plata u oro?",
      text: <p>No, solo trabajamos con plata 925 y con oro.</p>,
    },
    {
      title: "¿Qué tipo de arreglos realizan?",
      text: (
        <p>
          Primero evaluamos la joya para su posible arreglo o restauración, esto
          lo hacemos mediante imágenes o de manera personal. Solo arreglamos
          joyas que sean de plata y/u oro.
        </p>
      ),
    },
    {
      title: "¿Cómo tomo las medidas para mi joya?",

      text: (
        <p>
          Para saber cual es la medida de tu joya ideal te dejamos algunos datos
          para tener en cuenta: Tu profesión o desempeño a diario para saber
          cual es el espesor o tamaño adecuado para tu joya y como preferís usar
          esa joya, si te sentís cómodo usándola más holgada o apretada. En el
          siguiente enlace encontrarás guías de cómo tomar las medidas para
          anillos, colgantes y pulseras, con elementos que tenes a mano en tu
          hogar:{" "}
          <Link className=" underline" to={"/Informacion/medidasjoyas"}>
            Medidas
          </Link>
        </p>
      ),
    },
    {
      title: "¿Cómo limpio mis joyas?",
      text: (
        <p>
          Puedes limpiar tus joyas con un paño de tela tipo gamuza. Para cadenas
          puedes utilizar un cepillo de dientes suave con bicarbonato diluido en
          agua y frotar estas suavemente hasta que puedas observar que esta
          limpia. Este tipo de limpieza no se recomienda para piezas con piedras
          o gemas.
        </p>
      ),
    },
    {
      title: "¿Puedo grabar lo que sea?",
      text: (
        <p>
          No, necesitamos ver la característica de la joya para determinar el
          tipo de grabado. Existe un máximo de caracteres o símbolos de acuerdo
          al tamaño y criterio estético de cada joya. Además, en caso de que
          quieras grabar palabras, se elige una tipo de fuente y no se pueden
          combinar. Encontrará más información sobre este servicio en el
          siguiente enlace:{" "}
          <Link className=" underline" to={"/Servicios/Grabaciones"}>
            Grabado
          </Link>
        </p>
      ),
    },
    {
      title: "¿Hacen envíos?",
      text: "Si.",
    },
    {
      title: "¿Los productos tienen garantía?",
      text: (
        <div className=" flex flex-col gap-2">
          <p>
            Si, los productos cuentan con una garantía. Con esta podes realizar
            el cambio del producto si este presenta fallas de elaboración o de
            materiales durante los primeros 15 días corridos después de
            realizada la compra.{" "}
          </p>{" "}
          <p> La garantía no cubre: </p>{" "}
          <p>
            {" "}
            Desgaste por uso, accidentes de la pieza como abolladuras, golpes,
            raspones, cortaduras, como tampoco uso inapropiado, reparaciones de
            terceros o tratamiento negligente.{" "}
          </p>{" "}
          La garantía tampoco cubre modificaciones posteriores que se le quiera
          realizar a la pieza como achicar, alargar, agrandar, etc.",
        </div>
      ),
    },
    {
      title: "¿Con qué gemas/piedras trabajas?",
      text: "Usamos todo tipo de gemas y piedras naturales. De acuerdo a cual desees usar o para consultar la disponibilidad de estas te pedimos que nos consultes por Whatsapp o a nuestro correo: diatomeajoyas@gmail.com",
    },
    {
      title: "¿Qué es el certificado de calidad?",
      text: "El certificado de calidad de cada producto acredita que estos están realizados con auténticos metales nobles.",
    },
    {
      title: "¿Puedo devolver o cambiar un producto? ",
      text: (
        <div className=" flex flex-col gap-2">
          <p>
            Si, puedes realizar el cambio o devolución del producto, dentro de
            los 10 días de realizada la compra, presentando:
          </p>{" "}
          <p>- Garantía del producto</p> <p>- Etiqueta correspondiente</p>{" "}
          <p>- La joya debe estar dentro de su packaging.</p>{" "}
          <p>- La joya no debe presentar uso.</p>{" "}
          <p>
            En caso del cambio, si al momento de entregar la pieza se encuentre
            fuera de su packaging, sucia, rayada o con marcas visibles de uso,
            no podremos realizar el cambio de la misma, anulando dicha acción y
            restituyendo el producto al comprador con los gastos que implique.
          </p>{" "}
          <p>Las piezas personalizadas NO tienen cambio.</p>
          <p>
            En cuanto a las devoluciones, estas se permiten en caso de que la
            joya presente fallas en su confección o en los materiales.
          </p>
        </div>
      ),
    },
    {
      title: "¿Por dónde me puedo comunicar si tengo una duda o problema? ",
      text: "Puedes comunicarte con nosotros a nuestro Whatsapp (+54 351 206-9812) o a nuestro correo diatomeajoyas@gmail.com.",
    },
  ];
  const renderFAQ = FAQ.map((item, index) => (
    <AccordionComponenet
      key={index}
      title={item.title}
      description={item.text}
    />
  ));

  return (
    <div className="w-full">
      <div className="w-2/3 mx-auto flex flex-col items-center gap-2 my-20">
        <p className="text-3xl text-center text-primary-darkGrey font-semibold">
          Preguntas frecuentes (FAQ){" "}
        </p>
        <div className="h-0.5 w-full lg:w-5/12 bg-secondary-darkBrown"></div>
        <p className="text-sm md:w-4/12 text-center text-primary-darkGrey mt-5">
          Encuentra la información a las dudas que puedas tener sobre nuestros
          productos y servicios.
        </p>
      </div>

      {/* Accordion */}
      <div className="w-full px-5 md:px-20 flex flex-col gap-8">
        {renderFAQ}
      </div>

      {/* Contact */}
      <div className="md:w-2/3 mx-auto my-20">
        <p className="text-xl font-semibold text-center">
          ¿No encontrarte la respuesta a tu duda o problema?
          <br />
          ¡No te preocupes!{" "}
        </p>
        <p className="w-2/3 text-center md:w-2/5 mx-auto mt-8 text-sm">
          Comunícate con nosotros a través de Whatsapp o a nuestro correo y te
          responderemos en la brevedad.
        </p>
      </div>
    </div>
  );
};

export default Faq;
