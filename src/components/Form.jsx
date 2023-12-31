import { useState } from "react";
import Time from "./Time";
import TimePicker from "./TimePicker";
import TravelPicker from "./TravelPicker";

import dayjs from "dayjs";

import footballDepartureTimeCalculator from "../utils/football-depart-calc";

import Box from "@mui/system/Box";
import { Button } from "@mui/material";

export default function Form() {
  const [kickOffTime, setKickoffTime] = useState(dayjs("2022-04-17T15:00"));
  const [travelMethod, setTravelMethod] = useState("walking");
  const [timeToLeave, setTimeToLeave] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const redactedKickOffTime = kickOffTime.format("HH:mm");
    const isWalking = travelMethod === "walking" ? true : false;
    const newTimeToLeave = footballDepartureTimeCalculator(
      redactedKickOffTime,
      isWalking
    );
    setTimeout(() => {
      setTimeToLeave(newTimeToLeave);
    }, 450);
  };

  return (
    <>
      <Box
        component="form"
        sx={{ bgcolor: "white", m: 2, borderRadius: 1.5, mt: 6 }}
        noValidate
        autoComplete="off"
      >
        <TimePicker kickOffTime={kickOffTime} setKickoffTime={setKickoffTime} />

        <TravelPicker
          travelMethod={travelMethod}
          setTravelMethod={setTravelMethod}
        />

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
