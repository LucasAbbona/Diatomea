import React, { useRef } from "react";
import TabButtons from "./TabButtons";
import { useDraggable } from "react-use-draggable-scroll";

const TabInfo = ({
  tabButtons,
  tabInfo,
  setterTanBtnSelected,
  tabBtnSelected,
  routInfo,
}) => {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:
  console.log(tabInfo);
  //   Renderizado de los botones del tab menu info
  const renderTabButtons = tabButtons.map((btn, index) => (
    <TabButtons
      textButton={btn.textBtn}
      id={btn.id}
      index={index}
      key={btn.textBtn + index}
      tabBtnSelected={tabBtnSelected}
      setterTanBtnSelected={setterTanBtnSelected}
      routInfo={routInfo}
    ></TabButtons>
  ));
  //   Renderizado de los la lista de pasos
  const renderLi = () =>
    tabInfo.ol.map((item, index) => <li key={index}>{item}</li>);
  return (
    <div className="flex flex-col items-center max-[920px]:w-full ">
      <div className=" w-full overflow-hidden flex justify-center">
        <div
          className="flex gap-4 border-b-2 border-secondary-brown  justify-center
          w-fit max-[920px]:justify-start 
          overflow-x-scroll  no-scrollbar "
          {...events}
          ref={ref}
        >
          {renderTabButtons}
        </div>
      </div>

      <div className="flex justify-center gap-12 p-12 max-[650px]:flex-col max-[460px]:px-2 max-[650px]:items-center">
        <div className="flex flex-col gap-8 w-80 max-[650px]:w-full">
          <h5 className=" font-fahkwang font-bold w-48 text-xl max-[650px]:w-full">
            {tabInfo.title}
          </h5>
          {tabInfo.text && (
            <p className=" font-nunito text-sm">{tabInfo.text}</p>
          )}
          {tabInfo.ol && (
            <ol className=" [&>*]:font-nunito [&>*]:text-sm [&>*]:list-decimal [&>*]:list-inside ">
              {renderLi()}
            </ol>
          )}
          {tabInfo.recom && (
            <p className=" font-fahkwang font-bold w-52 text-lg text-center self-center text-[#403F3E] max-[650px]:w-full">
              {tabInfo.recom}
            </p>
          )}
        </div>
        <img
          src={`../../../public/assets/${tabInfo.infoPng}.png`}
          alt=""
          className=" w-80 h-80 object-cover rounded object-bottom max-[920px]:w-56 max-[920px]:h-60"
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
