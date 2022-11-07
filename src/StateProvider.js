import React, { createContext, useEffect, useState } from 'react';
import { 
   createUserWithEmailAndPassword, 
   signInWithEmailAndPassword, 
   onAuthStateChanged, 
   signInWithPopup, 
   updateProfile,
   signOut
} from 'firebase/auth';

import { auth } from './firebase.config';


export const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerSignin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUsers(currentUser);            
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])

    const authInfo = { 
        users,
        setUsers,
        loading, 
        setLoading,
        signUp, 
        signIn,
        signOutUser, 
        providerSignin, 
        updateUserProfile,
    };

    return (
        <StateContext.Provider value={authInfo}>
            {children}
        </StateContext.Provider>
    );
};

export default StateProvider;