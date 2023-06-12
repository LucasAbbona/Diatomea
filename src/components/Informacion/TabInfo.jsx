import React from "react";
import TabButtons from "./TabButtons";
const TabInfo = ({
  tabButtons,
  tabInfo,
  setterTanBtnSelected,
  tabBtnSelected,
}) => {
  console.log(tabInfo);
  //   Renderizado de los botones del tab menu info
  const renderTabButtons = tabButtons.map((btn, index) => (
    <TabButtons
      textButton={btn.textBtn}
      id={btn.id}
      key={btn.textBtn + index}
      tabBtnSelected={tabBtnSelected}
      setterTanBtnSelected={setterTanBtnSelected}
    ></TabButtons>
  ));
  //   Renderizado de los la lista de pasos
  const renderLi = () =>
    tabInfo.ol.map((item, index) => <li key={index}>{item}</li>);
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 border-b-2 border-secondary-brown ">
        {renderTabButtons}
      </div>
      <div className="flex justify-center gap-12 p-24">
        <div className="flex flex-col gap-8 ">
          <h5 className=" font-fahkwang font-bold w-48 text-xl">
            {tabInfo.title}
          </h5>
          {tabInfo.text && (
            <p className=" font-fahkwang font-bold w-52 text-sm">
              {tabInfo.text}
            </p>
          )}
          {tabInfo.ol && (
            <ol className=" [&>*]:font-nunito [&>*]:text-sm [&>*]:list-decimal [&>*]:list-inside ">
              {renderLi()}
            </ol>
          )}
          {tabInfo.recom && (
            <p className=" font-fahkwang font-bold w-52 text-lg text-center self-center text-[#403F3E]">
              {tabInfo.recom}
            </p>
          )}
        </div>
        <img
          src={`../../../public/assets/${tabInfo.infoPng}.png`}
          alt=""
          className=" w-1/3"
        />
      </div>
      {tabInfo.tabPng && (
        <div className="flex flex-col items-center gap-8">
          <h6 className=" font-fahkwang font-bold w-52 text-lg text-center">
            Tabla de medidas
          </h6>
          <img
            src={`../../../public/assets/${tabInfo.tabPng}.png`}
            alt=""
            className=" w-80"
          />
        </div>
      )}
    </div>
  );
};

export default TabInfo;
