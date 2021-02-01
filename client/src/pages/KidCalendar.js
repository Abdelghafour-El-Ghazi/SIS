import React, { useState } from "react";
import {
  Dimmer,
  Loader,
  Icon,
  Table,
  Button,
  List,
  Image,
} from "semantic-ui-react";
import { QUERY_ONE_KID, UPDATEVAC } from "../util/graphql";
import { useQuery, useMutation } from "@apollo/react-hooks";
const KidCalendar = (props) => {
  const [vacName, setVacName] = useState("");

  const { loading, data: getKid } = useQuery(QUERY_ONE_KID, {
    variables: {
      kidId: props.match.params.id,
    },
  });

  const [updateVac, { loading: doneLoading }] = useMutation(UPDATEVAC, {
    variables: { kidId: props.match.params.id, vac: vacName },
    update(proxy, result) {
      // const data = proxy.readQuery({
      //   query: QUERY_ONE_KID,
      //   variables: { kidId: props.match.params.id },
      // });
      const kid = result.data.updateVac;
      proxy.writeQuery({
        query: QUERY_ONE_KID,
        variables: { kidId: props.match.params.id, vac: vacName },
        data: { getKid: kid },
      });
    },
  });
  return (
    <>
      <Dimmer active={loading || doneLoading}>
        <Loader size='mini'>Loading</Loader>
      </Dimmer>
      {getKid ? (
        <>
          <h2>
            Fiche de l'enfant :{" "}
            {getKid.getKid.firstname + " " + getKid.getKid.lastname}
          </h2>
          <List divided verticalAlign='middle'>
            <List.Item>
              <List.Content>Nom : {getKid.getKid.firstname}</List.Content>
            </List.Item>
            <List.Item>
              <List.Content>Prénom : {getKid.getKid.lastname} </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>Sexe : {getKid.getKid.sexe}</List.Content>
            </List.Item>
            <List.Item>
              <List.Content>Pére : {getKid.getKid.father} </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>Mére : {getKid.getKid.mother} </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                Date Naissance : {getKid.getKid.birthdate}{" "}
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                Lieu de Naissance : {getKid.getKid.birthcity}{" "}
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>Adresse : {getKid.getKid.adress} </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>CIN Tuteur : {getKid.getKid.cin} </List.Content>
            </List.Item>
          </List>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Vaccin</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row positive={getKid.getKid.firstvac.Done}>
                <Table.Cell> la diphtérie</Table.Cell>
                <Table.Cell>05-05-2021</Table.Cell>
                {getKid.getKid.firstvac.Done ? (
                  <Table.Cell>
                    <Icon name='checkmark' />
                    Done
                  </Table.Cell>
                ) : (
                  <Table.Cell>
                    <Button
                      onClick={() => {
                        setVacName("firstvac");
                        setTimeout(() => updateVac(), 1000);
                      }}
                      primary>
                      Done
                    </Button>
                  </Table.Cell>
                )}
              </Table.Row>
              <Table.Row positive={getKid.getKid.secondvac.Done}>
                <Table.Cell> le tétanos</Table.Cell>
                <Table.Cell>15-01-2021</Table.Cell>
                {getKid.getKid.secondvac.Done ? (
                  <Table.Cell>
                    <Icon name='checkmark' />
                    Done
                  </Table.Cell>
                ) : (
                  <Table.Cell>
                    <Button
                      onClick={() => {
                        setVacName("secondvac");
                        setTimeout(() => updateVac(), 1000);
                      }}
                      primary>
                      Done
                    </Button>
                  </Table.Cell>
                )}
              </Table.Row>
              <Table.Row positive={getKid.getKid.thirdvac.Done}>
                <Table.Cell> la poliomyélite</Table.Cell>

                <Table.Cell>15-11-2021</Table.Cell>

                {getKid.getKid.thirdvac.Done ? (
                  <Table.Cell>
                    <Icon name='checkmark' />
                    Done
                  </Table.Cell>
                ) : (
                  <Table.Cell>
                    <Button
                      onClick={() => {
                        setVacName("thirdvac");
                        setTimeout(() => updateVac(), 1000);
                      }}
                      primary>
                      Done
                    </Button>
                  </Table.Cell>
                )}
              </Table.Row>
              <Table.Row positive={getKid.getKid.fourthvac.Done}>
                <Table.Cell> la coqueluche </Table.Cell>

                <Table.Cell>04-01-2021</Table.Cell>

                {getKid.getKid.fourthvac.Done ? (
                  <Table.Cell>
                    <Icon name='checkmark' />
                    Done
                  </Table.Cell>
                ) : (
                  <Table.Cell>
                    <Button
                      onClick={() => {
                        setVacName("fourthvac");
                        setTimeout(() => updateVac(), 1000);
                      }}
                      primary>
                      Done
                    </Button>
                  </Table.Cell>
                )}
              </Table.Row>
              <Table.Row positive={getKid.getKid.fifthvac.Done}>
                <Table.Cell> l'hépatite B </Table.Cell>

                <Table.Cell>05-05-2021</Table.Cell>
                {getKid.getKid.fifthvac.Done ? (
                  <Table.Cell>
                    <Icon name='checkmark' />
                    Done
                  </Table.Cell>
                ) : (
                  <Table.Cell>
                    <Button
                      onClick={() => {
                        setVacName("fifthvac");
                        setTimeout(() => updateVac(), 1000);
                      }}
                      primary>
                      Done
                    </Button>
                  </Table.Cell>
                )}
              </Table.Row>
            </Table.Body>
          </Table>
        </>
      ) : null}
    </>
  );
};

export default KidCalendar;
