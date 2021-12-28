import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountDown from './Countdown.js';
import { Grid, InputAdornment, Input, Container, IconButton, InputBase, Button, TextField, Checkbox } from "@mui/material";
import styles from "./Quiz.module.scss"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/material/styles';

export default function Quiz({
  questions,
  totalXp,
  setAnswered,
  setXp,
  over,
  countDownOver,
  answeredQuestions,

}) {
  const [expanded, setExpanded] = useState('panel');
  const [answerInput, setAnswerInput] = useState('');
  
  // const [shake, setShake] = useState(false);
  // setTimeout(() => {
  //   setShake(true)
  // }, 5000)

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const StyledTextField = styled(TextField)(() => ({
    '& fieldset': {
      borderRadius: '25px',
      border: '1px solid'
    },
  }));

  return (
    <div className={styles.containerWrapper}>
      <Grid container
        className={styles.props}
        maxWidth='100%'
        display={'flex'}
        justifyContent={'center'}
        sx={{ pb: 5, mb: 5 }}>
        <Grid container
          pt={'15%'}
          pb={'15%'}
          display={'flex'}
          sx={{ textAlign: 'center' }}>
          <Grid item
            xs={4}>
            {`${answeredQuestions}/${questions.length}`}
            <p className={styles.title}>QUESTIONS</p></Grid>
          <Grid item xs={4}>
            <CountDown over={over} countDownOver={countDownOver} />
            <p className={styles.title}>

              TIME REMAINING
            </p>
          </Grid>
          <Grid item
            xs={4}>
            {totalXp}
            <p className={styles.title}>
              TOTAL XP</p></Grid>
        </Grid>

        <Grid container
          gap={'7px'}>

          {questions.map((question, idx) => {

            return <Grid item
              xs={12}
              style={{ width: '130%' }}>
                <motion.div>
              <Accordion
                expanded={expanded === `panel${idx}`}
                onChange={handleChange(`panel${idx}`)}
                sx={{ px: 5, py: 1 }}
                style={{
                  width: '100%',
                  borderRadius: '30px',
                  backgroundColor: '#FAFBFD'
                }}>
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                  sx={{ alignItems: 'center' }}>
                  <Grid item
                    xs={6}
                    md={10}
                    sx={{
                      display: "row",
                    }}>
                    <div>
                      <Typography
                        className={styles.typographyEl}>
                        Type the missing line
                      </Typography>
                      <p className={styles.plusXp}>
                        <span>+{question.xp}XP</span>
                      </p>
                    </div>
                  </Grid>
                  <Grid item
                    xs={6}
                    md={2}
                    sx={{ textAlign: 'end' }}>
                    <CheckCircleIcon color='success' />
                  </Grid>

                </AccordionSummary>
                <AccordionDetails>
                  <Grid container >
                    <Grid item xs={12}>
                      <img
                        style={{ width: '100%' }}
                        src={question.questionUrl} />
                    </Grid>
                    <Grid item xs={12}>
                      <StyledTextField
                        sx={{ width: '100%', mt: 5 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">PRESS ENTER TO SUBMIT</InputAdornment>,
                        }}
                        type="input"
                        onKeyPress={event => {
                          if (event.key === "Enter") {
                            setAnswerInput(event.target.value)
                            if (answerInput !== question.correctAnswer) {
                              alert('Incorrect Answer!')
                            } if (answerInput === question.correctAnswer) {
                              setAnswered();
                              setXp(question.xp);   
                              console.log('Correct!!!');
                            }
                          }
                        }}

                      />
                    </Grid>
                  </Grid>

                </AccordionDetails>
              </Accordion>
              </motion.div>
            </Grid>
          })}
        </Grid>
      </Grid>
    </div>
  )
}
























