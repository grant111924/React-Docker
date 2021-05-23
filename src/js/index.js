import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

ReactDOM.render(
    <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
                React + Docker Dev Environment
            </Typography>
        </Container>
    </React.Fragment>
  ,
  document.querySelector('#root'),
);
