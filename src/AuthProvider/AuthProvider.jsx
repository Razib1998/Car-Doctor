import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

//   Create a new User

 const createUser = (email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email,password)
 };

//  User Sign In

const signIn = (email, password)=>{
    setLoading(true);
return signInWithEmailAndPassword(auth,email, password);
}

//   user manage

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser);
      setLoading(false);
      console.log("current User", currentUser);  
    });
     return ()=>{
        return unsubscribe();
     }

   },[])

  const authInfo = {
    user,
    loading,
    createUser,
    signIn

  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
