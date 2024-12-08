import {getRandomElements, getRandomNumberInRange} from "../../utils/MathUtils";

export const B2B_INTEGRATION_URL = "http://localhost:8080"
//export const B2B_INTEGRATION_URL = "http://localhost:8098"
export const B2B_INTEGRATION_SUB_PATH_PATCH_VIDEO = "/api/user/patch"
export const B2B_INTEGRATION_SUB_PATH_SEARCH_VIDEO = "/api/user/post_1"
export const B2B_INTEGRATION_SUB_PATH_SEARCH_PLAY_LIST = "/api/user/post_2"

export const B2B_INTEGRATION_BEARER_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwdkpBSDlsOGZHR3ppM2ZmdTNBbFFHUEp0QlRKWTdxb0x4dllveWlWWWNjIn0.eyJleHAiOjE3MzM0Nzg1NzksImlhdCI6MTczMzQ3ODI3OSwiYXV0aF90aW1lIjoxNzMzNDc2MjM1LCJqdGkiOiIyZjA4OWQ5MS1jYzE0LTQzZDQtOWJlZi1hZGQ3ZDY3NDY0MTgiLCJpc3MiOiJodHRwczovL3ByZS1vcGVuaWQub2trby50ZWFtL3JlYWxtcy9Pa2tvIiwic3ViIjoiM2UyY2U0YTEtODIxZC00ZmRiLWE3MzEtMGU1NDg1NTMzOWFjIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibWNpLWF1dGgtdGVzdC1kem8iLCJub25jZSI6InVncHFmczhzbE1DUUtWd3JtVU54WHJVQnUxYnBIN0NMcDhDQ2l6Zmc4eE9XNVJzNXhGRThudXE0bjNIbjdmeTYiLCJzaWQiOiIxZGJlOTNlZS01YjAzLTQ3YjQtYTg1MC03MzQyZjQ1NTJiOGYiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9tY2ktYXV0aC50ZXN0LmR6by52cC5zYmMuZGMiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImxueFVzZXJzIiwib2ZmbGluZV9hY2Nlc3MiLCJNQ0lfUFJFUFJPRF9VU0VSIiwiTUNJX1BSRVBST0RfQURNSU4iLCJNQ0lfUFJFUFJPRF9BQ0NFU1MiXX0sInNjb3BlIjoib3BlbmlkIG9mZmxpbmVfYWNjZXNzIGVtYWlsIGdyb3VwcyBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJEbWl0cml5IFl1c3Vwb3YiLCJncm91cHMiOlsibG54VXNlcnMiLCJvZmZsaW5lX2FjY2VzcyIsIk1DSV9QUkVQUk9EX1VTRVIiLCJNQ0lfUFJFUFJPRF9BRE1JTiIsIk1DSV9QUkVQUk9EX0FDQ0VTUyIsImxueFVzZXJzIiwib2ZmbGluZV9hY2Nlc3MiLCJNQ0lfUFJFUFJPRF9VU0VSIiwiTUNJX1BSRVBST0RfQURNSU4iLCJNQ0lfUFJFUFJPRF9BQ0NFU1MiXSwicHJlZmVycmVkX3VzZXJuYW1lIjoiZC55dXN1cG92IiwiZ2l2ZW5fbmFtZSI6IkRtaXRyaXkiLCJmYW1pbHlfbmFtZSI6Ill1c3Vwb3YiLCJlbWFpbCI6ImQueXVzdXBvdkBva2tvLnR2In0.MUGG820xBfM3drvQ4-AcULYhciMVqWI9xuPL-3d7iRAL5wZ2I9sL2yLSbgWLTl6Sg2L-EUQdZa2Szra_Mea3IvXgw_BA1MIC1ptDD022znYysYLYA69vpOtxBNtQULmHN9Gv6PrUoZuv0MqKqlBbw4bWocXRmNenRZtKlYEwaOrzG3deKRbtO_LpzNZ08W62zjPgohWxLe9zi5QdhUPSXRPM3c0gBXkde8pfn8f_T5v-hwEkv5WutlfDEoeRm7o0-1rkwp4F5NKWyTDL02uxLWa-aIKyGnrBmYWjHwSqUjcvPb79PCs6wqbHw_n3exFXdBbK4OPkkH5o5KqAQgFXwA"

export const B2b_TEST_DURATION = "100s"

const videoIds = [
    "fc577736-29fe-4e9c-a24e-972732163f11",
    "f723478e-df10-48eb-94cd-36c4f550282c",
    "e5a76f8d-1b4b-4d9a-90c2-16d8fd4ecca8",
    "bd85cf5f-b8f8-472f-b8e8-6cb3a9608754",
    "e5a76f8d-1b4b-4d9a-90c2-16d8fd4ecca8",
    "d351f771-5fd8-4b37-aa3f-99c09a825fb9",
    "d2f9fb86-a088-479d-adb5-7ef0a38d09e1",
    "cdda3a19-da0f-4acb-9b9c-ce8f76f46189",
    "c90c60c7-4fe8-4e47-8f08-224a0bd75dc7",
    "c2216f12-3719-48cf-a710-76d24ded633a",
    "c1a16158-a34d-4e7a-be7b-dffae216430e",
    "c0e213ae-3aeb-4a21-892d-a1d0dcedd4c1",
    "bd85cf5f-b8f8-472f-b8e8-6cb3a9608754",
    "b6c8b3a8-7b6e-425a-b45c-55efa0436e40",
    "b01805b1-dc8b-4441-9511-d06d85f57512",
    "9e30e5a6-4638-4914-81ec-f8f671ef6810",
    "9a36761e-2157-44a2-a9e3-54cba327e87d",
    "8d6e6eec-f394-4b47-b9ef-7b735a1528c7",
    "8b3b649c-070a-43bd-a03c-25edafeb671d",
    "8669c68f-c4b9-4918-99cf-108a297fb82d",
    "85740865-d25f-4bd1-8c39-05be55a5fb45",
    "8443675d-b7b8-4155-9e7c-e7fd948b2da3",
    "7cfee2e0-dde2-44f2-be45-49c900abb58a",
    "77059739-d6a8-4306-95a3-c3b5ff208304",
    "6c3a9773-2333-4b24-8f6f-9417c56b974c",
    "53fa94a7-4c66-41f9-8e48-51aded3e8d47",
    "48870a18-5cad-4c54-aa29-a300273d90c4",
    "3afcde66-85e2-49fd-9a42-0c43edd8ad05"
]

function getNVideoIds(numOfElementsToReturn: number): string[] {
    return getRandomElements(videoIds, numOfElementsToReturn)
}

function getAnyVideoId(): string {
    const index = getRandomNumberInRange(0, videoIds.length - 1)
    return videoIds[index]
}

/**
 * Patch videos
 */
export type B2bPatchVideoRequest = {
    "uid": string,
    "description": string
}

export const b2bPatchVideoRequests: B2bPatchVideoRequest[] = Array.from({length: 100}, (_, index) => (
    createPatchVideoRequest()
));

function createPatchVideoRequest(): B2bPatchVideoRequest {
    return {
        uid: getAnyVideoId(),
        description: "New description " + getRandomNumberInRange(0, 100)
    }
}

/**
 * Search video
 */
export type B2bSearchVideoRequest = {
    limit: number
    offset: number
    calculateTotal: boolean
    requestBody: {
        uid?: string[]
        name?: string[]
        description?: string[]
        playlistPartnerId?: string[]
        publicationState?: string[]
    }
}
export const b2bSearchVideoRequests: B2bSearchVideoRequest[] = Array.from({length: 100}, (_, index) => (
    createB2bSearchVideoRequestByUids(getNVideoIds(2))
));

function createB2bSearchVideoRequestByUids(uids: string[]): B2bSearchVideoRequest {
    return {
        limit: 50,
        offset: 0,
        calculateTotal: false,
        requestBody: {
            uid: uids
        }
    }
}


/**
 * Search playlist
 */

const playListIds = [
    "e77cbb9d-a7ec-40c1-b712-c64ca2800378",
    "6340abc0-c296-4ff0-8af7-7556dd36436b",
    "570f10f5-33de-4a40-9e2d-e16b203f1d49",
    "4becc644-9459-4ed8-878c-2d941f52a4fa",
    "423b0c8d-3eb6-4848-ba9a-e40d4f05c9bf",
    "3898a24a-5415-4516-a48b-8e9ba08bc5e9",
    "364623a2-c0a5-4ed9-bdd4-d51f396991c0",
    "2672eec4-6521-4132-9a1a-a56bb8475f59",
    "193a9fef-8204-4d6d-ac54-4f63a272b06a",
    "066484bc-c597-4057-980d-b21a3375c74b",
    "00c67fcc-2ef5-4dfb-95ba-b8d033b6353e",
    "93d9e49b-3b10-46a8-bd17-0895033db32d",
    "cf498385-195d-48fe-acb5-65eae9894029",
    "c10c2dba-c195-483f-9b85-43245daeb1ba",
    "4be46904-19a4-4f0a-9eee-8fdf74cd28c0",
    "3a36c86f-a27b-4e93-9877-85603083a55b",
    "974eb017-255e-4bab-9a19-7107935e6262",
    "ea536f3f-58b5-4512-86da-951617b8d2c2",
    "705a3e68-50d3-4935-bcec-17866482d2e9",
    "90307802-89da-4b3c-adf0-31017615b742",
    "611e1f67-5b80-4359-bc35-6e743dfc87d9",
]

function getNPlayListIds(numOfElementsToReturn: number): string[] {
    return getRandomElements(playListIds, numOfElementsToReturn)
}

function getAnyPlayListIdId(): string {
    const index = getRandomNumberInRange(0, playListIds.length - 1)
    return playListIds[index]
}

export type B2bSearchPlayListRequest = {
    limit: number
    offset: number
    calculateTotal: boolean
    requestBody: {
        uid?: string[]
    }
}

export const b2bSearchPlayListRequests: B2bSearchPlayListRequest[] = Array.from({length: 100}, (_, index) => (
    createB2bSearchPlayListRequest()
));

function createB2bSearchPlayListRequest(): B2bSearchPlayListRequest {
    return {
        limit: 50,
        offset: 0,
        calculateTotal: true,
        requestBody: {
            uid: getNPlayListIds(3)
        }
    }
}