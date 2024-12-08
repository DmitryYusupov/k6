import http, {RefinedResponse, ResponseType} from 'k6/http';
import {Options} from "k6/options";
import {Trend, Rate, Counter} from 'k6/metrics';

import {getRandomNumberInRange} from "../../utils/MathUtils";
import {
    B2B_INTEGRATION_BEARER_TOKEN, B2B_INTEGRATION_SUB_PATH_PATCH_VIDEO, B2B_INTEGRATION_SUB_PATH_SEARCH_PLAY_LIST,
    B2B_INTEGRATION_SUB_PATH_SEARCH_VIDEO,
    B2B_INTEGRATION_URL,
    B2b_TEST_DURATION, B2bPatchVideoRequest, b2bPatchVideoRequests, B2bSearchPlayListRequest, b2bSearchPlayListRequests,
    B2bSearchVideoRequest,
    b2bSearchVideoRequests
} from "./B2bIntegrationConfiguration";

let durationTrend = new Trend("DurationTrend");
let successRate = new Rate("SuccessRate");
let requestsCounter = new Counter("RequestsCounter");
let errorRate = new Rate("ErrorRate")
let errorCounter = new Rate("ErrorCounter")
export let options: Options = {
    scenarios: {
        b2b_searchContentVideo: {
            executor: 'constant-arrival-rate',
            exec: 'searchContentVideo',
            preAllocatedVUs: 10,

            rate: 10,
            timeUnit: '1s',

            duration: B2b_TEST_DURATION,
            gracefulStop: '2s'
        },

        b2b_searchPlayList: {
            executor: 'constant-arrival-rate',
            exec: 'searchPlayList',
            preAllocatedVUs: 10,

            rate: 10,
            timeUnit: '1s',

            duration: B2b_TEST_DURATION,
            gracefulStop: '2s'
        },

        b2b_patchContentVideo: {
            executor: 'constant-arrival-rate',
            exec: 'patchContentVideo',
            preAllocatedVUs: 10,

            rate: 10,
            timeUnit: '1s',

            duration: B2b_TEST_DURATION,
            gracefulStop: '2s'
        }
    }
};

function getVideoSearchRequestConfiguration(): B2bSearchVideoRequest {
    const requests = b2bSearchVideoRequests
    const configurationIndex = getRandomNumberInRange(0, requests.length - 1)
    return requests[configurationIndex]
}

function getVideoPatchRequestConfiguration(): B2bPatchVideoRequest {
    const requests = b2bPatchVideoRequests
    const configurationIndex = getRandomNumberInRange(0, requests.length - 1)
    return requests[configurationIndex]
}

function getPlaylistSearchRequestConfiguration(): B2bSearchPlayListRequest {
    const requests = b2bSearchPlayListRequests
    const configurationIndex = getRandomNumberInRange(0, requests.length - 1)
    return requests[configurationIndex]
}

function sendVideoSearchRequest() {
    const request = getVideoSearchRequestConfiguration()
    let url = B2B_INTEGRATION_URL + B2B_INTEGRATION_SUB_PATH_SEARCH_VIDEO + "?limit=" + request.limit + "&offset=" + request.offset + "&calculateTotal=" + request.calculateTotal
    const body = JSON.stringify(request.requestBody)

    const result = http.post(
        url,
        body,
        {
            headers: {
                'Content-Type': 'application/json',
                authorization: "Bearer " + B2B_INTEGRATION_BEARER_TOKEN
            }
        }
    );
    gatherResponseStatistics(result, 'b2b_searchContentVideo')
}

function sendVideoPatchRequest() {
    const request = getVideoPatchRequestConfiguration()
    const url = B2B_INTEGRATION_URL + B2B_INTEGRATION_SUB_PATH_PATCH_VIDEO
    const body = JSON.stringify([request])


    const result = http.patch(
        url,
        body,
        {
            headers: {
                'Content-Type': 'application/json',
                authorization: "Bearer " + B2B_INTEGRATION_BEARER_TOKEN
            }
        }
    );
    gatherResponseStatistics(result, 'b2b_patchContentVideo')
}

/**
 * Sone of ids cause 500 error, for example 4becc644-9459-4ed8-878c-2d941f52a4fa"
 */
function sendPlayListSearchRequest() {
    const request = getPlaylistSearchRequestConfiguration()
    let url = B2B_INTEGRATION_URL + B2B_INTEGRATION_SUB_PATH_SEARCH_PLAY_LIST + "?limit=" + request.limit + "&offset=" + request.offset + "&calculateTotal=" + request.calculateTotal
    const body = JSON.stringify(request.requestBody)

    const result = http.post(
        url,
        body,
        {
            headers: {
                'Content-Type': 'application/json',
                authorization: "Bearer " + B2B_INTEGRATION_BEARER_TOKEN
            }
        }
    );

    gatherResponseStatistics(result, 'b2b_searchPlayList')
    //console.log("PLAY LIST STATUS   " + result.status + " BODY WAS " + body)
}


export function searchContentVideo() {
    sendVideoSearchRequest()
}

export function patchContentVideo() {
    sendVideoPatchRequest()
}

export function searchPlayList() {
    sendPlayListSearchRequest()
}

function gatherResponseStatistics(response: RefinedResponse<ResponseType | undefined>, subscenario: string) {
    const successResponse = response.status === 200 || response.status === 201
    if (successResponse) {
        successRate.add(1, {subscenario: subscenario});
    } else {
        errorCounter.add(1, {subscenario: subscenario});
        errorRate.add(1, {subscenario: subscenario});
    }
    durationTrend.add(response.timings.duration, {subscenario: subscenario});
    requestsCounter.add(1, {subscenario: subscenario});
}