import '../style.css';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../api';
import { AddEditForm } from '../components/AddEditForm';

const DEFAULT_STATE = {
  data: null,
  isLoading: false,
  isError: false,
};

export function EditPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [state, setState] = useState(DEFAULT_STATE);

  const onFetchSuccess = ({ data }) => {
    setState({
      data,
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

  function handleSubmit(e, formData) {
    e.preventDefault();

    try {
      fetch('https://exercise.cngroup.dk/api/recipes/' + state.data._id, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          console.log('recipe edited', response);
        })
        .then(() => {
          navigate('/');
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="create">
      <AddEditForm handleSubmit={handleSubmit} defaultValues={state.data} />
    </div>
  );
}
