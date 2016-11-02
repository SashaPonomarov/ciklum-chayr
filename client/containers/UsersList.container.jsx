import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { listUsers } from '../actions/users.actions';


class UsersList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(listUsers())
    }

    render() {
        const { users } = this.props
        let userLIs = users.map((user) => {
            return (<li key={user.userId}>{user.name} {user.lastName}</li>)
        })
        return (
            <ul className='users-list'>{userLIs}</ul>
        );
    }
}

// Pokedex.propTypes = {
//     handleLoadClick: PropTypes.func,
// }

const mapStateToProps = (state) => {
    console.log(state)
    return {
        users: state.users.users || []
    }
}

// const mapDispatchToProps = (dispatch, ownPorps) => ({
//     ...ownPorps,
//     handleLoadClick: (next) => dispatch(fetchItems(next)),
//     dispatch
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
export default connect(mapStateToProps)(UsersList);
