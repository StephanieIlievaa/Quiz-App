import styles from './Startquiz.module.scss';
import { Button } from '@mui/material';
import useState from 'react';
import { Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from '@mui/material';

export default function StartQuiz({ onChange }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
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
                      <Link href="/quiz">
                <motion.button
               
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                    }}
                    style={{
                        borderRadius: '30px',
                        padding: '20px 50px',
                        fontSize: '20px',
                        fontFamily: 'laca, sans-serif'
                    }}
                >
                    START
                </motion.button></Link>
            </Tooltip>
        </motion.div>
    )
}