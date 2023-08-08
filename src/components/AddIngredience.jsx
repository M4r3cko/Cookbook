import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useState } from 'react';

export function AddIngredience({
  ingredients,
  onAddIngredience,
  removeIngredient,
}) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [amountUnit, setAmountUnit] = useState('');

  const resetIngredientForm = () => {
    setName('');
    setAmount('');
    setAmountUnit('');
  };

  function onAddIngredienceClick() {
    onAddIngredience({
      name,
      amount,
      amountUnit,
      isGroup: false,
    });
    resetIngredientForm();
  }

  return (
    <div className="ingredience">
      <legend className="legend">Ingredience</legend>
      <div>
        {ingredients.length ? (
          <table>
            <thead>
              <tr>
                <th>-</th>
                <th>Množství</th>
                <th>Jednotka</th>
                <th>Název</th>
              </tr>
            </thead>
            <tbody className="add-ingredient">
              {ingredients?.map((ingredient, index) => (
                <tr key={index}>
                  <td>
                    <Button
                      colorScheme="white"
                      onClick={() => removeIngredient(index)}
                    >
                      <img
                        className="trash"
                        src="/images/trash.jpeg"
                        alt="delete"
                      ></img>
                    </Button>
                  </td>
                  <td>{ingredient.amount}</td>
                  <td>{ingredient.amountUnit}</td>
                  <td>{ingredient.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <p className="no-information">
              <br />
              Zatím žádné ingredience
              <br />
              <br />
            </p>
          </div>
        )}
      </div>

      <div className="_2in1">
        <div>
          <Input
            min={0}
            max={999999999999}
            type="number"
            name="amount"
            placeholder="Množství"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          ></Input>
        </div>
        <div>
          <Input
            type="text"
            name="amountUnit"
            placeholder="Jednotka"
            value={amountUnit}
            onChange={(e) => setAmountUnit(e.target.value)}
          />
        </div>
      </div>
      <div>
        <InputGroup size="md">
          <Input
            type="text"
            name="name"
            placeholder="Název"
            class="autocomplete"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputRightElement width="flex">
            <Button onClick={() => onAddIngredienceClick()}>Přidat</Button>
          </InputRightElement>
        </InputGroup>
      </div>
    </div>
  );
}
