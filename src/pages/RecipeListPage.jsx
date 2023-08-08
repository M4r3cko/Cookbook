import React, { useState, useEffect } from 'react';
import { Heading, Input, SimpleGrid } from '@chakra-ui/react';
import '../style.css';
import Loader from '../components/Loader.jsx';
import Error from '../components/Error';
import { RecipeCard } from '../components/RecipeCard';

import { api } from '../api';

const DEFAULT_STATE = {
  data: null,
  isLoading: false,
  isError: null,
};

export function RecipeListPage() {
  const [state, setState] = useState(DEFAULT_STATE);
  const [searchTerm, setSearchTerm] = useState('');

  const onFetchSuccess = ({ data }) => {
    setState({
      data: data,
      isLoading: false,
      isError: false,
    });
  };

  const onFetchError = (error) => {
    setState({
      data: null,
      isLoading: false,
      isError: true,
    });
    console.log('Error', error);
  };

  const fetchData = () => {
    setState({
      data: null,
      isLoading: true,
      isError: false,
    });

    api.get('recipes').then(onFetchSuccess).catch(onFetchError);
  };

  useEffect(() => {
    console.info('Rendered');
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <Heading my={4} color="dodgerblue">
          Recepty
        </Heading>
      </div>

      {state.isLoading && <Loader />}
      {state.isError && <Error>Upss chyba</Error>}

      <Input
        placeholder="Najdi recept"
        _placeholder={{ color: 'dogerblue' }}
        size="md"
        width={400}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
      >
        {state.data
          ?.filter((item) => {
            return (
              item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              searchTerm === ''
            );
          })
          .map((item) => (
            <RecipeCard key={item._id} item={item} />
          ))}
      </SimpleGrid>
    </>
  );
}
