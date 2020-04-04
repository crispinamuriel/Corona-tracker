import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Grid, makeStyles } from '@material-ui/core';
import AppCalendar from './Calendar';

const useStyles = makeStyles({
  root: {
    '&:hover': {
        textDecoration: 'none',
      }
  },
  button: {
    background: `linear-gradient(45deg, #4760ff, #82a4f8)`,
    width: '320px',
    boxShadow: '0px 1px 10px 0px #4760ff',
    margin: '10px',
    color: 'white',
    '&:hover': {
        boxShadow: '0px 1px 20px 0px #4760ff',
      }
  },
});

function HealthLogButton() {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <div >
      <Link className={classes.root} to="/symptomsurvey">
        <Button className={classes.button} variant="contained">
          {t('surveyButtonText')}
        </Button>
      </Link>
      <Grid container direction="column" alignContent="center">
        <AppCalendar />
      </Grid>
    </div>
  );
}
export default function MyHealthLog() {
  return <HealthLogButton />;
}
