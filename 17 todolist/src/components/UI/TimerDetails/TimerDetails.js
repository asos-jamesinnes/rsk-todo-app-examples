import React from 'react';
import { withRouter, Redirect, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import classes from './TimerDetails.module.scss';

const timerDetails = (props) => {
    const itemId = parseInt(props.match.params.itemId,10);
    const item = props.todoList.find(item => item.id === itemId);
    
    return item ? (
        <div className={['content'].join(' ')}>
            <ul className={[classes.List, 'no-list-style', 'flex', 'flex--column'].join(' ')}>
                <li className={['flex', 'flex--justify-between', 'flex--align-center', classes.ListItem].join(' ')}>
                    <span>Value:</span><span>{item.value}</span>
                </li>
                <li className={['flex', 'flex--justify-between', 'flex--align-center', classes.ListItem].join(' ')}>
                    <span>Status:</span><span>{item.completed ? 'Completed' : 'Active'}</span>
                </li>
                <li className={['flex', 'flex--justify-between', 'flex--align-center', classes.ListItem].join(' ')}>
                    <span>Time:</span>
                    <span className={[classes.Time, 'flex', 'flex--column'].join(' ')}>
                        <span className={['flex', 'flex--justify-between'].join(' ')}>
                            <span>Hours:</span>
                            <span>{item.timer.hours !== null ? item.timer.hours : null}</span>
                        </span>
                        <span className={['flex', 'flex--justify-between'].join(' ')}>
                            <span>Minutes:</span>
                            <span>{item.timer.minutes === null ? null : `${item.timer.minutes < 10 ? '0' : ''}${item.timer.minutes}`}</span>
                        </span>
                        <span className={['flex', 'flex--justify-between'].join(' ')}>
                            <span>Seconds:</span>
                            <span>{item.timer.seconds === null ? null : `${item.timer.seconds < 10 ? '0' : ''}${item.timer.seconds}`}</span>
                        </span> 
                    </span>
                </li>
            </ul>
            <NavLink to='/' className={['no-text-decoration'].join(' ')}>
                <Fab variant="extended" aria-label="Delete">
                    <NavigationIcon className={classes.extendedIcon} />
                Home
                </Fab>
            </NavLink>
        </div>
    ) : <Redirect to='/'/>;
};

const mapStateToProps = state => {
    return {
        todoList: state.tasks.list
    };
};

export default withRouter(connect(mapStateToProps, null)(timerDetails));