import React, { useState } from "react";
import _ from "lodash";
import {
  Grid,
  Search,
  Dimmer,
  Loader,
  Icon,
  Table,
  Button,
} from "semantic-ui-react";
import { FETCH_KIDS } from "../util/graphql";
import { DateInput } from "semantic-ui-calendar-react";
import { useQuery } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";

const KidsList = (props) => {
  const { loading, data: getKids } = useQuery(FETCH_KIDS);
  const [show, setShow] = useState(true);
  const [name, setName] = useState("");
  const [searchDate, setSearchDate] = useState("");
  // const source = [
  //   {
  //     title: "Amar Amghari Laila",
  //     description: "CIN tuteur : GL1234",
  //   },
  //   {
  //     title: "Gibson and Sons",
  //     description: "Polarised needs-based hardware",
  //   },
  //   {
  //     title: "Reynolds and Sons",
  //     description: "Adaptive fresh-thinking analyzer",
  //   },
  //   {
  //     title: "Nader and Sons",
  //     description: "Pre-emptive multi-state data-warehouse",
  //   },

  // ];

  const initialState = {
    loading: false,
    results: [],
    value: "",
  };
  function exampleReducer(state, action) {
    switch (action.type) {
      case "CLEAN_QUERY":
        return initialState;
      case "START_SEARCH":
        return { ...state, loading: true, value: action.query };
      case "FINISH_SEARCH":
        return { ...state, loading: false, results: action.results };
      case "UPDATE_SELECTION":
        return { ...state, value: action.selection };

      default:
        throw new Error();
    }
  }

  const [state, dispatch] = React.useReducer(exampleReducer, initialState);
  const { loading: searchLoading, results, value } = state;

  console.log(results);

  const source = getKids
    ? getKids.getKids.map((kid) => {
        return {
          title: kid.firstname + " " + kid.lastname,
          description: kid.cin,
        };
      })
    : null;

  const timeoutRef = React.useRef();
  const handleSearchChange = React.useCallback(
    (e, data) => {
      clearTimeout(timeoutRef.current);
      dispatch({ type: "START_SEARCH", query: data.value });

      timeoutRef.current = setTimeout(() => {
        if (data.value.length === 0) {
          dispatch({ type: "CLEAN_QUERY" });
          setShow(true);
          return;
        }

        const re = new RegExp(_.escapeRegExp(data.value), "i");
        const isMatch = (result) => re.test(result.title);

        dispatch({
          type: "FINISH_SEARCH",
          results: _.filter(source, isMatch),
        });
      }, 300);
    },
    [source]
  );
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return (
    // <Segment>

    //   <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    // </Segment>
    <>
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={searchLoading}
            onResultSelect={(e, data) => {
              dispatch({
                type: "UPDATE_SELECTION",
                selection: data.result.title,
              });
              setShow(false);
              setName(data.result.title.split(" ")[0]);
              console.log(data.result.title.split(" ")[0]);
            }}
            onSearchChange={handleSearchChange}
            results={results}
            value={value}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <DateInput
            onChange={(e, data) => {
              setSearchDate(data.value);
              if (data.value !== "") {
                setShow(false);
              } else {
                setShow(true);
              }
            }}
            popupPosition='bottom left'
            name='date'
            placeholder='Date'
            // value={this.state.date}
            iconPosition='left'
            // onChange={this.handleChange}
            // error={error || updateerror ? true : false}
            value={searchDate}
            name='birthdate'
          />
        </Grid.Column>
      </Grid>
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

        {show ? (
          <Table.Body>
            <Dimmer active={loading}>
              <Loader size='mini'>Loading</Loader>
            </Dimmer>

            {getKids
              ? getKids.getKids.map((kid) => {
                  return (
                    <Table.Row
                      positive={
                        kid.firstvac.Done &&
                        kid.secondvac.Done &&
                        kid.thirdvac.Done &&
                        kid.fourthvac.Done &&
                        kid.fifthvac.Done
                      }
                      key={kid.id}>
                      <Table.Cell> {kid.firstname}</Table.Cell>
                      <Table.Cell>{kid.lastname}</Table.Cell>
                      <Table.Cell>{kid.birthdate}</Table.Cell>
                      <Table.Cell>{kid.cin}</Table.Cell>
                      <Table.Cell>
                        <Button
                          onClick={() =>
                            props.history.push(`/enfant/${kid.id}`)
                          }
                          primary>
                          Afficher Calendrier
                        </Button>
                      </Table.Cell>
                      <Table.Cell>
                        <Button
                          onClick={() => {
                            props.setCurrentId(kid.id);
                            props.setInfo({
                              firstname: kid.firstname,
                              lastname: kid.lastname,
                              sexe: kid.sexe,
                              father: kid.father,
                              mother: kid.mother,
                              adress: kid.adress,
                              birthcity: kid.birthcity,
                              birthdate: kid.birthdate,
                              cin: kid.cin,
                              firstvac: kid.firstvac,
                              secondvac: kid.secondvac,
                              thirdvac: kid.thirdvac,
                              fourthvac: kid.fourthvac,
                              fifthvac: kid.fifthvac,
                            });
                            setTimeout(
                              () => props.history.push("/ajouter"),
                              500
                            );
                          }}
                          primary>
                          Modifier
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  );
                })
              : null}
          </Table.Body>
        ) : (
          <Table.Body>
            <Dimmer active={loading}>
              <Loader size='mini'>Loading</Loader>
            </Dimmer>

            {getKids
              ? getKids.getKids.map((kid) => {
                  return kid.firstname === name ||
                    searchDate === kid.birthdate ? (
                    <Table.Row
                      positive={
                        kid.firstvac.Done &&
                        kid.secondvac.Done &&
                        kid.thirdvac.Done &&
                        kid.fourthvac.Done &&
                        kid.fifthvac.Done
                      }
                      key={kid.id}>
                      <Table.Cell> {kid.firstname}</Table.Cell>
                      <Table.Cell>{kid.lastname}</Table.Cell>
                      <Table.Cell>{kid.birthdate}</Table.Cell>
                      <Table.Cell>{kid.cin}</Table.Cell>
                      <Table.Cell>
                        <Button
                          onClick={() =>
                            props.history.push(`/enfant/${kid.id}`)
                          }
                          primary>
                          Afficher Calendrier
                        </Button>
                      </Table.Cell>
                      <Table.Cell>
                        <Button
                          onClick={() => {
                            props.setCurrentId(kid.id);
                            props.setInfo({
                              firstname: kid.firstname,
                              lastname: kid.lastname,
                              sexe: kid.sexe,
                              father: kid.father,
                              mother: kid.mother,
                              adress: kid.adress,
                              birthcity: kid.birthcity,
                              birthdate: kid.birthdate,
                              cin: kid.cin,
                              firstvac: kid.firstvac,
                              secondvac: kid.secondvac,
                              thirdvac: kid.thirdvac,
                              fourthvac: kid.fourthvac,
                              fifthvac: kid.fifthvac,
                            });
                            setTimeout(
                              () => props.history.push("/ajouter"),
                              500
                            );
                          }}
                          primary>
                          Modifier
                        </Button>
                      </Table.Cell>
                    </Table.Row>
                  ) : null;
                })
              : null}
          </Table.Body>
        )}
      </Table>
    </>
  );
};

export default withRouter(KidsList);
