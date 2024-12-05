export type Environment = {
    baseUrl: string
    bearerToken?: string
}

/**
 * B2B env
 */
interface B2BEnv extends Environment {
}
export const B2B_INTEGRATION: B2BEnv = {
    baseUrl: "http://localhost:8080",
    bearerToken: "tokean"
}

export enum B2BEndpoint {
    GET_ALL_USERS = 'GET_ALL_USERS'
}

export const B2BEndpointDetails = {
    [B2BEndpoint.GET_ALL_USERS]: {
        vus: 1,
        duration: "10s",
        path: "/api/user"
    },
};
