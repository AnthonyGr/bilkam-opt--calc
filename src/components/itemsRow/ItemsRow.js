import { useState } from "react";

const ItemsRow = ({ name, type, data, onCostChange, markUp, isRetail }) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);

  const fillSelect = () => {
    const items = data.map((item, i) => (
      <option key={i} data-price={item.price} value={item.name}>
        {item.name}
      </option>
    ));

    return (
      <select
        className="form-select mb-3"
        aria-label="Default select example"
        data-type={type}
        onChange={onSelectChange}
        value={selectedItem}
      >
        <option data-price="0">Не выбрано</option>
        {items}
      </select>
    );
  };

  const onSelectChange = (e) => {
    const price = e.target[e.target.selectedIndex].getAttribute("data-price");
    setSelectedItem(e.target.value);
    setCurrentPrice(price);
    onCostChange(e.target.getAttribute("data-type"), price);
  };

  const element = fillSelect();
  return (
    <div className="row align-items-start">
      <div className="col fs-5">{name}</div>
      <div className="col">{element}</div>
      <div className="col fs-5 text-secondary">
        <div className="row align-items-start">
          <div className="col">{currentPrice}</div>
          <div className="col">
            {isRetail ? Math.round(currentPrice * markUp) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsRow;
