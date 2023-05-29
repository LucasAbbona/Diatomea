import React, { useEffect, useState } from "react";
import BtnSolid from "../Buttons/BtnSolid";

const FormWhatsapp = () => {
  //   Estado para form wpp
  const [formWpp, setFormWpp] = useState({
    user: "",
    mail: "",
    tel: "",
    msg: "",
  });
  //   Validacion form
  const [isValidForm, setIsValidForm] = useState();

  const handleChangeFx = (x) => {
    setFormWpp({ ...formWpp, [x.name]: x.value });
  };

  const number = `5491137603895`;

  const handleSendWpp = (form) => {
    let texto =
      `Nombre: ${form.user}` +
      `%0A` +
      `Email: ${form.mail}` +
      `%0A` +
      `Teléfono: ${form.tel}` +
      `%0A` +
      `Mensaje: ${form.msg}`;
    return `https://wa.me/${number}?text=${texto}`;
  };

  useEffect(() => {
    if (
      !formWpp.user.length ||
      !formWpp.mail.length ||
      !formWpp.tel.length ||
      !formWpp.msg.length
    ) {
      setIsValidForm(false);
    } else {
      setIsValidForm(true);
    }
  }, [formWpp]);

  return (
    <div className="flex flex-col gap-12 w-full items-center">
      <div
        className="flex flex-col gap-12 w-full items-center
      [&>*]:border-b-2 [&>*]:border-secondary-darkBrown [&>*]:w-full [&>*]:outline-0
      [&>textarea]:resize-none [&>textarea]:h-44"
      >
        <input
          name="user"
          type="text"
          placeholder="Nombre y apellido"
          value={formWpp.user}
          onChange={(e) => handleChangeFx(e.target)}
        />
        <input
          name="mail"
          type="email"
          placeholder="Email"
          value={formWpp.mail}
          onChange={(e) => handleChangeFx(e.target)}
        />
        <input
          name="tel"
          type="number"
          placeholder="Teléfono"
          value={formWpp.tel}
          onChange={(e) => handleChangeFx(e.target)}
          className=" [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <textarea
          name="msg"
          type="text"
          placeholder="Tu historia"
          value={formWpp.msg}
          onChange={(e) => handleChangeFx(e.target)}
        />
      </div>
      <BtnSolid
        btnText={"Enviar a whatsapp"}
        path={isValidForm ? handleSendWpp(formWpp) : "#"}
        disabled={!isValidForm}
      ></BtnSolid>
    </div>
  );
};

export default FormWhatsapp;
