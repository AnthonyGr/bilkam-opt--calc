import ItemsRow from "../itemsRow/ItemsRow";

import steles from "../../data/steles.json";

import "./main.css";

function Main() {
  return (
    <div className="main">
      <h1 className="">
        Билкам Опт
        <br />
        <small className="text-muted">Калькулятор резных памятиков</small>
      </h1>

      <div className="container">
        <ItemsRow name={"Стела: "} data={steles}></ItemsRow>
        <ItemsRow name={"Тумба: "} data={steles}></ItemsRow>
        <ItemsRow name={"Цветник 1: "} data={steles}></ItemsRow>
        <ItemsRow name={"Цветник 2: "} data={steles}></ItemsRow>
        <ItemsRow name={"Цветник 3: "} data={steles}></ItemsRow>
        <ItemsRow name={"Цветник 4: "} data={steles}></ItemsRow>
      </div>
    </div>
  );
}

export default Main;
