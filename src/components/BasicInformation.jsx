import { Input } from '@chakra-ui/react';

export function BasicInformation({
  preparationTime,
  setPreparationTime,
  servingCount,
  setServingCount,
  sideDish,
  setSideDish,
}) {
  return (
    <>
      <legend className="legend">Základní údaje</legend>
      <div>
        <label>Doba přípravy</label>
        <Input
          type="number"
          required
          name="preparationTime"
          value={preparationTime}
          onChange={(e) => setPreparationTime(e.target.value)}
        />
      </div>
      <div>
        <label>Počet porcí</label>
        <Input
          type="number"
          required
          name="servingCount"
          value={servingCount}
          onChange={(e) => setServingCount(e.target.value)}
        />
      </div>
      <div>
        <label>Příloha</label>
        <Input
          type="text"
          required
          name="sideDish"
          value={sideDish}
          onChange={(e) => setSideDish(e.target.value)}
        />
      </div>
    </>
  );
}
