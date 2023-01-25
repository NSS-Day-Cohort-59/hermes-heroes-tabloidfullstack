import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addTag } from "../modules/TagManager";

const TagForm = ({ getTags }) => {
  const emptyTag = {
    title: '',
    description: '',
    url: ''
  };

  const [tag, setTag] = useState(emptyTag);

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.id;

    const TagCopy = { ...Tag };

    TagCopy[key] = value;
    setTag(TagCopy);
  };

  const handleSave = (evt) => {
    evt.preventDefault();

    addTag(Tag).then(() => {
      setTag(emptyTag);
      getTags();
    });
  };

  return (
    <Form>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input type="text" name="title" id="title" placeholder="Tag title"
          value={Tag.title}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="url">URL</Label>
        <Input type="text" name="url" id="url" placeholder="Tag link" 
          value={Tag.url}
          onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="textarea" name="description" id="description"
          value={Tag.description}
          onChange={handleInputChange} />
      </FormGroup>
      <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
    </Form>
  );
};

export default TagForm;