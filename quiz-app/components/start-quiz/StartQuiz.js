import styles from './Startquiz.module.scss';
import { Button } from '@mui/material';
import useState from 'react';
import { Tooltip } from '@mui/material';


export default function StartQuiz({ onChange }) {



    return (
        <div
            className={styles.start}>
            <p style={{
                color: 'white',
                fontFamily: 'laca, sans-serif',
                fontWeight: 'bold',
                fontSize: '70px'
            }}>
                CONTINUE TO QUIZ
            </p>
            <Tooltip 
            title="Цък 🖱️">
            <Button
                classname={styles.button}
                variant="contained"
                size="large"
                sx={{ 
                    borderRadius: '30px', 
                    padding: '10px 40px 10px 40px'}}
            >
                START
            </Button>
</Tooltip>
        </div>
    )
}