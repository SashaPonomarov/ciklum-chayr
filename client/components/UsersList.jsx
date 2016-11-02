import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';

const UsersList = ({users = []}) => {
  let items = users.map(user => {
    return (<ListItem key={user.userId} primaryText={`${user.name} ${user.lastName}`} />)
  })
  return (
    <Paper className='users-list'>
      <List>{items}</List>
    </Paper>
  )
}

export default UsersList;