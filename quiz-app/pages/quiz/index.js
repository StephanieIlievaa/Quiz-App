import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Quiz from '../../components/quiz-container/Quiz.js';
import Success from '../../components/great-job/Success.js';
import Head from 'next/head';

export default function Index() {

  const [questions, setQuestions] = useState([]);
  const [over, setOver] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [totalXp, setTotalXp] = useState(0);
 const [nextQuestion, setNextQuestion] = useState(false)

  const next = (value) => {
setNextQuestion(value);
  }

  const countDownOver = (value) => {
    setOver(value);
  }

  const setXp = (current) => {
    setTotalXp((totalXp) => totalXp + current)
  }

  const setAnswered = () => {
  setAnsweredQuestions((answeredQuestions) => answeredQuestions + 1)

  }


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
        
        sx={{ backgroundColor: "blue", height: '1200px'}}>
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
        </Grid>
      </Container>
    </React.Fragment>
  )
}
