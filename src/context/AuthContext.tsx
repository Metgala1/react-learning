import { createContext , useContext , useState } from "react";

type User = {
    id: number
    name: string
    email: string
}

type AuthContextType = {
    user: User | null
    login: (user: User) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

function AuthProvider({children}: {children: React.ReactNode}) {
   const [user, setUser] = useState<User | null>(null)

    function login(user: User) {
        setUser(user)
    }

    function logout() {
        setUser(null)
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    if(!context) {
        throw new Error("useAth must be used within the AuthProcider")
    }
    return context
}

export {
    AuthProvider,
    useAuth
}