import Style from "./App.module.scss";
import { Box } from "@mui/material";
import Main from "./components/Main";
function App() {
  return (
    <Box component="div" className={Style.root}>
      <Main />
    </Box>
  );
}

export default App;
