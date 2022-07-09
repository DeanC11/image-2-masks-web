// import { useState } from "react";
import { Select } from "@mantine/core";
import defaultPalettes from "../palettes.json";
// import useFilePicker from "use-file-picker";

const PaletteSelect = () => {
  // const [palettes, setPalettes] = useState(defaultPalettes);
  // const importPalette = (query) => {  }

  return (
    <Select
      label="Colour palette"
      data={defaultPalettes}
      placeholder="Select palette"
      nothingFound="No matching palettes"
      searchable
      // creatable
      // getCreateLabel={(query) => `+ Import ${query}`}
      // onCreate={(query) => setPalettes((current) => [...current, query])}
    />
  );
};

export default PaletteSelect;
