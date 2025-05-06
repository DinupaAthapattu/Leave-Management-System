// src/context/UserContext.tsx
import { createContext, useContext } from 'react';

export type Role = 'admin' | 'employee';

export type User = {
  username: string;
  role: Role;
};

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export const useUser = () => useContext(UserContext);
