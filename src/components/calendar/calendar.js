import React from "react";
import { InlineWidget } from "react-calendly";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Payment from "../payment";

const Calendar = () => {
  return (
    <div>
      <Link to="/">
        <Button color="warning">Назад</Button>
      </Link>
      <InlineWidget url="https://calendly.com/danilissadovski/15min" />
      <Payment />
    </div>
  );
};

export default Calendar;
