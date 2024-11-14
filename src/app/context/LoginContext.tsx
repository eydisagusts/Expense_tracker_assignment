import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

interface LoginContextType {
    login: boolean;
    setLogin: (login: boolean) => void;
}

export const LoginContext = createContext<LoginContextType>({
    login: false,
    setLogin: () => {},
});

interface LoginProviderProps {
    children: ReactNode;
}

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
    const [login, setLogin] = useState(false);

    return (
        <LoginContext.Provider value={{ login, setLogin }}>
            {children}
        </LoginContext.Provider>
    );
};
