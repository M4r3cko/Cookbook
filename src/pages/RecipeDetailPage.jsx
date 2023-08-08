import {
  Button,
  Table,
  Tbody,
  Tr,
  Td,
  SimpleGrid,
  Thead,
  Th,
  GridItem,
  Flex,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../api';
import { Delete } from '../components/Delete';
import ReactMarkdown from 'https://esm.sh/react-markdown@7';
import Loader from '../components/Loader.jsx';
import '../style.css';

const DEFAULT_STATE = {
  data: null,
  isLoading: false,
  isError: false,
};

export function RecipeDetailPage() {
  const { slug } = useParams();
  const [state, setState] = useState(DEFAULT_STATE);

  const onFetchSuccess = ({ data }) => {
    setState({
      data, // same as data: data
      isLoading: false,
      isError: false,
    });
  };

  const onFetchError = () => {
    console.log();
  };

  const fetchData = () => {
    setState({
      data: null,
      isLoading: true,
      isError: false,
    });
    api
      .get('/recipes/' + slug)
      .then(onFetchSuccess)
      .catch(onFetchError);
  };

  useEffect(fetchData, [slug]);
  console.log('Params', slug);

  if (!state.data) {
    return null;
  }

  return (
    <>
      <div>{state.isLoading && <Loader />}</div>

      <div className="buttons">
        <Link to={`/edit/${slug}`}>
          <Button colorScheme={'gray'} borderRadius={20}>
            Upravit
          </Button>
        </Link>
        <Delete receiptData={state.data} />
      </div>

      <div className="heading"> {state.data.title}</div>
      <Flex className="flex">
        <SimpleGrid className="grid" columns={9} spacing={20}>
          <GridItem colSpan={2}>
            <Table>
              <Thead>
                <Tr>
                  <Th>
                    Doba přípravy: <br /> {state.data.preparationTime} minut
                  </Th>
                </Tr>
                <Tr>
                  <Th>Počet porcí: {state.data.servingCount}</Th>
                </Tr>
                <Tr>
                  <Th>Příloha: {state.data.sideDish}</Th>
                </Tr>
              </Thead>
            </Table>
          </GridItem>
          <GridItem colSpan={3}>
            <Table>
              <Thead>
                <Tr>
                  <Th>Ingredience:</Th>
                </Tr>
              </Thead>
              <Tbody>
                {state.data.ingredients.map((ingredient, index) => (
                  <Tr className="table" key={index}>
                    <Td className="amount">{ingredient.amount}</Td>
                    <Td className="unit">{ingredient.amountUnit}</Td>
                    <Td className="tname">{ingredient.name}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </GridItem>

          <GridItem colSpan={4}>
            Postup:
            <ReactMarkdown>{state.data.directions}</ReactMarkdown>
          </GridItem>
        </SimpleGrid>
      </Flex>

      <div>
        <img
          src={`/images/${state.data.slug}.jpeg`}
          title={state.data.title}
          alt={state.data.title}
          width="700px"
        />
      </div>
    </>
  );
}
