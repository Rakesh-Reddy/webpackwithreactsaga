import React, { Component } from 'react';
//import loading from './loader.gif';
import TaskData from '../../components/Task/task';
import { connect } from 'react-redux';
import { data } from './data.js';
import { apiData } from './Action.js';
import './Task.css';

class Task extends Component {

  handleChange = (event) => {
    this.props.apiData(event.target.value);
  }

  render() {
    let loader;
    if (this.props.loader) {
      loader = <div align="center">
        {/* <img src={loading} alt="Loading..." /> */}
            Loading...
      </div>
    }
    return (
      <div>
        <div className="App">
          <h4 className="header"> Select your Choice </h4>
          <select className="dropdown" name="role" onChange={this.handleChange}>
            {data.map((item, i) => (<option className="dropdown-content" key={item.url} value={item.url}>{item.value}</option>))}
          </select>
          <br/>
          <br/>
          {loader}
          {
            ((this.props.list.length > 0) && (!this.props.loader)) ? <TaskData list={this.props.list} /> : null
          }

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, nextProps) => {
  return {
    list: state.data,
    loader: state.loader
  }
}

const mapDispatchToProps = {
  apiData: apiData
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);

