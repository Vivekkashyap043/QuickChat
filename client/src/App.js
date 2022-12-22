import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId = '1039562260086-4ecgq7bpm2f9833dojpdlkijrrj67c9q.apps.googleusercontent.com';
  return (
    
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
          <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
    
  );
}

export default App;
