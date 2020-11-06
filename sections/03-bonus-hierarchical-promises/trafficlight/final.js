import { Machine } from 'xstate'

const trafficLightMachine = Machine({
    id: 'trafficLight',
    initial: 'off',
    states: {
        off: {
            on: {
                TURN_ON: 'on'
            },
            initial: 'red',
            states: {
                red: {
                    on: {
                        SWITCH: 'yellow'
                    }
                },
                yellow: {
                    on: {
                        SWITCH: 'green'
                    }
                },
                green: {
                    on: {
                        SWITCH: 'red'
                    }
                }
            }
        },
        on: {
            on: {
                TURN_OFF: 'off'
            }
        }
    }
});

