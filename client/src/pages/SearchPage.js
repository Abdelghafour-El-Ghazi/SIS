// import React from "react";
// import { Icon, Table, Button } from "semantic-ui-react";

// const KidsList = () => (
// <Table celled>
//   <Table.Header>
//     <Table.Row>
//       <Table.HeaderCell>Nom</Table.HeaderCell>
//       <Table.HeaderCell>Prénom</Table.HeaderCell>
//       <Table.HeaderCell>Date de naissance</Table.HeaderCell>
//       <Table.HeaderCell>CIN tuteur</Table.HeaderCell>
//       <Table.HeaderCell>Afficher Calendrier</Table.HeaderCell>
//       <Table.HeaderCell>Modifier</Table.HeaderCell>
//     </Table.Row>
//   </Table.Header>
//   <Table.Body>
//     <Table.Row>
//       <Table.Cell> Amar Amghari </Table.Cell>
//       <Table.Cell>Laila</Table.Cell>
//       <Table.Cell>05-05-2021</Table.Cell>
//       <Table.Cell>GL1234</Table.Cell>
//       <Table.Cell>
//         <Button primary>Afficher Calendrier</Button>
//       </Table.Cell>
//       <Table.Cell>
//         <Button primary>Modifier</Button>
//       </Table.Cell>
//     </Table.Row>
//   </Table.Body>
// </Table>
// );

// export default KidsList;

import _ from "lodash";
import React from "react";
import {
  Search,
  Grid,
  Header,
  Segment,
  Icon,
  Table,
  Button,
} from "semantic-ui-react";

const source = [
  {
    title: "Amar Amghari Laila",
    description: "CIN tuteur : GL1234",
  },
  {
    title: "Gibson and Sons",
    description: "Polarised needs-based hardware",
  },
  {
    title: "Reynolds and Sons",
    description: "Adaptive fresh-thinking analyzer",
  },
  {
    title: "Nader and Sons",
    description: "Pre-emptive multi-state data-warehouse",
  },
];
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

function SearchPage() {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState);
  const { loading, results, value } = state;

  const timeoutRef = React.useRef();
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current);
    dispatch({ type: "START_SEARCH", query: data.value });

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: "CLEAN_QUERY" });
        return;
      }

      const re = new RegExp(_.escapeRegExp(data.value), "i");
      const isMatch = (result) => re.test(result.title);

      dispatch({
        type: "FINISH_SEARCH",
        results: _.filter(source, isMatch),
      });
    }, 300);
  }, []);
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={loading}
            onResultSelect={(e, data) =>
              dispatch({
                type: "UPDATE_SELECTION",
                selection: data.result.title,
              })
            }
            onSearchChange={handleSearchChange}
            results={results}
            value={value}
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
        <Table.Body>
          <Table.Row>
            <Table.Cell> Amar Amghari </Table.Cell>
            <Table.Cell>Laila</Table.Cell>
            <Table.Cell>05-05-2021</Table.Cell>
            <Table.Cell>GL1234</Table.Cell>
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
}

export default SearchPage;
