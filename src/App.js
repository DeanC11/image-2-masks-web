import { Grid, MantineProvider } from "@mantine/core";
import SideMenu from "./components/SideMenu";
import Preview from "./components/Preview";
import "./App.css";

function App() {

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "Inter, sans-serif",
        primaryColor: "indigo",
      }}
    >
      <Grid className="App" gutter={0}>
        <Grid.Col xs={5} md={4} xl={3}>
          <SideMenu />
        </Grid.Col>

        <Grid.Col xs={7} md={8} xl={9}>
          <Preview />
        </Grid.Col>
      </Grid>
    </MantineProvider>
  );
}

export default App;
