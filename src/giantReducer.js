const giantReducer = (state, action) => {
    switch (action.type) {
        case 'USER_FETCH_REQUESTED': {
            console.log('USER_FETCH_REQUESTED in the reducer');
            return { ...state, fetching: true }
            
        }

        case 'RECIEVE_USERS': {
            console.log('RECIEVE_USERS');
            // return { ...state, fetching: false, fetched: true, users: action.payload }

        }
        case 'USER_FETCH_STARTED': {
            console.log('USER_FETCH_STARTED in reducer from saaga dear!!!!!!! ');
            return { ...state, fetching: false, fetched: true, users: action.response }

        }
        case 'FETCH_USERS_ERROR': {
            console.log('FETCH_USERS_ERROR');
            return { ...state, fetching: false, err: action.payload }

        }
        default: {
            return state
        }
    }
}

export default giantReducer