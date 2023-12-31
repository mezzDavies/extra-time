import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import FormControl from "@mui/material/FormControl";
export default function DatePicker({ kickOffTime, setKickoffTime }) {
  const handleKickOffTimeChange = (newKickOffTime) => {
    setKickoffTime(newKickOffTime);
  };

  return (
    <FormControl fullWidth>
      <MobileTimePicker
        sx={{ mt: 4, mx: 2 }}
        label="Kick-off Time (24hr)"
        ampm={false}
        value={kickOffTime}
        onChange={handleKickOffTimeChange}
      />
    </FormControl>
  );
}
