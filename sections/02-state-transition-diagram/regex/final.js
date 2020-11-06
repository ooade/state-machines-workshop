import { Machine, assign, interpret } from 'xstate'

// Mealy (ab*)
const regexMachine = Machine({
    id: 'regex',
    initial: '0',
    context: {
        regex: ''
    },
    states: {
        '0': {
            on: {
                a: {
                    target: '1',
                    actions: assign((ctx) => {
                        return {
                            regex: ctx.regex + 'a'
                        }
                    })
                }
            }
        },
        '1': {
            on: {
                b: {
                    target: '1',
                    actions: assign({
                        regex: (ctx) => ctx.regex + 'b'
                    })
                }
            }
        }
    }
});

const service = interpret(regexMachine).onTransition((state) => {
    console.log(state.context);
});

service.start();
service.send('a');