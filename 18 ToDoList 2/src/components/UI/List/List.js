import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import classes from './List.module.scss';

const list = (props) => {
    return typeof props.items === 'object' && Array.isArray(props.items) && props.items.length ? (
        <div className={[classes.List, 'content'].join(' ')}>
            <ul className={['no-list-style', 'flex', 'flex--column'].join(' ')}>
                {props.items.map(item => (
                    <li key={item.id} className={['flex', 'flex--justify-between', 'flex--align-center', classes.ListItem].join(' ')}>
                        <span className={[classes.Task, 'flex', 'flex--justify-between', 'flex--align-center'].join(' ')}>
                            <span className={[item.completed ? classes.Completed : ''].join(' ')}>
                                {item.value}
                            </span>
                            <span>
                            Time: {item.timer.hours !== null ? `${item.timer.hours}:` : null}
                                {item.timer.minutes === null ? null : `${item.timer.minutes < 10 ? '0' : ''}${item.timer.minutes}:`}
                                {item.timer.seconds === null ? null : `${item.timer.seconds < 10 ? '0' : ''}${item.timer.seconds}`}
                            </span>
                        </span>
                        <span className={[classes.Buttons, 'flex', 'flex--justify-between', 'flex--align-center'].join(' ')}>
                            <NavLink to={`/timer/${item.id}`} className={['no-text-decoration'].join(' ')}>
                                <Fab
                                    variant="extended"
                                    size="small"
                                    color="primary"
                                    aria-label="Add"
                                >
                                    <NavigationIcon />Details
                                </Fab>
                            </NavLink>
                            <Button {...(!item.completed && { disabled: true })} variant="contained" color="primary" onClick={() => props.handleStartTask(item.id)}>
                            Start
                            </Button>
                            <Button {...(item.completed && { disabled: true })} variant="contained" color="secondary" onClick={() => props.handleStopTask(item.id)}>
                            Stop
                            </Button>
                            
                            <IconButton aria-label="Delete" className={classes.margin} onClick={() => props.handleRemoveTask(item.id)}>
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    ) : null;
};

export default list;