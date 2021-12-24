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
  const [over, setOver] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [totalXp, setTotalXp] = useState(0);

  const countDownOver = (value) => {
    setOver(value);
  }

  const setXp = (current) => {
    setTotalXp((totalXp) => totalXp + current)
  }

  const setAnswered = () => {
    setAnsweredQuestions((answeredQuestions) => answeredQuestions + 1)
  }

  console.log('over', over);
  console.log('questions', questions);



  useEffect(async () => {
    let dataQuestions = await fetch(process.env.apiUrl + "/questions").then(
      (res) => res.json()
    );

    setQuestions(dataQuestions);
  }, []);

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
        sx={{ backgroundColor: "blue", }}>
        <Grid container
          justifyContent="center"
        >
          <Grid item
            xs={12}
            md={6}
            sx={{ maxWidth: '1320px' }}>

            {/* {timeleft ?  <Success correctAnswers={5} /> : }*/}
            {(over === true || answeredQuestions === 4)
              ? <Success
                questions={questions}
                answeredQuestions={answeredQuestions} />
              : <Quiz
                totalXp={totalXp}
                setAnswered={setAnswered}
                setXp={setXp}
                countDownOver={countDownOver}
                over={over}
                questions={questions}
                answeredQuestions={answeredQuestions} />
            }
          </Grid>
          {/* <StartQuiz/> */}
        </Grid>
      </Container>
    </React.Fragment>
  )
}
