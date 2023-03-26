export const api = [
    {
        get: {
            users: '/v1/employee',
            departamentos: '/v1/departments',
            municipio: '/v1/muni/',
            profile: '/v1/employee/',

        },
        post: {
            setUser: '/v1/employee',
        },
        delete: {
            deleteEmployee: '/v1/employee/',
        },
        put: {
            updateUser: '/v1/employee/'
        }
    }
]