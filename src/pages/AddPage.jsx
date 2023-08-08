import '../style.css';
import { useNavigate } from 'react-router-dom';
import { AddEditForm } from '../components/AddEditForm';

export function AddRecipe() {
  const navigate = useNavigate();

  function handleSubmit(e, formData) {
    e.preventDefault();

    try {
      fetch('https://exercise.cngroup.dk/api/recipes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          console.log('added new recipe', response);
        })
        .then(() => navigate('/'));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="AddEdit">
      <AddEditForm handleSubmit={handleSubmit} />
    </div>
  );
}
