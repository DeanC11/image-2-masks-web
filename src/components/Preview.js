import { useState } from "react";
import { Center, Group, SegmentedControl, Stack, Text } from "@mantine/core";

const Preview = (props) => {
  const { images } = props;
  const [tab, setTab] = useState("Preview");

  return (
    <Stack
      className="Preview"
      p="lg"
      sx={(theme) => ({ backgroundColor: theme.colors.gray[2] })}
    >
      <Group position="center">
        <SegmentedControl
          size="md"
          value={tab}
          onChange={setTab}
          data={["Preview", "Code"]}
        />
      </Group>

      <Center className="full-height">
        {/*{props.children == null ? <></> : <></>}*/}
        <Text>
          {/* testing */}
          {tab === "Preview" ? "Preview" : "Code"}
        </Text>
      </Center>
    </Stack>
  );
};

export default Preview;
