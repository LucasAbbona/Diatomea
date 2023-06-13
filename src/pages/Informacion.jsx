import React, { useState, useEffect } from "react";
import InformacionContainer from "../components/Informacion/InformacionContainer";
import { useParams } from "react-router-dom";

const Informacion = () => {
  const { routInfo } = useParams();
  // Informacion de medidas de joya para renderizar dinamicamente el menu
  const infoCollection = [
    {
      medidasDeJoyas: [
        {
          id: "medidasjoyas",
          title: "Medidas de joya",
          italicText:
            "Deseamos que tu joya DIATOMEA que no solo tenga valor estético y emocional, sino que también sea cómoda de usar. En definitiva que sea perfecta para vos.",
          innerText: (
            <p className=" font-nunito text-sm text-justify w-[560px] max-[920px]:w-full">
              Es muy importante saber tus medidas para que la joya se ajuste a
              vos, por eso te dejamos los siguiente datos a tener en cuenta:
              <ul className=" [&>*]:list-disc [&>*]:list-inside [&>*]:indent-4">
                <li>
                  Tu profesión o desempeño a diario para saber cual es el
                  espesor o tamaño adecuado para tu joya.
                </li>
                <li>
                  Como preferís usar esa joya, si te sentís cómodo usándola más
                  holgada o apretada.
                </li>
              </ul>
              A continuación te dejamos las guías de como tomar las medidas para
              anillos, colgantes y pulseras, con elementos que tenes a mano en
              tu hogar:
            </p>
          ),
          tabButtons: [
            {
              textBtn: "Medidas de anillos",
              id: "anillos",
            },
            {
              textBtn: "Medidas de cadenas",
              id: "cadenas",
            },
            {
              textBtn: "Medidas de pulseras",
              id: "pulseras",
            },
          ],
          tabInfo: [
            {
              title: "¿Cómo saber mi tamaño de anillo?",
              id: "anillos",
              ol: [
                "Busca un anillo que te quede cómodo.",
                "Con una regla, medí el diámetro interno del anillo.",
                "Busca en la Tabla de medidas la medida ideal de tu anillo.",
              ],
              recom: "Recomendamos siempre que el anillo quede algo holgado",
              infoPng: "infoAnillos",
              tabPng: "tablaAnillos",
            },
            {
              title: "¿Cómo saber mi tamaño de cadena?",
              id: "cadenas",
              ol: [
                "Busca un colgante que te quede cómodo.",
                "Con una regla, medí la longitud del colgante.",
                "Busca en la Tabla de medidas la medida que coincida o se acerque a la tomada del colgante.",
              ],
              text: "La medida de la cadena dependerá de tu gusto y estilo. Puedes elegir esta a partir de una cadena que ya poseas y que te guste como se ve en tí, de la siguiente manera:",
              infoPng: "infoCadenas",
              tabPng: "tablaCadenas",
            },
            {
              title: "¿Cómo saber mi tamaño de pulsera?",
              id: "pulseras",
              ol: [
                "Medí la longitud de tu muñeca con un cordón.",
                "Con una regla, medí el cortón.",
                "Busca en la Tabla de medidas la medida ideal de tu pulsera.",
              ],
              recom: "Recomendamos siempre que la pulsera quede algo holgada",
              infoPng: "infoPulseras",
              tabPng: "tablaPulseras",
            },
          ],
        },
      ],
    },
    {
      garantia: [
        {
          id: "garantia",
          title: "Información Útil",
          italicText:
            "En DIATOMEA, nos enorgullece la calidad y belleza de nuestras joyas artesanales.",
          innerText: (
            <p className=" font-nunito text-sm text-center w-[560px] max-[920px]:w-full">
              Cada pieza es creada con dedicación y atención al detalle,
              utilizando materiales de alta calidad y técnicas de orfebrería
              tradicionales. Además, ofrecemos una garantía en nuestras joyas
              para asegurarnos de que estés completamente satisfecho con tu
              compra. Sigue leyendo para conocer más sobre la calidad y garantía
              que ofrecemos en Diatomea.
            </p>
          ),
          tabButtons: [
            {
              textBtn: "Calidad",
              id: "calidad",
            },
            {
              textBtn: "Garantía",
              id: "garantia",
            },
          ],
          tabInfo: [
            {
              title: "Certificado de Calidad",
              id: "calidad",
              text: "Nos enorgullece ofrecer joyas artesanales de la más alta calidad. Todos nuestros productos están realizados en auténticos metales nobles. Trabajamos artesanalmente cada pieza en plata ley (plata 925). Por esto, contamos con un certificado de calidad que garantiza la autenticidad y la calidad de nuestras joyas. Este certificado asegura que nuestros productos han sido diseñados y elaborados con los más altos estándares de calidad y que cumplen con las expectativas de nuestros clientes más exigentes. Estamos comprometidos a ofrecer joyas que no solo sean hermosas,sino que además su calidad perdure en el tiempo.",
              infoPng: "infoCalidad",
            },
            {
              title: "Garantía",
              id: "garantia",
              text: "Podes realizar el cambio del producto cuando dicha pieza presente fallas de elaboración o materiales durante los primeros 15 días corridos desde que realizaste la compra.La presente garantía no cubre: Desgaste por uso, accidentes de la pieza como abolladuras, golpes, raspones, cortaduras, como tampoco uso inapropiado, reparaciones por terceros o tratamiento negligente. Las modificaciones que quisieras realizar en la pieza (achicar, agrandar, alargar cadenas, etc.) no están cubiertas por dicha garantía.",
              infoPng: "infoGarantia",
            },
          ],
        },
      ],
    },
    {
      regalos: [
        {
          id: "regalos",
          title: "Regalos",
          italicText:
            "¿Buscas un regalo único y especial para alguien importante? ¡Tenemos la solución perfecta para vos!",
          innerText: (
            <p className=" font-nunito text-sm text-justify w-[560px] max-[920px]:w-full">
              En DIATOMEA, ofrecemos Gift Cards que te permitirán regalar joyas
              artesanales únicas y de alta calidad a tus seres queridos. Además,
              nos aseguramos de que la experiencia de recibir una joya DIATOMEA
              sea inolvidable desde el primer momento. Por eso, hemos creado un
              Packaging Exclusivo para nuestros productos, con el objetivo de
              que la presentación sea igual de especial que la propia joya. Aquí
              te contamos un poco más sobre cómo podés adquirirlos.
            </p>
          ),
          tabButtons: [
            {
              textBtn: "Gift Card",
              id: "gift",
            },
            {
              textBtn: "Packaging Exclusivo",
              id: "packaging",
            },
          ],
          tabInfo: [
            {
              title: "Gift Card",
              id: "gift",
              text: "Con las Tarjetas de Regalo Diatomea, puedes obsequiar una joya única y dejar que esa persona elija su diseño favorito.Además, si tiene pensada una idea específica, podemos trabajar en base a ella para crear una joya que se adapte a sus expectativas. No hay nada más especial que tener una joya totalmente única. Solicitá la imagen así la compartís para regalar o retirar la gift card por el taller.",
              infoPng: "infoGift",
            },
            {
              title: "Packaging Exclusivo",
              id: "packaging",
              text: "En DIATOMEA, sabemos que la presentación de un regalo es muy importante, por eso ofrecemos la opción de añadir un packaging de diseño a tu compra. Nuestros paquetes incluyen una caja personalizada con nuestro logo y detalles artísticos cuidadosamente elegidos para realzar la belleza de nuestras joyas, realizada con madera de selección lustrada y con posibilidad de grabar en la parte interna algo especial; una frase, un nombre, palabras o una fecha. Además, nuestros empaques están hechos con materiales de alta calidad para garantizar que tus regalos lleguen y se conserven en perfecto estado y con un toque especial. Elije esta opción y sorprende a tus seres queridos con una presentación única y exclusiva.",
              infoPng: "infoPack",
            },
          ],
        },
      ],
    },
  ];

  // Buscador segun la ruta
  const findInfoParam = infoCollection.find((e) => {
    const nameArr = Object.getOwnPropertyNames(e);
    return e[nameArr][0].id == routInfo;
  });

  return (
    <section className="flex justify-center p-12 max-[650px]:px-6">
      <InformacionContainer
        obj={findInfoParam}
        routInfo={routInfo}
      ></InformacionContainer>
    </section>
  );
};

export default Informacion;
