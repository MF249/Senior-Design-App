import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState();

    return <LoginContext.Provider 
        value={{ userToken, setUserToken, isLoading, setIsLoading }}
    >
        {children}
    </LoginContext.Provider>
}

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;