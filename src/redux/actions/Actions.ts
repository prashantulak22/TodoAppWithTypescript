import { Users } from '../../Model';
import * as types from './ActionTypes';

export const logIn = (filteredUser: Users) => {
      return {
          type: types.LOG_IN,
          payload: filteredUser.id
      };
  };
  
  export const logOut = () =>{
      return{
          type: types.LOG_OUT,
      }
  }

