# 📓 How Do I Feel Today? Ver.2

This is an upgrading version of [one of my old Vanilla JS projects](https://github.com/younghyun-bae/how-do-i-feel-today) with Next.js, React.js, TypeScript, JavaScript, Styled Components, and Firebase

## 🔍 Project description

Users are able to

- Log in with a Google account and log out

## 🔨 Note

### ❗️

In an attempt to resolve the issue of logging out when refreshing...

- you need to use `useEffect` with [onAuthStateChange()](https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data) from Firebase to maintain a logged-in state by storing the users' information

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
