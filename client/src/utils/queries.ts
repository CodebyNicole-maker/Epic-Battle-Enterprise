import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      id
      username
      email
      savedCharacters {
        characterId
        name
        publisher
        description
        image
        alignment
        intelligence
        strength
        speed
        durability
        power
        combat
      }
    }
  }
`;

export const SEARCH_CHARACTER = gql`
  query SearchCharacter($name: String!) {
    searchCharacter(name: $name) {
      characterId
      name
      fullName
      publisher
      alignment
      intelligence
      strength
      speed
      durability
      combat
      power
      image
    }
  }
`;
