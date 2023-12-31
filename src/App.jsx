import Header from "./components/Header";
import Form from "./components/Form";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container sx={{ bgcolor: "#15162A", height: "100vh", p: "0.75rem" }}>
        <CssBaseline />
        <Header />
        <Form />
      </Container>
    </LocalizationProvider>
  );
}

export default App;
