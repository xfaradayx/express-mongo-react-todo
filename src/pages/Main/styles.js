import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {   
    console.log('theme', theme);
    
    return {
        root: {
            marginTop: theme.spacing(10)
        },
    }
});

