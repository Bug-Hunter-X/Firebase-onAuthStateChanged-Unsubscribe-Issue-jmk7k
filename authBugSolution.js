import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log('User is signed in:', user.uid);
      } else {
        // User is signed out
        console.log('User is signed out');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // ... rest of component code
};
export default MyComponent;