import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addCategory } from "../modules/categoryManager";

export default function CategoryAddForm() {
  const navigate = useNavigate();
  const [category, setCategory] = useState(
    {name: ""}
  );

  const submitForm = (e) => {
    e.preventDefault();
    addCategory(category)
      .then(() => navigate("/categories"))
      .catch((err) => alert(`An error ocurred: ${err.message}`));
  };

  

  return (
    <Form>
      <FormGroup>
        <Label for="category">Category name</Label>
        <Input
          id="category"
          type="name"
          value={category.name}
          onChange={(e) => {
            const copy = {...category}
            copy.name = e.target.value
             setCategory(copy)}
          }/>
      </FormGroup>
      <FormGroup>
        <Button onClick={(clickEvent) => submitForm(clickEvent)}>Save</Button>
      </FormGroup>
    </Form>
  );
}

