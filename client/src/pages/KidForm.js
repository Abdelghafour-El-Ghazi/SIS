import React, { useEffect, useState } from "react";
import {
  Dimmer,
  Loader,
  Form,
  Input,
  TextArea,
  Button,
  Select,
} from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import { useForm } from "../util/hooks";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { CREATE_KID_MUTATION, UPDATEKID, QUERY_ONE_KID } from "../util/graphql";
const genderOptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const KidForm = (props) => {
  const [errors, setErrors] = useState({});
  // const { loading: loadingdata, data: getKid } = useQuery(QUERY_ONE_KID, {
  //   variables: {
  //     kidId: props.currentId,
  //   },
  // });
  const { values, onChange, onSubmit } = useForm(createKidCallback, {
    firstname: props.info.firstname ? props.info.firstname : "",
    lastname: props.info.lastname ? props.info.lastname : "",
    sexe: props.info.sexe ? props.info.sexe : "",
    father: props.info.father ? props.info.father : "",
    mother: props.info.mother ? props.info.mother : "",
    adress: props.info.adress ? props.info.adress : "",
    birthcity: props.info.birthcity ? props.info.birthcity : "",
    birthdate: props.info.birthdate ? props.info.birthdate : "",
    cin: props.info.cin ? props.info.cin : "",
    firstvac: props.info.firstvac ? props.info.firstvac.Date : "",
    secondvac: props.info.secondvac ? props.info.secondvac.Date : "",
    thirdvac: props.info.thirdvac ? props.info.thirdvac.Date : "",
    fourthvac: props.info.fourthvac ? props.info.fourthvac.Date : "",
    fifthvac: props.info.firstname ? props.info.fifthvac.Date : "",
  });

  const [createKid, { error, loading }] = useMutation(CREATE_KID_MUTATION, {
    variables: {
      firstname: values.firstname,
      lastname: values.lastname,
      sexe: values.sexe,
      father: values.father,
      mother: values.mother,
      adress: values.adress,
      birthcity: values.birthcity,
      birthdate: values.birthdate,
      cin: values.cin,
      firstvac: values.firstvac,
      secondvac: values.secondvac,
      thirdvac: values.thirdvac,
      fourthvac: values.fourthvac,
      fifthvac: values.fifthvac,
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    // update(proxy, result) {
    //   const data = proxy.readQuery({
    //     query: FETCH_POSTS_QUERY,
    //   });
    //   const posts = [result.data.createPost, ...data.getPosts];
    //   proxy.writeQuery({ query: FETCH_POSTS_QUERY, data: { getPosts: posts } });

    //   values.body = "";
    //   setSelectedFile("");
    // },
  });
  const [
    updateKid,
    { error: updateerror, loading: updateloading },
  ] = useMutation(UPDATEKID, {
    variables: {
      kidId: props.currentId,
      firstname: values.firstname,
      lastname: values.lastname,
      sexe: values.sexe,
      father: values.father,
      mother: values.mother,
      adress: values.adress,
      birthcity: values.birthcity,
      birthdate: values.birthdate,
      cin: values.cin,
      firstvac: values.firstvac,
      secondvac: values.secondvac,
      thirdvac: values.thirdvac,
      fourthvac: values.fourthvac,
      fifthvac: values.fifthvac,
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
  });

  function createKidCallback() {
    if (props.info.firstname) {
      updateKid().then(setTimeout(() => props.history.push("/"), 2000));
    } else {
      createKid().then(setTimeout(() => props.history.push("/"), 2000));
    }

    props.setInfo({});
  }

  return (
    <>
      <>
        <h2>{props.currentId ? "Modifier" : "Ajouter"} un enfant</h2>
        <Form
          onSubmit={onSubmit}
          className={loading || updateloading ? "loading" : ""}>
          <Form.Group widths='equal'>
            <Form.Field
              id='form-input-control-first-name'
              name='firstname'
              control={Input}
              label='Nom'
              placeholder='Nom'
              onChange={onChange}
              error={error || updateerror ? true : false}
              value={values.firstname}
            />
            <Form.Field
              onChange={onChange}
              name='lastname'
              id='form-input-control-last-name'
              control={Input}
              label='Prénom'
              placeholder='Prénom'
              error={error || updateerror ? true : false}
              value={values.lastname}
            />
            <Form.Field
              onChange={onChange}
              name='sexe'
              control={Select}
              options={genderOptions}
              label={{
                children: "Sexe",
                htmlFor: "form-select-control-gender",
              }}
              placeholder='Sexe'
              search
              searchInput={{ id: "form-select-control-gender" }}
              error={error || updateerror ? true : false}
              value={values.sexe}
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field
              onChange={onChange}
              id='form-input-control-first-name'
              control={Input}
              label='Pére'
              placeholder='Pére'
              error={error || updateerror ? true : false}
              value={values.father}
              name='father'
            />
            <Form.Field
              onChange={onChange}
              id='form-input-control-last-name'
              control={Input}
              label='Mére'
              placeholder='Mére'
              error={error || updateerror ? true : false}
              value={values.mother}
              name='mother'
            />
            <DateInput
              onChange={onChange}
              name='date'
              label='Date de Naissance'
              placeholder='Date'
              // value={this.state.date}
              iconPosition='left'
              // onChange={this.handleChange}
              error={error || updateerror ? true : false}
              value={values.birthdate}
              name='birthdate'
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field
              onChange={onChange}
              id='form-input-control-first-name'
              control={Input}
              label='Lieu de Naissance'
              placeholder='Lieu de Naissance'
              error={error || updateerror ? true : false}
              value={values.birthcity}
              name='birthcity'
            />
            <Form.Field
              onChange={onChange}
              id='form-input-control-last-name'
              control={Input}
              label='Adresse'
              placeholder='Adresse'
              error={error || updateerror ? true : false}
              value={values.adress}
              name='adress'
            />
            <Form.Field
              onChange={onChange}
              id='form-input-control-last-name'
              control={Input}
              label='CIN de tuteur'
              placeholder='CIN de tuteur'
              error={error || updateerror ? true : false}
              value={values.cin}
              name='cin'
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <DateInput
              onChange={onChange}
              label='1er Vaccin'
              placeholder='Date'
              // value={this.state.date}
              iconPosition='left'
              // onChange={this.handleChange}
              error={error || updateerror ? true : false}
              value={values.firstvac}
              name='firstvac'
            />
            <DateInput
              onChange={onChange}
              label='2eme Vaccin'
              placeholder='Date'
              // value={this.state.date}
              iconPosition='left'
              error={error || updateerror ? true : false}
              // onChange={this.handleChange}
              value={values.secondvac}
              name='secondvac'
            />
            <DateInput
              onChange={onChange}
              label='3eme Vaccin'
              placeholder='Date'
              // value={this.state.date}
              iconPosition='left'
              // onChange={this.handleChange}
              error={error || updateerror ? true : false}
              value={values.thirdvac}
              name='thirdvac'
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <DateInput
              onChange={onChange}
              label='4eme Vaccin'
              placeholder='Date'
              iconPosition='left'
              error={error || updateerror ? true : false}
              value={values.fourthvac}
              name='fourthvac'
            />
            <DateInput
              onChange={onChange}
              label='5eme Vaccin'
              placeholder='Date'
              // value={this.state.date}
              iconPosition='left'
              // onChange={this.handleChange}
              error={error || updateerror ? true : false}
              value={values.fifthvac}
              name='fifthvac'
            />
          </Form.Group>

          <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Confirm'
            color='green'
            type='submit'
          />
        </Form>
      </>

      {/* {Object.keys(errors).length > 0 && (
        <div className='ui error message'>
          <ul className='list'>
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )} */}
      {Object.keys(errors).length > 0 && (
        <div className='ui error message'>
          <ul className='list'>
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default KidForm;
