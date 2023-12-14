import { useState } from 'preact/hooks';

export interface GreetingProps {
  messages: string[]
}

export default function Greeting(prop: GreetingProps) {
  const messages = prop.messages;
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}