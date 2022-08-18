import { Character } from "../hooks/useCharacters";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading";
import { Box } from "../Box/Box";
import {
  CharacterName,
  EpisodesTitle,
  Ico,
  Return,
} from "./CharacterInfo.style";

export const CharacterInfo = () => {
  const { id } = useParams();
  const { error, loading, data } = Character(id);

  if (error) {
    return <h1>Something gone wrong</h1>;
  }
  if (loading) {
    return <Loading />;
  }
  const {
    character: { name, status, gender, image, episode, species, origin },
  } = data;
  return (
    <Box border="1px solid red" pl="80px" pr="80px">
      <Box textAlign="left">
        <Return to={"/all-characters"}>
          {<Ico />} Return to all characters
        </Return>
      </Box>

      <CharacterName>{name} </CharacterName>
      <Box display="flex">
        <div>
          <img src={image} alt={name} />
        </div>
        <Box padding="10px">
          <Box
            as="ul"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <li>
              <p>Gender: {gender}</p>
            </li>
            <li>
              <p>Status: {status}</p>
            </li>
            <li>
              <p>Species: {species}</p>
            </li>
            <li>
              <p>Origin: {origin.name}</p>
            </li>

            <li>
              <p>
                Dimension: {origin.dimension ? origin.dimension : "Unknown"}
              </p>
            </li>
          </Box>
        </Box>
      </Box>
      <EpisodesTitle>Episodes:</EpisodesTitle>
      <Box as="ul" display="flex" flexDirection="column">
        {episode.map(({ id, name, episode }) => (
          <Box as="li" key={id} display="flex" justifyContent="flex-end">
            <label>{name}</label>
            <label>/ {episode}</label>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
