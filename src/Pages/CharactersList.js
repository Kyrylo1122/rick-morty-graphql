import { useCharacters } from '../hooks/useCharacters';
import { Box } from '../Box/Box';
import { useState } from 'react';
import { Loading } from '../Loading';

import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from 'react-icons/hi';
import {
  CardItem,
  CardLink,
  CardImg,
  BtnItem,
  Btn,
} from './CharactersList.style';

export default function CharactersList() {
  const [page, setPage] = useState(1);
  const { error, loading, data } = useCharacters(page);
  if (error) {
    return <h1>Something gone wrong</h1>;
  }
  if (loading) {
    return <Loading />;
  }
  const { prev, next } = data.characters.info;
  return (
    <div>
      <Box as="ul" display="flex" flexWrap="wrap">
        {data.characters.results.map(({ id, name, image }) => (
          <CardItem key={name}>
            <CardLink to={id}>
              <div>
                <CardImg src={image} alt={name} />
              </div>
              <div>
                <p>{name}</p>
              </div>
            </CardLink>
          </CardItem>
        ))}
      </Box>
      <Box
        as="ul"
        marginTop="60px"
        marginBottom="60px"
        display="flex"
        justifyContent="center"
      >
        <BtnItem>
          <Btn
            disabled={!prev}
            onClick={() => {
              setPage(prev);
            }}
          >
            <HiOutlineChevronDoubleLeft />
          </Btn>
        </BtnItem>
        <BtnItem>
          <Btn
            onClick={() => {
              setPage(next);
            }}
          >
            <HiOutlineChevronDoubleRight />
          </Btn>
        </BtnItem>
      </Box>
    </div>
  );
}
