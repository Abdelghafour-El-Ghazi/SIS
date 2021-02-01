import React from "react";
import { Icon, Table, Button } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";

const SearchDate = () => {
  return (
    <>
      <h2>Rechercher Par Date</h2>
      <div style={{ marginBottom: "70px" }}>
        {" "}
        <DateInput
          name='date'
          placeholder='Date'
          value='05-03-2021'
          iconPosition='left'
          onChange={(e, { name, value }) => console.log(value)}
        />
      </div>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nom</Table.HeaderCell>
            <Table.HeaderCell>Prénom</Table.HeaderCell>
            <Table.HeaderCell>Date de naissance</Table.HeaderCell>
            <Table.HeaderCell>CIN tuteur</Table.HeaderCell>
            <Table.HeaderCell>Afficher Calendrier</Table.HeaderCell>
            <Table.HeaderCell>Modifier</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row positive>
            <Table.Cell> Salah</Table.Cell>
            <Table.Cell>ElBourhichi</Table.Cell>
            <Table.Cell>05-03-2021</Table.Cell>
            <Table.Cell>GB1234</Table.Cell>
            <Table.Cell>
              <Button primary>Afficher Calendrier</Button>
            </Table.Cell>
            <Table.Cell>
              <Button primary>Modifier</Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

export default SearchDate;
