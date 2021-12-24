import styles from './Startquiz.module.scss';
import { Button } from '@mui/material';

export default function StartQuiz({onChange}) {


    return( 
        <div className={styles.start}>
            <Button  variant="contained">START</Button>
        </div>
    )
}