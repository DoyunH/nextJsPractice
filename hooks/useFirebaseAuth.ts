// /hooks/useFirebaseAuth.js

import { useState, useEffect } from "react";
import firebase from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const useFirebaseAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const auth = firebase.auth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setIsLoading(false);
    });

    return unsubscribe;
  }, [auth]);

  return [user, isLoading];
};

export default useFirebaseAuth;
