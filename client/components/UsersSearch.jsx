import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

import UsersList from './UsersList.jsx';

class UsersSearch extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      searchInput: '',
      searchFilter: ''
    };
  }
  componentDidUpdate() {
    if (!this.props.showUsersList) {return}
    let searchInput = ReactDOM.findDOMNode(this.refs.searchInput).querySelector('input');
    if (searchInput !== document.activeElement) {searchInput.focus()}
  }
  handleChange(event) {
    let name = event.target.name;
    this.setState({[name]: event.target.value});
  }
  handleCheck(event, checked) {
    let name = event.target.name;
    this.setState({[name]: checked}, () => {this.handleSubmit()});
  }
  handleSubmit(event) {
    if (event) {event.preventDefault();}
    let query = {
      input: this.state.searchInput, 
      filter: this.state.searchFilter
    }
    if (!query.input) return;
    this.props.onSearch(query);
  }
  render() {
    const {users = [], showUsersList, onUserSelect, onSearchFocus, onSearchBlur} = this.props;
    const styles = {
      label: {color: '#ffffff'},
      underline: {borderColor: '#ffffff'},
      checkbox: {display: 'inline-block', width: 'initial', alignItems: 'center'},
      checkboxIcon: {fill: '#ffffff'}
    };
    return (
      <form className='users-search-form' onSubmit={this.handleSubmit}>
          <TextField
            name="searchInput" 
            ref="searchInput" 
            autoComplete="off" 
            hintText="Enter name, last name or email"
            floatingLabelText="Search users" 
            inputStyle={styles.label} 
            hintStyle={styles.label} 
            floatingLabelStyle={styles.label} 
            underlineStyle={styles.underline} 
            value={this.state.searchInput} 
            onChange={this.handleChange} 
            onFocus={this.props.onSearchFocus}
            onBlur={this.props.onSearchBlur}
          />
          <RaisedButton type="submit" label="Search" />
          <Checkbox 
            name="searchFilter" 
            className='users-search-checkbox' 
            label="Without seat" 
            onCheck={this.handleCheck} 
            style={styles.checkbox} 
            labelStyle={{...styles.label, alignItems: 'center'}} 
            iconStyle={styles.checkboxIcon}
          />
          {users.length > 0 && showUsersList && <UsersList users={users} onUserSelect={onUserSelect} />}
      </form>
    )
  }
}

export default UsersSearch;