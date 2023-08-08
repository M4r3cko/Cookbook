import { Button } from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import { api } from '../api';

export function Delete({ receiptData }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    api.delete('/recipes/' + receiptData._id).then(() => {
      navigate('../');
    });
  };

  return (
    <div className="buttons">
      <Button
        colorScheme={'red'}
        borderRadius={20}
        onClick={() => {
          const confirmBox = window.confirm(
            'Chcete opravdu smazat tento recept?',
          );
          if (confirmBox === true) {
            handleDelete();
          }
        }}
      >
        Smazat
      </Button>
    </div>
  );
}
