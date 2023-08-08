import { Button, IconButton } from '@chakra-ui/react';
import React from 'react';

export const LoadImage = () => {
  return (
    <div
      style={{
        display: 'flex',
        margin: 'auto',
        width: 400,
        flexWrap: 'wrap',
      }}
    >
      <div style={{ width: '100%', float: 'left' }}>
        <h3>Nahrajte nebo vyfoťe obrázek receptu</h3> <br />
      </div>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        id="contained-button-file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <h3> OR </h3>
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        style={{ display: 'none' }}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <p>camera</p>
        </IconButton>
      </label>
    </div>
  );
};
