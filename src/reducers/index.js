import { ADD_USERNAME } from '../constants';
import { DELETE_EVERYTHING } from '../constants';

export default (state=0,action)=>{
  switch (action.type) {
    case ADD_USERNAME:
    const{username}=action;
        let usernameinfo={
      username
    }
    return {...state,usernameinfo}

    case DELETE_EVERYTHING:
    let info=0
    return info

    default:
      return state;
  }
}
