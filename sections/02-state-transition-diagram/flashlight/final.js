import { Machine } from 'xstate'

const flashlightMachine = Machine({
    id: 'flashlight',
    initial: 'off',
    states: {
        off: {
            on: {
                SWITCH_PRESSED: 'on'
            }
        },
        on: {
            on: {
                SWITCH_PRESSED: 'off'
            }
        }
    }
});