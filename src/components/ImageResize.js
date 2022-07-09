import { Checkbox, NumberInput, Text } from "@mantine/core";

const ImageResize = () => {
  const numberParser = (value) => value.replace(/\d?\s*p$|\D|\s|,/g, "");
  const numberFormatter = (value) =>
    !Number.isNaN(parseFloat(value))
      ? `${value} px`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : "";
  const minNumber = 1;
  const maxNumber = 500;

  return (
    <div>
      <Text weight="bold">Resize</Text>
      <NumberInput
        label="Width"
        placeholder="Initial width"
        min={minNumber}
        max={maxNumber}
        parser={numberParser}
        formatter={numberFormatter}
        pt="xs"
      />
      <NumberInput
        label="Height"
        placeholder="Initial height"
        min={minNumber}
        max={maxNumber}
        parser={numberParser}
        formatter={numberFormatter}
        pt="xs"
      />
      <Checkbox label="Keep aspect ratio" pt="sm" defaultChecked />
    </div>
  );
};

export default ImageResize;
