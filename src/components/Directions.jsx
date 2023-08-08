import { Textarea } from '@chakra-ui/react';

export function Directions({ directions, setDirections }) {
  return (
    <>
      <div className="directions">
        <legend className="legend">Postup</legend>
        <Textarea
          height={400}
          minWidth={600}
          placeholder="Zde napište postup recetpu"
          required
          value={directions}
          onChange={(e) => setDirections(e.target.value)}
        />
      </div>
    </>
  );
}
