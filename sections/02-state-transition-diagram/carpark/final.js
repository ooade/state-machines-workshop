import { Machine } from 'xstate'

// Moore
const carParkMachine = Machine({
    id: 'carpark',
    initial: 0,
    states: {
        0: {
            on: {
                5: '5',
                10: '10',
                15: '15',
                20: '20'
            }
        },
        5: {
            on: {
                5: '10',
                10: '15',
                15: '20'
            }
        },
        10: {
            on: {
                5: '15',
                10: '20'
            }
        },
        15: {
            on: {
                5: '20'
            }
        },
        20: {
            type: 'final'
        }
    }
});