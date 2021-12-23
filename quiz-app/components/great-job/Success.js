import { Grid } from "@mui/material"
import styles from "./Success.module.scss"
export default function Success({ correctAnswers }) {
    return (<div className={styles.wrapper}>
        <Grid container pt={'40%'} pb={'70%'}>
            <Grid item xs={12} className={styles.title} sx={{ display: 'flex', justifyContent: "center" }} >
                <h1 className={styles.great}>GREAT JOB</h1></Grid>
            <Grid item p={'35px'} xs={12} className={styles.correct} sx={{ display: "row", textAlign: "center" }}>
                <span className={styles.numbers}>{correctAnswers}/5</span>
                <p style={{ padding: '0px 140px 0px 136px' }} >QUESTIONS ANSWERED CORRECTLY</p></Grid> </Grid>
    </div>)
}