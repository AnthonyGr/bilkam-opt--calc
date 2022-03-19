import { useState } from "react";

const ItemsRow = ({ name, type, data, onCostChange }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const fillSelect = () => {
    const items = data.map((item, i) => (
      <option key={i} value={item.price}>
        {item.name}
      </option>
    ));

    return (
      <select
        className="form-select mb-10"
        aria-label="Default select example"
        data-type={type}
        onChange={onSelectChange}
        value={selectedItem}
      >
        <option value="0">Не выбрано</option>
        {items}
      </select>
    );
  };

  const onSelectChange = (e) => {
    setSelectedItem(e.target.value);
    onCostChange(e.target.getAttribute("data-type"), e.target.value);
  };

  const element = fillSelect();
  return (
    <div className="row align-items-start">
      <div className="col">{name}</div>
      <div className="col">{element}</div>
      <div className="col">{selectedItem}</div>
    </div>
  );
};

export default ItemsRow;
