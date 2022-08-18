import { useQuery, gql, useLazyQuery } from "@apollo/client";

const GET_ALL_CHARACTERS = gql`
  query Chara($page: Int) {
    characters(page: $page) {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`;
const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      gender
      species
      image
      origin {
        name

        dimension
      }
      episode {
        id
        name
        episode
      }
    }
  }
`;
const GET_EPISODE = gql`
  query Episode($id: ID!) {
    episode(id: $id) {
      id
      name
      characters {
        name
        image
      }
    }
  }
`;
export const useEpisode = (id) => {
  const [func, data] = useLazyQuery(GET_EPISODE, {
    variables: { id },
  });
  return [func, data];
};

export const Character = (id) => {
  const { error, loading, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });
  return { error, loading, data };
};

export const useCharacters = (page) => {
  const { error, loading, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page },
  });
  return { error, loading, data };
};
