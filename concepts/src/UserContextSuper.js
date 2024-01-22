import React, {createContext, useState} from 'react';
import UserContextSub from './UserContextSub';
export const UserContext=createContext();

export default function UserContextSuper() {
    const [email, setEmail] = useState("john@example.com");
  return (
    <div>
        <UserContext.Provider value={{email}}>
            <UserContextSub />
        </UserContext.Provider>
    </div>
  )
}
