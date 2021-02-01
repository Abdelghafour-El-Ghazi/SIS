import gql from "graphql-tag";

export const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      selectedFile
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;
export const FETCH_USER_QUERY = gql`
  query($username: String!) {
    getUser(username: $username) {
      email
      id
      username
      createdAt
    }
  }
`;

export const CREATE_KID_MUTATION = gql`
  mutation createKid(
    $firstname: String!
    $lastname: String!
    $sexe: String!
    $father: String!
    $mother: String!
    $adress: String!
    $birthcity: String!
    $birthdate: String!
    $cin: String!
    $firstvac: String!
    $secondvac: String!
    $thirdvac: String!
    $fourthvac: String!
    $fifthvac: String!
  ) {
    createKid(
      kidInput: {
        firstname: $firstname
        lastname: $lastname
        sexe: $sexe
        father: $father
        mother: $mother
        adress: $adress
        birthcity: $birthcity
        birthdate: $birthdate
        cin: $cin
        firstvac: $firstvac
        secondvac: $secondvac
        thirdvac: $thirdvac
        fourthvac: $fourthvac
        fifthvac: $fifthvac
      }
    ) {
      firstname
      lastname
      createdAt
    }
  }
`;

export const FETCH_KIDS = gql`
  {
    getKids {
      id
      firstname
      lastname
      sexe
      father
      mother
      adress
      birthcity
      birthdate
      cin
      firstvac {
        Date
        Done
      }
      secondvac {
        Date
        Done
      }
      thirdvac {
        Date
        Done
      }
      fourthvac {
        Date
        Done
      }
      fifthvac {
        Date
        Done
      }
    }
  }
`;

export const QUERY_ONE_KID = gql`
  query($kidId: ID!) {
    getKid(kidId: $kidId) {
      firstname
      lastname
      sexe
      father
      mother
      adress
      birthcity
      birthdate
      cin
      firstvac {
        Date
        Done
      }
      secondvac {
        Date
        Done
      }
      thirdvac {
        Date
        Done
      }
      fourthvac {
        Date
        Done
      }
      fifthvac {
        Date
        Done
      }
    }
  }
`;

export const UPDATEVAC = gql`
  mutation updateVac($kidId: ID!, $vac: String!) {
    updateVac(kidId: $kidId, vac: $vac) {
      id
      firstname
      firstvac {
        Date
        Done
      }
    }
  }
`;

export const UPDATEKID = gql`
  mutation updateKid(
    $kidId: ID!
    $firstname: String!
    $lastname: String!
    $sexe: String!
    $father: String!
    $mother: String!
    $adress: String!
    $birthcity: String!
    $birthdate: String!
    $cin: String!
    $firstvac: String!
    $secondvac: String!
    $thirdvac: String!
    $fourthvac: String!
    $fifthvac: String!
  ) {
    updateKid(
      kidId: $kidId
      kidInput: {
        firstname: $firstname
        lastname: $lastname
        sexe: $sexe
        father: $father
        mother: $mother
        adress: $adress
        birthcity: $birthcity
        birthdate: $birthdate
        cin: $cin
        firstvac: $firstvac
        secondvac: $secondvac
        thirdvac: $thirdvac
        fourthvac: $fourthvac
        fifthvac: $fifthvac
      }
    ) {
      firstname
    }
  }
`;
