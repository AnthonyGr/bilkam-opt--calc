const ItemsRow = ({ name, data }) => {
  const fillSelect = () => {
    const items = data.map((item, i) => <option key={i}>{item.name}</option>);
    return (
      <select
        className="form-select mb-10"
        aria-label="Default select example"
        id="stella"
      >
        {items}
      </select>
    );
  };

  const element = fillSelect();
  return (
    <div className="row align-items-start">
      <div className="col">{name}</div>
      <div className="col">{element}</div>
      <div className="col">10 000</div>
    </div>
  );
};

export default ItemsRow;
