import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

function DefaultDropdown({ options, defaultOption, onChange, label }) {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleInputChange = (eventKey) => {
    setSelectedOption(eventKey);
    onChange(eventKey);
  };

  return (
    <div className="d-flex justify-content-start align-items-center">
      {label && <label className="font-white-smoke m-2">{label}</label>}
      <Dropdown onSelect={(eventKey) => handleInputChange(eventKey)}>
        <Dropdown.Toggle variant="dark">{selectedOption}</Dropdown.Toggle>
        <Dropdown.Menu>
          {options.map((option) => (
            <Dropdown.Item key={option} eventKey={option}>
              {option}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DefaultDropdown;
