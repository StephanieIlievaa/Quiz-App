import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
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

        sx={{ backgroundColor: "blue", height: '1200px' }}>
        <Grid container
          justifyContent="center"
        >
          <Grid item
            xs={12}
            md={6}
            sx={{ maxWidth: '1320px' }}>
            <StartQuiz />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}
