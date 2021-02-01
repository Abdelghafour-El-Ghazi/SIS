const { gql } = require("apollo-server");

module.exports = gql`
  type Vac {
    Date: String!
    Done: Boolean!
  }
  type Kid {
    id: ID!
    firstname: String!
    lastname: String!
    sexe: String!
    father: String!
    mother: String!
    adress: String!
    birthcity: String!
    birthdate: String!
    cin: String!
    firstvac: Vac!
    secondvac: Vac!
    thirdvac: Vac!
    fourthvac: Vac!
    fifthvac: Vac!
    createdAt: String!
  }

  type Post {
    id: ID!
    body: String!
    selectedFile: String!
    username: String!
    createdAt: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }
  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
    role: Int!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
    role: Int!
  }
  input KidInput {
    firstname: String!
    lastname: String!
    sexe: String!
    father: String!
    mother: String!
    adress: String!
    birthcity: String!
    birthdate: String!
    cin: String!
    firstvac: String!
    secondvac: String!
    thirdvac: String!
    fourthvac: String!
    fifthvac: String!
  }
  type Query {
    getUser(username: String!): User
    getPosts: [Post]
    getPost(postId: ID!): Post
    getKids: [Kid]
    getKid(kidId: ID!): Kid
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!, selectedFile: String): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
    createKid(kidInput: KidInput): Kid!
    deleteKid(kidId: ID!): String!
    updateVac(kidId: ID!, vac: String!): Kid!
    updateKid(kidId: ID!, kidInput: KidInput): Kid!
  }
  type Subscription {
    newPost: Post!
  }
`;
