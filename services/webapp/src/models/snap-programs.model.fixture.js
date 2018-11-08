export default [
    {
        profileId: 1,
        programId: 1,
        title: 'BBG',
        payload: {
            desc: 'get back into your swimming suit',
        },
        trainings: [],
        exercises: [],
        workouts: [],
        createdAt: '2018-11-05 14:48:34.262411+00',
        updatedAt: '2018-11-05 14:48:34.262411+00',
    },
    {
        profileId: 1,
        programId: 2,
        title: 'Total Body Blast',
        payload: {
            desc: 'perfect abs, well protected!',
        },
        trainings: [
            {
                id: 1,
                title: 'Week1 - Monday',
                duration: 'about 28 minutes',
                progression: [
                    { id: 'burpees', value: 15 },
                    { id: 'plank', value: 15 },
                    { id: 'rest', value: 15 },
                ],
            },
            {
                id: 2,
                title: 'Week1 - Tuesday',
                duration: 'about 28 minutes',
                progression: [
                    { id: 'burpees', value: 20 },
                    { id: 'plank', value: 20 },
                    { id: 'rest', value: 50 },
                ],
            },
        ],
        exercises: [
            {
                id: 'rest',
                title: 'Rest',
                type: 'duration',
            },
            {
                id: 'burpees',
                title: 'Burpees',
                type: 'duration',
            },
            {
                id: 'plank',
                title: 'Plank',
                type: 'duration',
            },
        ],
        workouts: [],
        createdAt: '2018-11-05 14:48:34.262411+00',
        updatedAt: '2018-11-05 14:48:34.262411+00',
    },
]
