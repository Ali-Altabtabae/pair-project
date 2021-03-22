import React from "react";
import { Link } from "react-router-dom";
import { ActorWrapper, ListWrapper } from "../styles";
import employees from "../elements/employees";


const Contact = () => {
  return (
    <ListWrapper>
      {employees.map((employee) => (
        <ActorWrapper>
          <Link to={`/contact us/${employee.name}`}>
            <p> {employee.name}</p>
          </Link>
          <p>Age: {employee.age}</p>
          <p>Major: {employee.major}</p>
        </ActorWrapper>
      ))}
    </ListWrapper>
  );
};

export default Contact;
