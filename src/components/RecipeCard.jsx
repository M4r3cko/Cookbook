import { Card, CardFooter, HStack, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { CheckCircleIcon } from '@chakra-ui/icons';

export function RecipeCard({ item }) {
  const { title, preparationTime, slug } = item;

  let color = 'lime';
  if (preparationTime >= 100) {
    color = 'red';
  } else if (preparationTime > 50 && preparationTime < 100) {
    color = 'tomato';
  }

  return (
    <Link to={'/recept/' + slug}>
      <Card className="card">
        <img
          className="card-img"
          src={true ? `/images/${slug}.jpeg` : '../images/food-placeholder.png'}
          title={title}
          alt={title}
        />

        <CardFooter className="card-footer">
          <VStack className="VStack">
            <div>
              <div className="name">{title}</div>
              <div className="prep" color={color}>
                {preparationTime} minut
              </div>
            </div>
          </VStack>
          <HStack>
            <CheckCircleIcon boxSize={8} color={color} float="right" />
          </HStack>
        </CardFooter>
      </Card>
    </Link>
  );
}
