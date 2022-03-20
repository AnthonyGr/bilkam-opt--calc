import { useState, useEffect } from "react";
import ItemsRow from "../itemsRow/ItemsRow";
import FormsRow from "../formsRow/FormsRow";

import steles from "../../data/steles.json";
import pedestals from "../../data/pedestals.json";
import borders from "../../data/borders.json";
import forms from "../../data/forms.json";

import "./main.css";

function Main() {
  const [order, setOrder] = useState({});
  const [totalCost, setTotalCost] = useState(0);

  const onCostChange = (type, cost) => {
    setOrder((prevState) => ({
      ...prevState,
      [type]: cost,
    }));
  };

  const calcOrderCost = () => {
    let cost = 0;
    for (const [key, value] of Object.entries(order)) {
      cost += +value;
    }
    setTotalCost(cost);
  };

  useEffect(() => {
    calcOrderCost();
  });

  return (
    <div className="main">
      <h1 className="">
        Билкам Опт
        <br />
        <small className="text-muted">Калькулятор резных памятиков</small>
      </h1>

      <div className="container">
        <hr />
        <ItemsRow
          name={"Стела: "}
          type={"stele"}
          data={steles}
          onCostChange={onCostChange}
        ></ItemsRow>
        <FormsRow data={forms}></FormsRow>
        <hr />
        <ItemsRow
          name={"Тумба: "}
          type={"pedestal"}
          data={pedestals}
          onCostChange={onCostChange}
        ></ItemsRow>
        <ItemsRow
          name={"Цветник 1: "}
          type={"border-1"}
          data={borders}
          onCostChange={onCostChange}
        ></ItemsRow>
        <ItemsRow
          name={"Цветник 2: "}
          type={"border-2"}
          data={borders}
          onCostChange={onCostChange}
        ></ItemsRow>
        <ItemsRow
          name={"Цветник 3: "}
          type={"border-3"}
          data={borders}
          onCostChange={onCostChange}
        ></ItemsRow>
        <ItemsRow
          name={"Цветник 4: "}
          type={"border-4"}
          data={borders}
          onCostChange={onCostChange}
        ></ItemsRow>
        <hr />
        <div className="row align-items-start">
          <div className="col">Общая стоимость:</div>
          <div className="col">{totalCost} р.</div>
          <div className="col">
            <button type="button" className="btn btn-success">
              Заказать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
