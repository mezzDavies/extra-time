import { useState } from "react";
import Time from "./Time";
import dayjs from "dayjs";

import Box from "@mui/system/Box";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import footballDepartureTimeCalculator from "../utils/football-depart-calc";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export default function Form() {
  const [kickOffTime, setKickoffTime] = useState(dayjs("2022-04-17T15:00"));
  const [travelMethod, setTravelMethod] = useState("walking");
  const [timeToLeave, setTimeToLeave] = useState("");

  const handleKickOffTimeChange = (newKickOffTime) => {
    setKickoffTime(newKickOffTime);
  };
  const handleTravelMethodChange = (event) => {
    setTravelMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const redactedKickOffTime = kickOffTime.format("HH:mm");
    const isWalking = travelMethod === "walking" ? true : false;
    setTimeToLeave(
      footballDepartureTimeCalculator(redactedKickOffTime, isWalking)
    );
  };

  return (
    <>
      <Box
        component="form"
        sx={{ bgcolor: "white", m: 2, borderRadius: 1.5, mt: 6 }}
        noValidate
        autoComplete="off"
      >
        <FormControl fullWidth>
          <MobileTimePicker
            sx={{ mt: 4, mx: 2 }}
            label="Kick-off Time (24hr)"
            ampm={false}
            value={kickOffTime}
            onChange={handleKickOffTimeChange}
          />
        </FormControl>

        <FormControl fullWidth>
          <FormLabel id="travel-method" sx={{ mt: 3, mx: 2, mb: 1 }}>
            Travel choice
          </FormLabel>
          <RadioGroup
            aria-labelledby="travel-method"
            defaultValue="walking"
            name="radio-buttons-group"
            value={travelMethod}
            onChange={handleTravelMethodChange}
            sx={{ mx: 2, mb: 4 }}
          >
            <FormControlLabel
              value="walking"
              control={<Radio />}
              label="Walking"
            />
            <FormControlLabel
              value="driving"
              control={<Radio />}
              label="Driving"
            />
          </RadioGroup>
        </FormControl>
        <Box textAlign="center">
          <Button
            sx={{ mb: 2 }}
            variant="contained"
            type="submit"
            color="secondary"
            onClick={handleSubmit}
          >
            Calculate
          </Button>
        </Box>
      </Box>
      <Time timeToLeave={timeToLeave} />
    </>
  );
}
