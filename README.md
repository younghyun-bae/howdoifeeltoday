# How Do I Feel Today? Ver.2

## 🔍 Project description

## 🔨 Note

### ❗️

In an attempt to resolve the issue of logging out when refreshing...

- you need to use `useEffect` to maintain a logged-in state by storing the users' information with [onAuthStateChange()](https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data)

```jsx
// firebase.js
export function onUserStateChange(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}

// Header.jsx
const [user, setUser] = useState();

useEffect(() => {
  onUserStateChange((user) => {
    console.log(user);
    setUser(user);
  });
}, []);
```

## 📟 Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
