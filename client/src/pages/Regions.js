import React from "react";
import { Pagination, Icon, Table, Button } from "semantic-ui-react";
const Regions = (props) => {
  return (
    <>
      <h2>Consulter les Régions</h2>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nom</Table.HeaderCell>

            <Table.HeaderCell>Consulter</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell> Tanger-Tétouan-Al Hoceïma</Table.Cell>

            <Table.Cell>
              <Button onClick={() => props.history.push("/statistics")} primary>
                Consulter la région
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell> Fès-Meknès</Table.Cell>

            <Table.Cell>
              <Button onClick={() => props.history.push("/statistics")} primary>
                Consulter la région
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell> Rabat-Salé-Kénitra</Table.Cell>

            <Table.Cell>
              <Button onClick={() => props.history.push("/statistics")} primary>
                Consulter la région
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell> Casablanca-Settat </Table.Cell>

            <Table.Cell>
              <Button onClick={() => props.history.push("/statistics")} primary>
                Consulter la région
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell> Marrakech-Safi </Table.Cell>

            <Table.Cell>
              <Button onClick={() => props.history.push("/statistics")} primary>
                Consulter la région
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Pagination
        boundaryRange={0}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={10}
      />
    </>
  );
};

export default Regions;
