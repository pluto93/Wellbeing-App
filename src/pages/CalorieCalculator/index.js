import { React, useState } from "react";

const CalorieCalculator = () => {
  const [pizzaCount, setPizzaCount] = useState(0);
  const [pastaCount, setPastaCount] = useState(0);
  const [sushiCount, setSushiCount] = useState(0);
  const [eggCount, setEggCount] = useState(0);
  const [chickenCount, setChickenCount] = useState(0);
  const [pizzaPrice, setPizzaPrice] = useState(0);
  const [pastaPrice, setPastaPrice] = useState(0);
  const [sushiPrice, setSushiPrice] = useState(0);
  const [eggPrice, setEggPrice] = useState(0);
  const [chickenPrice, setChickenPrice] = useState(0);
  const [mealTotal, setMealTotal] = useState(0);
  const [output, setOutput] = useState("");

  let pizzaTestPrice = 266;
  function pizzaIncrement() {
    setPizzaCount(function (prevCount) {
      return (prevCount += 1);
    });
    setPizzaPrice(pizzaPrice + pizzaTestPrice);
    setMealTotal(function (prevMeal) {
      return (prevMeal += pizzaTestPrice);
    });
  }
  let pastaTestPrice = 655;
  function pastaIncrement() {
    setPastaCount(function (prevCount) {
      return (prevCount += 1);
    });
    setPastaPrice(pastaPrice + pastaTestPrice);
    setMealTotal(function (prevMeal) {
      return (prevMeal += pastaTestPrice);
    });
  }

  let sushiTestPrice = 297;
  function sushiIncrement() {
    setSushiCount(function (prevCount) {
      return (prevCount += 1);
    });
    setSushiPrice(sushiPrice + sushiTestPrice);
    setMealTotal(function (prevMeal) {
      return (prevMeal += sushiTestPrice);
    });
  }

  let eggCalories = 78;
  function eggIncrement() {
    setEggCount(function (prevCount) {
      return (prevCount += 1);
    });
    setEggPrice(eggPrice + eggCalories);
    setMealTotal(function (prevMeal) {
      return (prevMeal += eggCalories);
    });
  }

  let chickenCalories = 2;
  function chickenIncrement() {
    setChickenCount(function (prevCount) {
      return (prevCount += 1);
    });
    setChickenPrice(chickenPrice + chickenCalories);
    setMealTotal(function (prevMeal) {
      return (prevMeal += chickenCalories);
    });
  }

  let decrementPizza;
  if (pizzaPrice > 0) {
    decrementPizza = pizzaPrice - pizzaTestPrice;
  } else {
    decrementPizza = pizzaPrice;
  }

  let decrementPasta;
  if (pastaPrice > 0) {
    decrementPasta = pastaPrice - pastaTestPrice;
  } else {
    decrementPasta = pastaPrice;
  }

  let decrementSushi;
  if (sushiPrice > 0) {
    decrementSushi = sushiPrice - sushiTestPrice;
  } else {
    decrementSushi = sushiPrice;
  }

  let decrementEgg;
  if (eggPrice > 0) {
    decrementEgg = eggPrice - eggCalories;
  } else {
    decrementEgg = eggPrice;
  }

  let decrementChicken;
  if (chickenPrice > 0) {
    decrementChicken = chickenPrice - chickenCalories;
  } else {
    decrementChicken = chickenPrice;
  }

  function pizzaDecrement() {
    setPizzaCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
    setPizzaPrice(decrementPizza);
  }
  function pastaDecrement() {
    setPastaCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
    setPastaPrice(decrementPasta);
  }
  function sushiDecrement() {
    setSushiCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
    setSushiPrice(decrementSushi);
  }

  function eggDecrement() {
    setEggCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
    setEggPrice(decrementEgg);
  }

  function chickenDecrement() {
    setChickenCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
    setChickenPrice(decrementChicken);
  }

  const renderResult = () => {
    if (pizzaPrice > 0) {
      setOutput(`You Have Took ${pizzaPrice} Calories`);
    } else if (pastaPrice > 0) {
      setOutput(`You Have Took ${pastaPrice} Calories`);
    } else if (sushiPrice > 0) {
      setOutput(`You Have Took ${sushiPrice} Calories`);
    } else if (eggPrice > 0) {
      setOutput(`You Have Took ${eggPrice} Calories`);
    } else if (chickenPrice > 0) {
      setOutput(`You Have Took ${chickenPrice} Calories`);
    } else {
      setOutput(`*Please Select Atleast 1 Item`);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px 70px",
          borderRadius: "10px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <div style={{ marginBottom: "40px", color: "#4065FC" }}>
          <h2>Calorie Calculator</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <div>
            <p>
              <span
                style={{ fontSize: "1.3rem", fontWeight: "500", color: "#222" }}
              >
                Pizza
              </span>
              (Large Slice)
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <div>
              <button
                onClick={pizzaDecrement}
                style={{
                  borderRadius: "3px",
                  border: "none",
                  backgroundColor: "#4065FC",
                  color: "#fff",
                  padding: "3px 8px",
                  cursor: "pointer",
                }}
              >
                -
              </button>
            </div>
            <div>
              <p>{pizzaCount}</p>
            </div>
            <div>
              <button
                onClick={() => pizzaIncrement()}
                style={{
                  borderRadius: "3px",
                  border: "none",
                  backgroundColor: "#4065FC",
                  color: "#fff",
                  padding: "3px 7px",
                  cursor: "pointer",
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <div>
            <p>
              <span
                style={{ fontSize: "1.3rem", fontWeight: "500", color: "#222" }}
              >
                Pasta
              </span>{" "}
              (500 Grams)
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <div>
              <button
                onClick={pastaDecrement}
                style={{
                  borderRadius: "3px",
                  border: "none",
                  backgroundColor: "#4065FC",
                  color: "#fff",
                  padding: "3px 8px",
                  cursor: "pointer",
                }}
              >
                -
              </button>
            </div>
            <div>
              <p>{pastaCount}</p>
            </div>
            <div>
              <button
                onClick={pastaIncrement}
                style={{
                  borderRadius: "3px",
                  border: "none",
                  backgroundColor: "#4065FC",
                  color: "#fff",
                  padding: "3px 7px",
                  cursor: "pointer",
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <div>
            <p>
              <span
                style={{ fontSize: "1.3rem", fontWeight: "500", color: "#222" }}
              >
                Sushi
              </span>{" "}
              (Piece)
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <div>
              <button
                onClick={sushiDecrement}
                style={{
                  borderRadius: "3px",
                  border: "none",
                  backgroundColor: "#4065FC",
                  color: "#fff",
                  padding: "3px 8px",
                  cursor: "pointer",
                }}
              >
                -
              </button>
            </div>
            <div>
              <p>{sushiCount}</p>
            </div>
            <div>
              <button
                onClick={sushiIncrement}
                style={{
                  borderRadius: "3px",
                  border: "none",
                  backgroundColor: "#4065FC",
                  color: "#fff",
                  padding: "3px 7px",
                  cursor: "pointer",
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <div>
            <p>
              <span
                style={{ fontSize: "1.3rem", fontWeight: "500", color: "#222" }}
              >
                Egg
              </span>{" "}
              (Piece)
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <div>
              <button
                onClick={eggDecrement}
                style={{
                  borderRadius: "3px",
                  border: "none",
                  backgroundColor: "#4065FC",
                  color: "#fff",
                  padding: "3px 8px",
                  cursor: "pointer",
                }}
              >
                -
              </button>
            </div>
            <div>
              <p>{eggCount}</p>
            </div>
            <div>
              <button
                onClick={eggIncrement}
                style={{
                  borderRadius: "3px",
                  border: "none",
                  backgroundColor: "#4065FC",
                  color: "#fff",
                  padding: "3px 7px",
                  cursor: "pointer",
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div>
            <p>
              <span
                style={{ fontSize: "1.3rem", fontWeight: "500", color: "#222" }}
              >
                Chicken
              </span>{" "}
              (100 Grams)
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <div>
              <button
                onClick={chickenDecrement}
                style={{
                  borderRadius: "3px",
                  border: "none",
                  backgroundColor: "#4065FC",
                  color: "#fff",
                  padding: "3px 8px",
                  cursor: "pointer",
                }}
              >
                -
              </button>
            </div>
            <div>
              <p>{chickenCount}</p>
            </div>
            <div>
              <button
                onClick={chickenIncrement}
                style={{
                  borderRadius: "3px",
                  border: "none",
                  backgroundColor: "#4065FC",
                  color: "#fff",
                  padding: "3px 7px",
                  cursor: "pointer",
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div>
          <button
            style={{
              backgroundColor: "#4065FC",
              color: "#fff",
              outline: "none",
              border: "none",
              padding: "12px 20px",
              borderRadius: "3px",
              cursor: "pointer",
              margin: "10px 0px",
              fontSize: "1rem",
              borderRadius: "25px",
            }}
            className="buttonHover"
            onClick={renderResult}
          >
            Calculate Calories
          </button>
          <div>
            <h3 style={{ color: "#222" }}>{output}</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default CalorieCalculator;
