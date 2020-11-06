This is used to represent a finite state machine. Let's see how that works with:

- A flashlight
- Car park machine
- Regex representation on [https://excalidraw.com/](https://excalidraw.com/) or [https://draw.io](http://draw.io/).

XState is a library for creating, interpreting, and executing finite state machines and statecharts, as well as managing invocations of those machines as actors. - XState documentation.

Example:

```js
const promiseMachine = Machine({
  initial: 'pending',
  states: {
    pending: {
      on: {
        RESOLVE: 'resolved',
        REJECT: 'rejected'
      }
    },
    rejected: {
      type: 'final'
    },
    resolved: {
      type: 'final'
    }
  }
});

const service = interpret(promiseMachine);

service.start();

service.send('RESOLVE');
```

Some terms used in state charts are as follows:
- Guarded transitions – Make transitions between state possible only if it meets some certain conditions.
- Actions (entry, exit, transition) – Side effects.
- Extended state (context)
- Orthogonal (parallel) states
- Hierarchical (nested) states
- History