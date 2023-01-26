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
      .then(() => navigate("/category"))
      .catch((err) => alert(`An error ocurred: ${err.message}`));
  };

  

  return (
    <Form onSubmit={submitForm}>
      <FormGroup>
        <Label for="category">Category name</Label>
        <Input
          id="category"
          type="name"
          value={category.name}
          onChange={(e) => setCategory(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Button onClick={navigate("categories")}>Save</Button>
      </FormGroup>
    </Form>
  );
}
