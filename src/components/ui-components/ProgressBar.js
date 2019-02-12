import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  linearColorPrimary: {
    backgroundColor: '#d9ceff',
    height: "0.8rem",
    borderRadius: "0.3rem"
  },
  linearBarColorPrimary: {
    backgroundColor: '#7451e9',
  },
});

class LinearDeterminate extends React.Component {
  state = {
    completed: this.props.endsAt,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 10);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  timer = null;

  progress = () => {
    const { completed } = this.state;
    if (completed < this.props.endsAt) {
      const diff = 0.5;
      this.setState({ completed: Math.min(completed + diff, this.props.endsAt) });
    } else if (completed > this.props.endsAt) {
      const diff = 0.5;
      this.setState({ completed: Math.min(completed - diff, this.props.endsAt) });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <LinearProgress 
          classes={{ colorPrimary: classes.linearColorPrimary, barColorPrimary: classes.linearBarColorPrimary }} 
          variant="determinate"
          size = {100}
          value={this.state.completed} 
        />
      </div>
    );
  }
}

LinearDeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearDeterminate);