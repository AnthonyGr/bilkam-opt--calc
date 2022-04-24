import { useState, useEffect } from "react";
import ItemsRow from "../itemsRow/ItemsRow";
import FormsRow from "../formsRow/FormsRow";

import steles from "../../data/steles.json";
import stelesAll from "../../data/steles-all.json";
import pedestals from "../../data/pedestals.json";
import borders from "../../data/borders.json";
import forms from "../../data/forms.json";

import "./main.css";

function Main() {
  const [isCarved, setIsCarved] = useState(false);
  const [isRetail, setIsRetail] = useState(false);
  const [markUp, setMarkUp] = useState(1.5);
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

  const onCarvedToggle = () => {
    onCostChange("form", 0);
    onCostChange("stele", 0);
    setIsCarved(!isCarved);
  };

  const onRetailToggle = () => {
    setIsRetail(!isRetail);
  };

  useEffect(() => {
    calcOrderCost();
  });

  const stelesType = isCarved ? steles : stelesAll;

  return (
    <div className="container-lg main">
      <h1 className="text-center">
        Билкам Опт
        <br />
        <small className="text-muted">Калькулятор памятиков</small>
      </h1>

      <hr />
      <div className="row align-items-center ">
        <div className="col-lg-6 col-sm-12 col-xs-12">
          {" "}
          <div className="form-check form-switch text-start fs-5">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={onCarvedToggle}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Изготовление резной формы
            </label>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 col-xs-12">
          {" "}
          <div className="form-check form-switch text-start fs-5">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={onRetailToggle}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Расчет розничной стоимости
            </label>
            {isRetail ? (
              <input
                className="fs-5 ms-3"
                id="numberStepper"
                type="number"
                step="0.1"
                value={markUp}
                onChange={(e) => setMarkUp(e.target.value)}
                min="1"
                max="2"
              />
            ) : null}
          </div>
        </div>
      </div>

      <hr />
      <div className="row align-items-center test text-secondary mb-3">
        <div className="col-8"></div>
        <div className="col-2">Опт</div>
        <div className="col-2">{isRetail ? `Розница` : null}</div>
      </div>
      <ItemsRow
        name={"Стела: "}
        type={"stele"}
        data={isCarved ? steles : stelesAll}
        onCostChange={onCostChange}
        markUp={markUp}
        isRetail={isRetail}
      ></ItemsRow>
      <ItemsRow
        name={"Тумба: "}
        type={"pedestal"}
        data={pedestals}
        onCostChange={onCostChange}
        markUp={markUp}
        isRetail={isRetail}
      ></ItemsRow>
      <ItemsRow
        name={"Цветник 1: "}
        type={"border-1"}
        data={borders}
        onCostChange={onCostChange}
        markUp={markUp}
        isRetail={isRetail}
      ></ItemsRow>
      <ItemsRow
        name={"Цветник 2: "}
        type={"border-2"}
        data={borders}
        onCostChange={onCostChange}
        markUp={markUp}
        isRetail={isRetail}
      ></ItemsRow>
      <ItemsRow
        name={"Цветник 3: "}
        type={"border-3"}
        data={borders}
        onCostChange={onCostChange}
        markUp={markUp}
        isRetail={isRetail}
      ></ItemsRow>
      <hr />
      {isCarved ? (
        <FormsRow
          data={forms}
          type={"form"}
          onCostChange={onCostChange}
          markUp={markUp}
          isRetail={isRetail}
        />
      ) : null}
      <div className="row align-items-start fs-4 secondary mb-5">
        <div className="col"></div>
        <div className="col">Итоговая стоимость:</div>
        <div className="col">
          <div className="row align-items-start fs-4">
            {" "}
            <div className="col">{totalCost} р.</div>
            <div className="col">
              {isRetail ? Math.round(totalCost * markUp) + ` р.` : null}
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-start fs-4 secondary">
        <div className="col text-end">
          <button
            type="button"
            className="btn btn-success me-3"
            onClick={onOrderSubmit}
          >
            Заказать
          </button>
        </div>
        <div className="col text-start">
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
  );
}

export default Main;
