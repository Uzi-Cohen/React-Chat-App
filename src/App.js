
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';
const App = () => {
if (!localStorage.getItem('username')) return <LoginForm />;

    return (
  <ChatEngine
			height='100vh'
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			projectID='a1ae341f-f3f8-4826-a9c5-53a54d77d4d1'
            renderChatFeed ={ (ChatAppProps)=> <ChatFeed {...ChatAppProps} />}
			 onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
		/>
    );
    
}

export default App;
