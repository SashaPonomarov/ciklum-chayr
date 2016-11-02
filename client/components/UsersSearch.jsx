import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {orange500} from 'material-ui/styles/colors';

import UsersList from './UsersList.jsx';

const UsersSearch = ({users = [], onSearch}) => {
  let search;
  const styles = {
    label: {color: '#ffffff'},
    underline: {borderColor: '#ffffff'}
  };
  const handleSubmit = e => {
        e.preventDefault();
        onSearch(search.input.value);
      }

  return (
    <form className='users-search-form' onSubmit={handleSubmit}>
        <TextField
          hintText="Enter name, last name or email"
          floatingLabelText="Search users" 
          inputStyle={styles.label} 
          hintStyle={styles.label} 
          floatingLabelStyle={styles.label} 
          underlineStyle={styles.underline} 
          ref={node => {
            search = node
          }}
        />
        <RaisedButton type="submit" label="Search"/>
        {users.length > 0 && <UsersList users={users}/>}
    </form>
  )
}

export default UsersSearch;