import { Input, Button, Text, Box, Flex, Spacer, Link } from '@chakra-ui/react';

import { useState } from 'react';
import { Directions } from '../components/Directions';
import '../style.css';
import { AddIngredience } from '../components/AddIngredience';
import { BasicInformation } from '../components/BasicInformation';

import ReactMarkdown from 'https://esm.sh/react-markdown@7';
import { useNavigate } from 'react-router-dom';

export function AddEditForm({ handleSubmit, defaultValues }) {
  const [title, setTitle] = useState(defaultValues?.title || '');
  const [preparationTime, setPreparationTime] = useState(
    defaultValues?.preparationTime || '',
  );
  const [directions, setDirections] = useState(defaultValues?.directions || '');
  const [servingCount, setServingCount] = useState(
    defaultValues?.servingCount || '',
  );
  const [sideDish, setSideDish] = useState(defaultValues?.sideDish || '');
  const [ingredients, setIngredients] = useState(
    defaultValues?.ingredients || [],
  );
  const navigate = useNavigate();

  const onAddIngredience = (ingredient) => {
    const updatedIngredients = [...ingredients, ingredient];

    setIngredients(updatedIngredients);
  };

  const removeIngredient = (index) => {
    let data = [...ingredients];
    data.splice(index, 1);
    setIngredients(data);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <>
      <Flex>
        <Box>
          <div className="heading">
            <h1>{title}</h1>
          </div>
        </Box>
        <Spacer />
        <Box>
          <Link to="/">
            <Button
              onClick={(e) =>
                handleSubmit(e, {
                  title,
                  preparationTime,
                  directions,
                  servingCount,
                  sideDish,
                  ingredients,
                })
              }
              borderRadius={20}
            >
              Uložit
            </Button>
          </Link>

          <Button
            colorScheme="red"
            borderRadius={20}
            onClick={() => {
              const confirmBox = window.confirm(
                'Recept není uložen, chcete opravdu odejít bez uložení?',
              );
              if (confirmBox === true) {
                handleCancel();
              }
            }}
          >
            Zrušit
          </Button>
        </Box>
      </Flex>

      <form
        onSubmit={(e) =>
          handleSubmit(e, {
            title,
            preparationTime,
            directions,
            servingCount,
            sideDish,
            ingredients,
          })
        }
      >
        <fieldset className="fieldset">
          <Input
            placeholder="Nový recept"
            required="required"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </fieldset>

        <Flex>
          <Box>
            <Text>
              <div className="basic-information">
                <fieldset className="fieldset">
                  <BasicInformation
                    preparationTime={preparationTime}
                    setPreparationTime={setPreparationTime}
                    servingCount={servingCount}
                    setServingCount={setServingCount}
                    sideDish={sideDish}
                    setSideDish={setSideDish}
                  />
                </fieldset>
              </div>
            </Text>
          </Box>
          <Box>
            <Text>
              <fieldset className="fieldset">
                <AddIngredience
                  ingredients={ingredients}
                  onAddIngredience={onAddIngredience}
                  removeIngredient={removeIngredient}
                />
              </fieldset>
            </Text>
          </Box>
          <Box flex="1" min-width={600}>
            <Text>
              <div>
                <fieldset className="fieldset">
                  <Directions
                    directions={directions}
                    setDirections={setDirections}
                  />
                </fieldset>
              </div>
            </Text>
          </Box>
        </Flex>
      </form>
      <Flex className="fieldset">
        <div>
          Postup:
          <ReactMarkdown>{directions}</ReactMarkdown>
        </div>
      </Flex>
    </>
  );
}
