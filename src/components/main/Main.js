import { useState, useEffect } from "react";
import ItemsRow from "../itemsRow/ItemsRow";
import FormsRow from "../formsRow/FormsRow";

import steles from "../../data/steles.json";
import pedestals from "../../data/pedestals.json";
import borders from "../../data/borders.json";
import forms from "../../data/forms.json";

import "./main.css";

function Main() {
  const [isCarved, setIsCarved] = useState(false);
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

  const onOrderSubmit = () => {
    alert(
      `Вы можете связаться с нами по телефонам: \n 8 963 074 44 47    8 908 939 97 86 \n opt@bilkam.ru`
    );
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
        <div class="form-check form-check-inline fs-5 me-5">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
            onChange={() => setIsCarved(false)}
          />
          <label class="form-check-label" for="inlineRadio1">
            Простой расчет
          </label>
        </div>
        <div class="form-check form-check-inline fs-5">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
            onChange={() => setIsCarved(true)}
          />
          <label class="form-check-label" for="inlineRadio2">
            Расчет с изготовлением резной формы
          </label>
        </div>

        <hr />
        <ItemsRow
          name={"Стела: "}
          type={"stele"}
          data={steles}
          onCostChange={onCostChange}
        ></ItemsRow>
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
        <hr />
        {isCarved ? (
          <FormsRow data={forms} type={"form"} onCostChange={onCostChange} />
        ) : null}
        <div className="row align-items-start">
          <div className="col">Общая стоимость:</div>
          <div className="col">{totalCost} р.</div>
          <div className="col">
            <button
              type="button"
              className="btn btn-success me-3"
              onClick={onOrderSubmit}
            >
              Заказать
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => window.location.reload()}
            >
              Сбросить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
