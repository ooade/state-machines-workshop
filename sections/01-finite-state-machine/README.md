A finite state machine is a machine that has a fixed set of possible states. Given some input, we get some finite amount of states. And, whatever the input is, causes the machine to stay in its current state or to change the state it's in.

```
New state = current state + input value;
```

An example would be a flashlight switch that uses the same button to on and off. Given the input to turn on the torch, it moves to the on state. On tapping on the same switch, it turns it off. This shows that the new state is dependent on the current state. Hence, applying the same input multiple time doesn't necessarily lead to the same result.