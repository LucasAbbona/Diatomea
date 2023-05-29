import React, { useEffect, useRef, useState } from "react";
// Imports buttons
import BtnSolid from "../components/Buttons/BtnSolid";
import BtnOutlined from "../components/Buttons/BtnOutlined";
// Imports carousel
import { GoPrimitiveDot } from "react-icons/go";
import Carousel from "../components/Inicio/Carousel";
import capsulasdeautor from "../assets/inicio/capsulasdeautor.png";
import joyasvalorespecial from "../assets/inicio/joyasvalorespecial.png";
import grabamosjoyeria from "../assets/inicio/grabamosjoyeria.png";
// Imports item valor banner
import ItemValor from "../components/Inicio/ItemValor";
import calidad from "../assets/inicio/calidad.svg";
import garantia from "../assets/inicio/garantia.svg";
import materiales from "../assets/inicio/materiales.svg";
import cuidado from "../assets/inicio/cuidado.svg";
// Imports services card collection
import joyasServicio from "../assets/inicio/joyasServicio.png";
import arregloServicio from "../assets/inicio/arregloServicio.png";
import grabadoServicio from "../assets/inicio/grabadoServicio.png";
import limpiezaServicio from "../assets/inicio/limpiezaServicio.png";
import CardServicio from "../components/Inicio/CardServicio.jsx";
// Imports visita nuestra tienda
import visitaTienda from "../assets/inicio/visitaTienda.png";
// Imports Diseños
import dije1 from "../assets/inicio/dije1.png";
import dije2 from "../assets/inicio/dije2.png";
import dije3 from "../assets/inicio/dije3.png";
import dije4 from "../assets/inicio/dije4.png";
import dije5 from "../assets/inicio/dije5.png";
import CardDiseño from "../components/Inicio/CardDiseño";
// Imports diatomea
import mtudiatomea from "../assets/inicio/mtudiatomea.png";
// imports valores 2
import creacionartesanal from "../assets/inicio/creacionartesanal.png";
import certificacion from "../assets/inicio/certificacion.png";
import envios from "../assets/inicio/envios.png";
// import card links
import CardLink from "../components/Inicio/CardLink";
import packaging from "../assets/inicio/packaging.png";
import giftCard from "../assets/inicio/giftCard.png";
import DraggableXaxis from "../components/Inicio/DraggableXaxis";
// imports instagram
import ig1 from "../assets/inicio/ig1.png";
import ig2 from "../assets/inicio/ig2.png";
import ig3 from "../assets/inicio/ig3.png";
import ig4 from "../assets/inicio/ig4.png";
import InstagramPost from "../components/Inicio/InstagramPost";
import FormWhatsapp from "../components/Inicio/FormWhatsapp";

const Inicio = () => {
  const [itemcarousel, setItemCarousel] = useState(0);
  const carouselCollection = [
    {
      // Cápsulas de autor
      title: "Cápsulas de autor",
      description:
        "Mira las cápsulas que diseñamos y elegí la que más se adapte a tu estilo.",
      btnText: "Ir a tienda",
      img: capsulasdeautor,
      path: `https://diatomeajoyas.empretienda.com.ar/`,
    },
    {
      // Joyas con un valor especial
      title: "Joyas con un valor especial",
      description:
        "Cada joya que creamos representa un momento de la vida que queremos dejar representado en un amuleto.",
      btnText: "Conocer más",
      img: joyasvalorespecial,
      path: ``,
    },
    {
      // Grabamos tu joyería
      title: "Grabamos tu joyería",
      description:
        "Traenos la joya que deseas grabar y dejanos ayudarte a dejar esa marca que la hace única a tu estilo.  ",
      btnText: "Quiero grabar",
      img: grabamosjoyeria,
      path: `servicios`,
    },
  ];
  const itemValorCollection1 = [
    {
      //Calidad
      text: "Calidad",
      img: calidad,
    },
    {
      //Garantia
      text: "Garantia",
      img: garantia,
    },
    {
      //Materiales
      text: "Materiales",
      img: materiales,
    },
    {
      //Cuidado
      text: "Cuidado",
      img: cuidado,
    },
  ];
  const itemValorCollection2 = [
    {
      //Creación artesanal
      text: "Creación artesanal",
      img: creacionartesanal,
    },
    {
      //Certificación de calidad
      text: "Certificación de calidad",
      img: certificacion,
    },
    {
      //Envíos
      text: "Envíos",
      img: envios,
    },
  ];
  const servicesCardCollection = [
    {
      // Joyas
      title: "Joyas personalizadas",
      img: joyasServicio,
    },
    {
      // Arreglo y restauración
      title: "Arreglo y restauración",
      img: arregloServicio,
    },
    {
      // Grabado
      title: "Grabado",
      img: grabadoServicio,
    },
    {
      // Limpieza
      title: "Limpieza",
      img: limpiezaServicio,
    },
  ];
  const diseñosCardCollection = [
    {
      title: "Alianzas mensaje",
      img: dije1,
    },
    {
      title: "Anillo Marie",
      img: dije2,
    },
    {
      title: "Collar con dije",
      img: dije3,
    },
    {
      title: "Pulsera protectora",
      img: dije4,
    },
    {
      title: "Dije con cadena",
      img: dije5,
    },
  ];
  const linkCardCollection = [
    {
      // Gift Card
      title: "Gift Cards",
      btnText: "Saber más",
      img: giftCard,
    },
    {
      // Packaging
      title: "Packaging",
      btnText: "Saber más",
      img: packaging,
    },
  ];
  const igPostCollection = [
    {
      link: `https://www.instagram.com/p/Cqx5iTMOISu/`,
      img: ig1,
    },
    {
      link: `https://www.instagram.com/p/Cqx5iTMOISu/`,
      img: ig2,
    },
    {
      link: `https://www.instagram.com/p/Cqx5iTMOISu/`,
      img: ig3,
    },
    {
      link: `https://www.instagram.com/p/Cqx5iTMOISu/`,
      img: ig4,
    },
  ];

  //para el set time out
  const test = useRef(null)

  //Iteracion del carrusel
  useEffect(() => {
    if (itemcarousel == carouselCollection.length - 1) {
      test.current = setTimeout(() => setItemCarousel(0), 5000)
    } else {
      test.current = setTimeout(() => setItemCarousel(itemcarousel + 1), 5000)
    }
  });
  // Fx que cambia de estado el index al tocar el boton del carousel
  const onClickHandlerFx = (index) => {
    clearTimeout(test.current)
    setItemCarousel(index);
  };
  // render handler carousel
  const renderBtnHandlerCarousel = carouselCollection.map((item, index) => (
    <button
      className={
        " bg-[#D9d9d9] " + (itemcarousel == index ? " h-4 w-4" : " w-3 h-3")
      }
      style={{ clipPath: "circle(50% at 50% 50%)" }}
      key={item.img + index}
      onClick={(e) => onClickHandlerFx(index)}
    ></button>
  ));
  // render items 1
  const renderItemValor1 = itemValorCollection1.map((item) => (
    <ItemValor text={item.text} img={item.img} key={item.text}></ItemValor>
  ));
  // render items 2
  const renderItemValor2 = itemValorCollection2.map((item) => (
    <ItemValor text={item.text} img={item.img} key={item.text}></ItemValor>
  ));
  // render cards servicios
  const renderServicesCard = servicesCardCollection.map((card) => (
    <CardServicio
      title={card.title}
      img={card.img}
      key={card.title}
    ></CardServicio>
  ));
  // render cards diseño
  const renderDiseñoCard = diseñosCardCollection.map((card, index) => (
    <CardDiseño
      title={card.title}
      img={card.img}
      key={card.title + index}
    ></CardDiseño>
  ));
  // render cards links
  const renderLinkCards = linkCardCollection.map((card) => (
    <CardLink
      title={card.title}
      img={card.img}
      key={card.title}
      btnText={card.btnText}
    ></CardLink>
  ));
  // render instagram post
  const renderIgPosts = igPostCollection.map((post, index) => (
    <InstagramPost
      link={post.link}
      img={post.img}
      key={post.img + index}
    ></InstagramPost>
  ));
  return (
    <section className="min-h-screen font-nunito flex flex-col items-center gap-24 pb-24 ">
      {/* CAROUSEL */}
      <article className="h-[65vh] w-full relative">
        <Carousel
          img={carouselCollection[itemcarousel].img}
          title={carouselCollection[itemcarousel].title}
          description={carouselCollection[itemcarousel].description}
          btnText={carouselCollection[itemcarousel].btnText}
          key={carouselCollection[itemcarousel].title}
          path={carouselCollection[itemcarousel].path}
          id={carouselCollection[itemcarousel].img + itemcarousel}
        ></Carousel>
        <div className="w-full flex justify-center pb-8 absolute z-20 bottom-0 gap-6 items-center">
          {renderBtnHandlerCarousel}
        </div>
      </article>
      {/* SOY DIATOMEA */}
      <article
        className="flex flex-col px-24  gap-12 items-center 
      max-[624px]:px-12 
      max-[424px]:px-4"
      >
        <h1 className="font-fahkwang font-bold text-3xl text-[#818181]">
          Soy Diatomea
        </h1>
        <p className=" text-lg text-justify">
          Explora la inspiradora historia de DIATOMEA, una marca de joyería
          artesanal que surge de la pasión por la creación y el amor por la
          orfebrería. Con un enfoque que fusiona arte y belleza en cada pieza,
          la marca ha construido un taller creativo dedicado a desarrollar su
          identidad única en el mundo de la joyería artesanal. Conoce más de
          esta historia y del apasionante camino.
        </p>
        <BtnSolid btnText={`Leer más`} path={`/QuienesSomos`}></BtnSolid>
      </article>
      {/* VALORES  */}
      <article
        className="flex justify-center items-center gap-12 font-fahkwang 
      bg-[#F7F7F7] w-full p-8 
      max-[424px]:gap-2
      max-[624px]:px-0"
      >
        {renderItemValor1}
      </article>
      {/* CARDS SERVICIOS */}
      <article
        className="flex flex-col items-center gap-8 w-[1350px] max-[1350px]:w-full 
        max-[1350px]:px-12
        max-[424px]:px-4"
      >
        <DraggableXaxis items={renderServicesCard}></DraggableXaxis>
      </article>
      {/* TIENDA */}
      <article
        style={{ backgroundImage: `url(${visitaTienda})` }}
        className="flex justify-end items-center
        w-full text-[#FFFFFF] h-[50vh] max-w-[1350px] bg-center bg-cover bg-no-repeat"
      >
        <div className="flex flex-col justify-center items-center  w-[60%] gap-8">
          <h3 className="font-fahkwang font-bold text-xl">
            Visita nuestra tienda
          </h3>
          <BtnOutlined
            btnText={"Ir a la tienda"}
            path={"https://diatomeajoyas.empretienda.com.ar/"}
          ></BtnOutlined>
        </div>
      </article>
      {/* BANNER */}
      <article
        style={{
          background: `linear-gradient(180deg, rgba(218, 198, 177, 0.94) 35.57%, rgba(218, 195, 177, 0.5) 64.03%, rgba(233, 220, 209, 0.49) 72.61%, rgba(255, 255, 255, 0) 102.64%)`,
        }}
        className="h-[50vh] w-full flex justify-center px-24"
      >
        <h2
          className=" font-fahkwang font-bold text-3xl text-[#FFFFFF] 
        text-center pt-[10%] flex flex-col gap-4"
        >
          Diseñamos tu joya única y totalmente
          <span>personalizada de manera artesanal.</span>
        </h2>
      </article>
      {/* DISEÑOS DESTACADOS */}
      <article
        className="flex flex-col items-center gap-8 w-[1350px] max-[1350px]:w-full 
        max-[1350px]:px-12
        max-[424px]:px-4"
      >
        <DraggableXaxis items={renderDiseñoCard}></DraggableXaxis>

        <BtnOutlined
          btnText={"Ver todas las creaciones"}
          path={"/Creaciones"}
          variation={"brown"}
        ></BtnOutlined>
      </article>
      {/*MATERIALIZAMOS*/}
      <article
        className="
      bg-secondary-lightBrown px-24 py-16 w-full flex justify-center
      max-[960px]:px-12
      max-[424px]:px-4"
      >
        <div
          className="max-w-[1350px] flex gap-12 justify-between items-center 
        max-[960px]:flex-col max-[960px]:w-full"
        >
          <div
            className="flex flex-col justify-center items-center gap-8 w-[60%] text-[#FFFFFF] 
          max-[960px]:w-full"
          >
            <h3 className="font-fahkwang font-bold text-2xl w-full">
              Materializamos tu diatomea
            </h3>
            <img
              src={mtudiatomea}
              alt="Foto diatomea"
              className=" min-[960px]:hidden w-full object-cover rounded shadow-[-10px_10px_25px_0px_rgba(0,0,0,0.25)]
              max-w-[500px]"
            />
            <p className="text-lg text-justify font-nunito">
              En Diatomea, te ayudamos a crear la joya ideal. Ofrecemos un
              servicio de creación de joyas personalizadas donde podés elegir
              entre una amplia variedad de materiales, metales y piedras
              preciosas para diseñar la joya perfecta para vos. Si buscás un
              regalo único para alguien que amás, podés crear una joya que
              refleje los gustos y represente a esa persona especial.
              Contactanos para comenzar a crear tu joya personalizada.
            </p>
            <BtnOutlined
              btnText={"Ir a la tienda"}
              path={"https://diatomeajoyas.empretienda.com.ar/"}
            ></BtnOutlined>
          </div>
          <div className="w-[40%] aspect-square	flex items-center max-[960px]:hidden">
            <img
              src={mtudiatomea}
              alt="Foto diatomea"
              className="w-full object-cover rounded shadow-[-10px_10px_25px_0px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </article>
      {/* VALORES  */}
      <article
        className="flex justify-between items-center gap-12 font-fahkwang 
        w-full py-8 px-48 
        max-[424px]:gap-2
        max-[800px]:px-12
        max-[624px]:px-0
        max-[624px]:justify-center"
      >
        {renderItemValor2}
      </article>
      {/* CARD LINKS */}
      <article
        className="flex justify-center items-center w-[1350px] h-[40vh] px-24 
      max-[1350px]:w-full max-[1350px]:flex-col max-[1350px]:px-0 max-[1350px]:h-[80vh]"
      >
        {renderLinkCards}
      </article>
      {/* INSTAGRAM */}
      <article
        className=" bg-primary-darkGrey flex w-full flex-col gap-12 p-16 items-center
      max-[1350px]:px-12
      max-[424px]:px-4"
      >
        <h3 className="w-full text-center font-fahkwang font-bold text-xl text-[#FFFFFF]">
          Sumate al mundo de Diatomea
        </h3>
        <div
          className="flex max-w-[1350px] justify-center gap-4
        max-[675px]:flex-wrap"
        >
          {renderIgPosts}
        </div>
        <BtnOutlined
          btnText={"Ir a instagram"}
          path={"https://www.instagram.com/diatomea.joyas/"}
        ></BtnOutlined>
      </article>
      {/* WHATSAPP  */}
      <article
        className="flex flex-col px-24  gap-12 items-center 
        max-w-[760px]
        max-[624px]:px-12 
        max-[424px]:px-4"
      >
        <h3 className="w-full text-center font-fahkwang font-bold text-2xl ">
          Contános tu historia y nosotros la creamos
        </h3>
        <p className=" text-lg font-nunito">
          Detállanos como te gustaría que sea tu joya, cual es la fuente de
          inspiración, que tipo de joya, que metal, si llevaría gemas o no.
        </p>
        <p className=" text-lg text-center font-nunito">
          ¡Todo lo que nos ayude a crear lo que te imaginas!
        </p>
        <FormWhatsapp></FormWhatsapp>
      </article>
    </section>
  );
};

export default Inicio;
