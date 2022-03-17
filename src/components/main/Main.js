import "./main.css";

function Main() {
  return (
    <div className="main">
      <h1 className="">
        Билкам Опт
        <br />
        <small className="text-muted">Калькулятор резных памятиков</small>
      </h1>

      <div class="container">
        <div class="row align-items-start">
          <div class="col">Cтела:</div>
          <div class="col">
            <select
              className="form-select mb-10"
              aria-label="Default select example"
              id="stella"
            >
              <option selected>Выберите name</option>
              <option value="1">800*400*50</option>
              <option value="2">1000*500*50</option>
              <option value="3">1100*600*70</option>
            </select>
          </div>
          <div class="col">10 000</div>
        </div>
        <div class="row align-items-start">
          <div class="col">Тумба:</div>
          <div class="col">
            <select
              className="form-select mb-10"
              aria-label="Default select example"
              id="stella"
            >
              <option selected>Выберите name</option>
              <option value="1">800*400*50</option>
              <option value="2">1000*500*50</option>
              <option value="3">1100*600*70</option>
            </select>
          </div>
          <div class="col">5 000</div>
        </div>
        <div class="row align-items-start">
          <div class="col">Цветник 1:</div>
          <div class="col">
            <select
              className="form-select mb-10"
              aria-label="Default select example"
              id="stella"
            >
              <option selected>Выберите name</option>
              <option value="1">800*400*50</option>
              <option value="2">1000*500*50</option>
              <option value="3">1100*600*70</option>
            </select>
          </div>
          <div class="col">1350</div>
        </div>
        <div class="row align-items-start">
          <div class="col">Цветник 2:</div>
          <div class="col">
            <select
              className="form-select mb-10"
              aria-label="Default select example"
              id="stella"
            >
              <option selected>Выберите name</option>
              <option value="1">800*400*50</option>
              <option value="2">1000*500*50</option>
              <option value="3">1100*600*70</option>
            </select>
          </div>
          <div class="col">1350</div>
        </div>
        <div class="row align-items-start">
          <div class="col">Цветник 3:</div>
          <div class="col">
            <select
              className="form-select mb-10"
              aria-label="Default select example"
              id="stella"
            >
              <option selected>Выберите name</option>
              <option value="1">800*400*50</option>
              <option value="2">1000*500*50</option>
              <option value="3">1100*600*70</option>
            </select>
          </div>
          <div class="col">800</div>
        </div>
        <div class="row align-items-start">
          <div class="col">Резная форма:</div>
          <div class="col">
            <select
              className="form-select mb-10"
              aria-label="Default select example"
              id="stella"
            >
              <option selected>Выберите name</option>
              <option value="1">800*400*50</option>
              <option value="2">1000*500*50</option>
              <option value="3">1100*600*70</option>
            </select>
          </div>
          <div class="col">800</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
