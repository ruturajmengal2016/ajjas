import Style from "./App.module.scss";
import { Box } from "@mui/material";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <Box component="div" className={Style.root}>
      <Sidebar />
      <Main />
    </Box>
  );
}

export default App;
