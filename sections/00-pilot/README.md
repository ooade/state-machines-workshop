Have you ever wondered why you visit a website and it goes from a "no data" state to actually show some data? That's one problem with managing state. It seems so easy yet if not done properly it could lead to a terrible UX.

A common misconception people have while dealing with states is not recognising which of them are finite and which are extended. So we regularly do this:

```js
const userState = {
  isLoading: false,
  isSuccess: false,
  user: null,
  error: null
}
```

Then when we tend to use it on our application, we often resort to this:

```js
if (isLoading) {
	// render loader
}

if (!isloading && error) {
	// render error
}

if (!isloading && isSuccess) {
	// render application with data (user)
}
```

If for some reason `isLoading` and `isSuccess` are both true, then your application stays in an impossible state and nothing gets rendered after the loading.

We can remodel our userState to this:

```jsx
const userState = {
  status: 'loading', // or 'idle' or 'error' or 'success'
  user: null,
  error: null
}
```