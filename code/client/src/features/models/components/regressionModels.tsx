import "../assets/css/models.css";
import { useState } from "react";

const RegressionModels = () => {
  const [toggle, setToggle] = useState(1);
    return (
        <div className="sheets">
              <ul className="d-flex model-tabs-list">
                <li
                  className={`flex-fill ${toggle==1?'model-selected':'model-tab'}`}
                  onClick={() => setToggle(1)}
                >
                  Linear Regression
                </li>
                <li
                  className={`flex-fill ${toggle==2?'model-selected':'model-tab'}`}
                  onClick={() => setToggle(2)}
                >
                  Decision Tree
                </li>
                <li
                  className={`flex-fill ${toggle==3?'model-selected':'model-tab'}`}
                  onClick={() => setToggle(3)}
                >
                  K Nearest Neighbour
                </li>
                <li
                  className={`flex-fill ${toggle==4?'model-selected':'model-tab'}`}
                  onClick={() => setToggle(4)}
                >
                  Support Vector Machines
                </li>
                <li
                  className={`flex-fill ${toggle==5?'model-selected':'model-tab'}`}
                  onClick={() => setToggle(5)}
                >
                  XGBoost
                </li>
              </ul>
            <div className="d-flex align-items center justify-content-center">
              <div className={toggle === 1 ? "show-model" : "model"}>
                <h1>This is Linear Regression</h1>
              </div>
              <div className={toggle === 2 ? "show-model" : "model"}>
                <h1>This is Decision Tree</h1>
              </div>
              <div className={toggle === 3 ? "show-model" : "model"}>
                <h1>This is K Nearest Neigbours</h1>
              </div>
              <div className={toggle === 4 ? "show-model" : "model"}>
                <h1>This is Support Vector Machines</h1>
              </div>
              <div className={toggle === 5 ? "show-model" : "model"}>
                <h1>This is Boosted XGBoost Trees</h1>
              </div>
            </div>
          </div>
    );
};

export default RegressionModels;
