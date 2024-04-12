import React, { useState } from "react";
import data from "./data";
import "./styles.css";
//single selection
//multiple selection
const Accordion = () => {
  const [selected, setSelected] = useState(null);

  function handleSingleClick(id) {
    setSelected(id === selected ? null : id);
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="accordion-item" key={item.id}>
              <div
                className="accordion-title"
                onClick={() => handleSingleClick(item.id)}
              >
                <h3>{item.questions}</h3>
                <span className="icon">+</span>
              </div>
             
              {selected === item.id ? (
                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Records</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
