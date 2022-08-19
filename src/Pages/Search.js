import { useState } from 'react';
import { useEpisode } from '../hooks/useCharacters';
import { GoSearch } from 'react-icons/go';
import CardList from '../CardList';
import { Loading } from '../Loading';
import { Form, BtnSubmit, SubTitle } from './Search.style';
export function Search() {
  const [id, setId] = useState(0);
  const [getEpisode, { error, loading, data }] = useEpisode(id);
  if (error) {
    return <h1>Something gone wrong</h1>;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Form
        onSubmit={e => {
          e.preventDefault();
          getEpisode();

          setId(e.target.query.value);
        }}
      >
        <input type="number" name="query" min="1" max="51" />
        <BtnSubmit type="submit">{<GoSearch />}</BtnSubmit>
      </Form>
      {data ? (
        <>
          <SubTitle>All characters from {id} episode :</SubTitle>

          <CardList array={data?.episode?.characters} />
        </>
      ) : (
        <h1>Choose the number of episode</h1>
      )}
    </>
  );
}
