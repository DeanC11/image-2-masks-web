import { Button, Divider, Stack, ScrollArea } from "@mantine/core";
import AppTitle from "./AppTitle";
import ImageResize from "./ImageResize";
import ImageSelect from "./ImageSelect";
import PaletteSelect from "./PaletteSelect";

const SideMenu = () => {

  return (
    <Stack className="SideMenu" spacing="xl" py="xl" px="lg">
      <AppTitle />

      <Divider mx="-lg" />

      <ScrollArea className="flex-grow" my="-xl" mx="-lg">
        <Stack spacing="xl" py="xl" px="lg">
          <ImageResize />

          <PaletteSelect />

          <div>
            <Button variant="subtle" compact>
              Create BMP
            </Button>
          </div>
        </Stack>
      </ScrollArea>

      <Divider mx="-lg" />

      <ImageSelect />
    </Stack>
  );
};

export default SideMenu;
