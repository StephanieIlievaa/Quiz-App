import styles from '../styles/Home.module.scss'
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Quiz from '../components/quiz-container/Quiz.js';
import Accordion from '../components/quiz-container/Quiz.js'
import Countdown from 'react-countdown'
import Success from '../components/great-job/Success.js';
import Head from 'next/head';
import StartQuiz from '../components/start-quiz/StartQuiz.js'

export default function Home() {

  const [questions, setQuestions] = useState([]);

  useEffect(async () => {
    let dataQuestions = await fetch(process.env.apiUrl + "/questions").then(
      (res) => res.json()
    );

    setQuestions(dataQuestions);
  }, []);



  // const answerHandler = (isCorrect) => {
  //   setShowQuestion(false);
  //   if (isCorrect) {
  //     setNextQuestion()
  //     setXp(xp + 1);
  //   }

  return (
    <React.Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/sly1ocm.css">
        </link>
      </Head>
      <Container
        maxWidth="100%"
        height={'30%'}
        sx={{ backgroundColor: "blue" }}>
        <Grid container
          justifyContent="center">
          <Grid item
            xs={12}
            md={4}>
            {/* {timeleft ?  <Success correctAnswers={5} /> : }*/}
            <Quiz questions={questions} />
            </Grid>
            {/* <StartQuiz/> */}
        </Grid>
      </Container>
    </React.Fragment>
  )
}
