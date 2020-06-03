import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>{    
    return {
        root: {
            backgroundColor: theme.palette.grey["100"],
            borderRadius: theme.shape.borderRadius,
            marginBottom: theme.spacing(2),
            boxShadow: theme.shadows["1"]
        },
    }
});

