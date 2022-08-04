import React from "react";
import { Formik, Field, Form } from "formik";
import validationSchema from "./validations";
import { useTodo } from "../../contexts/TodoContext";

function TodoForm() {
  const { addTodo } = useTodo();

  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={(values, bag) => {
        addTodo(values.text);

        bag.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <Field
          className="new-todo"
          placeholder="add a todo"
          autoFocus
          id="text"
          name="text"
        />
      </Form>
    </Formik>
  );
}

export default TodoForm;
