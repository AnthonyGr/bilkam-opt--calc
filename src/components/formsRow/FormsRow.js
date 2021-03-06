import { useState, useEffect } from "react";

const FormsRow = ({ data, type, onCostChange, markUp, isRetail }) => {
  const [currentForm, setCurrentForm] = useState();
  const [currentPrice, setCurrentPrice] = useState(0);
  const [currentFormSizes, setCurrentFormSizes] = useState();

  const fillForms = () => {
    let forms = [];
    data.forEach((item) => {
      if (!forms.includes(item.name)) {
        forms.push(item.name);
      }
    });

    const items = forms.map((item, i) => (
      <option key={i} value={item}>
        {item}
      </option>
    ));

    return (
      <div className="form-floating">
        <select
          className="form-select mb-3"
          aria-label="Default select example"
          onChange={onFormSelect}
          value={currentForm}
        >
          <option>Не выбрано</option>
          {items}
        </select>
        <label className="fs-6" htmlFor="floatingSelect">
          Изготовление формы:
        </label>
      </div>
    );
  };

  const onFormSelect = (e) => {
    setCurrentPrice(0);
    onCostChange("form", 0);
    setCurrentForm(e.target.value);
  };

  const fillSizes = () => {
    console.log(type);
    const items = data.map((item, i) => {
      if (item.name === currentForm) {
        return (
          <option key={i} value={item.size} data-price={item.price}>
            {item.size}
          </option>
        );
      } else {
        return null;
      }
    });

    return (
      <div className="form-floating">
        <select
          className="form-select mb-3"
          id="floatingSelect"
          aria-label="Default select example1"
          data-type={type}
          onChange={onSizeSelect}
        >
          <option data-price="0">Не выбрано</option>
          {items}
        </select>
        <label className="fs-6" htmlFor="floatingSelect">
          Размер стелы:
        </label>
      </div>
    );
  };

  const onSizeSelect = (e) => {
    const price = e.target[e.target.selectedIndex].getAttribute("data-price");
    setCurrentPrice(price);
    onCostChange(e.target.getAttribute("data-type"), price);
  };

  useEffect(() => {
    const formsSizes = fillSizes();
    setCurrentFormSizes(formsSizes);
  }, [currentForm]);

  const formsSelect = fillForms();
  return (
    <>
      <div className="row align-items-start d-flex align-items-center">
        <div className="col-md-4 col-8 fs-5">{formsSelect}</div>
        <div className="col-md-4 col-8">{currentFormSizes}</div>
        <div className="col-md-4 col-4 fs-5 text-secondary ">
          {" "}
          <div className="col fs-5 text-secondary">
            <div className="row align-items-start">
              <div className="col">{currentPrice}</div>
              <div className="col">
                {isRetail ? Math.round(currentPrice * markUp) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
export default FormsRow;
