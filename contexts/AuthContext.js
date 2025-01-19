import { createContext } from 'react';
import { useContext,useState } from 'react';
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const setAuthUser = authUser => {
        setUser(authUser);
    }
    const setUserData=userData=>{
        setUser({...userData});
    }
    return (
        <AuthContext.Provider value={{ user, setAuthUser,setUserData }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);