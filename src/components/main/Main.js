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
    <div className="main">
      <h1 className="">
        Билкам Опт
        <br />
        <small className="text-muted">Калькулятор памятиков</small>
      </h1>

      <div className="container">
        <hr />
        <div className="row align-items-start">
          <div className="col">
            {" "}
            <div className="form-check form-switch fs-5 text-start">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={onCarvedToggle}
              />
              <label className="form-check-label" for="flexSwitchCheckDefault">
                Изготовление резной формы
              </label>
            </div>
          </div>
          <div className="col">
            {" "}
            <div className="form-check form-switch fs-5 text-start">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={onRetailToggle}
              />
              <label className="form-check-label" for="flexSwitchCheckDefault">
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
          {/* <div className="col">
            <label className="form-check-label fs-5" for="numberStepper">
              Розничная наценка:&nbsp;&nbsp;
            </label>
            <input
              className="fs-5"
              id="numberStepper"
              type="number"
              step="0.1"
              value={markUp}
              onChange={(e) => setMarkUp(e.target.value)}
              min="1"
              max="2"
            />
          </div> */}
        </div>

        <hr />
        <div className="row align-items-start fs-5 secondary">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col">
            <div className="row align-items-start fs-5 text-secondary mb-3">
              {" "}
              <div className="col">Оптовая</div>
              <div className="col">{isRetail ? `Розничная` : null}</div>
            </div>
          </div>
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
                {isRetail ? Math.round(totalCost * markUp) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-start fs-4 secondary">
          <div className="col"></div>
          <div className="col">
            {" "}
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
          <div className="col">
            <div className="row align-items-start fs-4">
              {" "}
              <div className="col"></div>
              <div className="col"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
