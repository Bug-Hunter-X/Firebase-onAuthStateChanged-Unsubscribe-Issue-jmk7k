const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/manage-users
    const uid = user.uid;
    console.log('User is signed in:', uid);
  } else {
    // User is signed out
    console.log('User is signed out');
    // Navigate to login page
  }
});

// unsubscribe from the listener when component unmounts
return () => {
  unsubscribe();
};