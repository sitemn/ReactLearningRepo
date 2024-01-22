import React, { useContext} from 'react';
import { UserContext } from './UserContextSuper';

export default function UserContextSub() {
    const {email} = useContext(UserContext);
  return (
    <div>{email}</div>
  )
}
