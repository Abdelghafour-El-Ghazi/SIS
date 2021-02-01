import React, { useState } from "react";
import { Form, Input, Select, Icon, Table, Button } from "semantic-ui-react";
import { DateInput, Modal } from "semantic-ui-calendar-react";
import { useForm } from "../util/hooks";

const genderOptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];
const Commander = (props) => {
  const [loading, setLoading] = useState(false);
  const { values, onChange, onSubmit } = useForm(
    () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        props.history.push("/");
      }, 1500);
    },
    {
      date: "",
      quantity: "",
    }
  );
  return (
    <div className='form-container'>
      <h2>Commander Vaccin</h2>
      {/* <Modal
        trigger={<Button>Show Modal</Button>}
        header='Reminder!'
        content='Call Benjamin regarding the reports.'
        actions={["Snooze", { key: "done", content: "Done", positive: true }]}
      /> */}
      <Form className={loading ? "loading" : ""} onSubmit={onSubmit}>
        <DateInput
          name='date'
          label='Date Prévu'
          placeholder='Date'
          value={values.date}
          onChange={onChange}
          // value={this.state.date}
          iconPosition='left'
          // onChange={this.handleChange}
        />

        <Form.Field
          id='form-input-control-first-name'
          control={Input}
          name='quantity'
          value={values.quantity}
          onChange={onChange}
          label='Quantité'
          placeholder='Quantité'
        />

        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='Commander'
          color='green'
        />
      </Form>
    </div>
  );
};

export default Commander;
