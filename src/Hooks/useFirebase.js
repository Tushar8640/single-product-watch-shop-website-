import firebaseAuthentication from "../Firebase/firebase.init";
import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { set } from "react-hook-form";

firebaseAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const loginWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        const user = result.user;
        sendUsers(user.email, user.displayName, 'PUT');
        const destination = location?.state?.from || "/";
        history.replace(destination);
        // ...
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        // update name after registrationn
        sendUsers(email, name, "POST");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
      })
      .catch((error) => {
        console.log(error.message);
        // ..
      })
      .finally(() => setIsLoading(false));
  };

  const emailPassLogin = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
}, [user.email])

  // send users to database
  const sendUsers = (email, displayName, method) => {
    const data = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // ...
      } else {
        console.log("user not found");
      }
      setIsLoading(false);
    });
  }, [auth]);

  return {
    user,
    loginWithGoogle,
    registerUser,
    logOut,
    emailPassLogin,
    isLoading,
    admin
  };
};

export default useFirebase;
