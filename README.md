

# React-Notify

A simple ReactJS toast component that can be imported in other projects.


### Demo

https://react-notify.netlify.app/


### Use

Wrap your app in the `ToastProvider`, which provides context for the `Toast` descendants.

```jsx
import React from "react";
import useToast from "../hooks/useToast";
import ToastProvider from "./toast/ToastProvider";

function DummyComponent() {
  const toast = useToast();
  let dataFetched = false;

  const handleFetch = (dataFetched) => {
  
    if (dataFetched) {
      return toast.success("Data fetched successfuly.");
    } else {
      return toast.error("Something went wrong!");
    }
  };

  return <button onClick={() => handleFetch(dataFetched)}>Fetch</button>;
}

export default DummyComponent;

const App = () => (
  <ToastProvider position="bottom-right" autoClose=5000>
    <DummyComponent/>
  </ToastProvider>
)
```

## ToastProvider Props

For brevity:

- `position` is equal to `'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center'`.


| Property                               | Description                                                                              |
| -------------------------------------- | ---------------------------------------------------------------------------------------- |
| autoClose                              | Default: `3000`. The time until a toast will be dismissed automatically, in milliseconds.|
| children                               | Required. Your app content.                                                              |
| position                               | Default `top-right`. Where, in relation to the viewport, to place the toasts.            |
                             

## Hook

The `useToast` hook has the following methods:

```jsx
const { success, warn, error, info } = useToasts();
```
These four methods takes a message as argument and displays success, warning, error or information toast respectively.

