import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export default function TravelPicker({ setTravelMethod, travelMethod }) {
  const handleTravelMethodChange = (event) => {
    setTravelMethod(event.target.value);
  };
  return (
    <FormControl fullWidth>
      <FormLabel id="travel-method" sx={{ mt: 3, mx: 2, mb: 1 }}>
        Travel choice
      </FormLabel>
      <RadioGroup
        aria-labelledby="travel-method"
        defaultValue="walking"
        name="radio-buttons-travel-group"
        value={travelMethod}
        onChange={handleTravelMethodChange}
        sx={{ mx: 2, mb: 4 }}
      >
        <FormControlLabel value="walking" control={<Radio />} label="Walking" />
        <FormControlLabel value="driving" control={<Radio />} label="Driving" />
      </RadioGroup>
    </FormControl>
  );
}
