import React from "react";
import { Icon, Table, Button } from "semantic-ui-react";

const Commande = (props) => {
  return (
    <>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Vaccin</Table.HeaderCell>
            <Table.HeaderCell>Quantité</Table.HeaderCell>
            <Table.HeaderCell>Date Prévu de commande</Table.HeaderCell>
            <Table.HeaderCell>Commander</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell> la diphtérie</Table.Cell>
            <Table.Cell>63</Table.Cell>
            <Table.Cell>05-02-2021</Table.Cell>
            <Table.Cell>
              <Button primary onClick={() => props.history.push("/commander")}>
                Commander
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell> le tétanos</Table.Cell>
            <Table.Cell>59</Table.Cell>
            <Table.Cell>15-02-2021</Table.Cell>
            <Table.Cell>
              <Button primary onClick={() => props.history.push("/commander")}>
                Commander
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row negative>
            <Table.Cell> la poliomyélite</Table.Cell>

            <Table.Cell>14</Table.Cell>
            <Table.Cell>15-02-2021</Table.Cell>

            <Table.Cell>
              <Button primary onClick={() => props.history.push("/commander")}>
                Commander
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell> la coqueluche </Table.Cell>

            <Table.Cell>45</Table.Cell>
            <Table.Cell>04-03-2021</Table.Cell>

            <Table.Cell>
              <Button primary onClick={() => props.history.push("/commander")}>
                Commander
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row negative>
            <Table.Cell> l'hépatite B </Table.Cell>

            <Table.Cell>11</Table.Cell>
            <Table.Cell>03-02-2021</Table.Cell>

            <Table.Cell>
              <Button primary onClick={() => props.history.push("/commander")}>
                Commander
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

export default Commande;
