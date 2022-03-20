import { useState, useEffect } from "react";

const FormsRow = ({ data }) => {
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
      <select
        className="form-select mb-3"
        aria-label="Default select example"
        onChange={onFormSelect}
        value={currentForm}
      >
        <option>Не выбрано</option>
        {items}
      </select>
    );
  };

  const onFormSelect = (e) => {
    setCurrentPrice(0);
    setCurrentForm(e.target.value);
  };

  const fillSizes = () => {
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
      <select
        className="form-select mb-3"
        aria-label="Default select example"
        onChange={onSizeSelect}
      >
        <option data-price="0">Не выбрано</option>
        {items}
      </select>
    );
  };

  const onSizeSelect = (e) => {
    setCurrentPrice(
      e.target[e.target.selectedIndex].getAttribute("data-price")
    );
  };

  useEffect(() => {
    const formsSizes = fillSizes();
    setCurrentFormSizes(formsSizes);
  }, [currentForm]);

  const formsSelect = fillForms();
  return (
    <div className="row align-items-start">
      <div className="col fs-5">{formsSelect}</div>
      <div className="col">{currentFormSizes}</div>
      <div className="col fs-5 text-secondary">{currentPrice}</div>
    </div>
  );
};
export default FormsRow;
