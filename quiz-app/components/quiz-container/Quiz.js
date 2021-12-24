import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountDown from './Countdown.js';

import { Grid, Container, IconButton, InputBase, Button, TextField, Checkbox } from "@mui/material";
import styles from "./Quiz.module.scss"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Quiz({
  questions,
  questionsCount = "1",
  xpCount = "210",
}) {
  const [expanded, setExpanded] = React.useState('panel');


  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <div className={styles.containerWrapper}>
      <Grid container
        className={styles.props}
        maxWidth={'100%'}
        display={'flex'}
        justifyContent={'center'}>
        <Grid container
          pt={'15%'}
          pb={'15%'}
          display={'flex'}>
          <Grid item
            xs={4}>
            {questionsCount}/5
            <p className={styles.title}>QUESTIONS</p></Grid>
          <Grid item xs={4}>
          <CountDown />
            <p className={styles.title}>
            
              TIME REMAINING
            </p>
          </Grid>
          <Grid item
            xs={4}>
            {xpCount}
            <p className={styles.title}>
              TOTAL XP</p></Grid>
        </Grid>

        <Grid container
          gap={'7px'}>
          {questions.map((question, idx) => {

            return <Grid item
              xs={12}
              style={{ width: '130%' }}>
              <Accordion
                expanded={expanded === `panel${idx}`}
                onChange={handleChange(`panel${idx}`)}
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  padding: '0px 0px 0px 20px',
                  backgroundColor: '#FAFBFD'
                }}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">

                  <Grid item
                    sx={{
                      display: "row",
                      padding: '0px 400px 0px 0px'
                    }}>
                    <Typography
                      className={styles.typographyEl}>
                      Type the missing line</Typography>
                    <p
                      className={styles.plusXp}>
                      +{question.xp}XP</p>
                  </Grid>
                  <Checkbox style={{ border: '50%' }}
                    checkedIcon={<CheckCircleIcon />}
                    defaultChecked color="success" />
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container >
                    <Grid item xs={12}>
                      <img src={question.questionUrl} /></Grid>
                    <Grid item xs={12}></Grid>
                  </Grid>
                  <TextField
                    type="text"
                    placeholder="value"
                    onChange={(e) => answerHandler(e)}
                  >
                  </TextField>
                </AccordionDetails>
              </Accordion>
            </Grid>
          })}
        </Grid>
      </Grid>
    </div>
  )
}
























