import { Machine, assign, interpret, actions } from 'xstate';

const DB = [
    {
        id: 1,
        name: 'Ademola Adegbuyi',
        email: 'ooade96@gmail.com',
        password: 'Truffle940'
    },
    {
        id: 2,
        name: 'Kaffy Akin',
        email: 'kfa@gmail.com',
        password: 'KFa3d'
    }
]

const authPromise = (context, event) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const userDetails = DB.find(record => record.email === event.email && record.password === event.password);
        if (userDetails) {
            resolve(userDetails)
        }

        reject('Email or password is not correct');
    }, 2000);
});

const authMachine = Machine({
    id: 'auth',
    initial: 'unauthenticated',
    context: {
        user: null,
        error: null
    },
    states: {
        unauthenticated: {
            on: {
                SUBMIT_USER_DETAILS: {
                    target: 'loading'
                }
            }
        },
        loading: {
            on: {
                SUBMIT_USER_DETAILS: {
                    target: 'loading'
                }
            },
            invoke: {
                id: 'getUserDetail',
                src: authPromise,
                onDone: {
                    target: 'authenticated',
                    actions: assign({
                        user: (context, event) => event.data
                    })
                },
                onError: {
                    target: 'unauthenticated',
                    actions: assign({
                        error: (context, event) => event.data
                    })
                }
            }
        },
        authenticated: {
            type: 'final'
        }
    }
});

const service = interpret(authMachine).onTransition((state) => {
    console.log(state.value, state.context)
});

service.start();

service.send('SUBMIT_USER_DETAILS');
service.send('SUBMIT_USER_DETAILS', { email: DB[0].email, password: DB[0].password });