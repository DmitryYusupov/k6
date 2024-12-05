import http from 'k6/http';
import {sleep} from 'k6';
import {B2B_INTEGRATION, B2BEndpoint, B2BEndpointDetails} from "../Configuration";
import {Options} from "k6/options";

export let options: Options = {
    scenarios: {
        example_scenario: {
            executor: 'constant-arrival-rate',
            preAllocatedVUs: 60,

            rate: 50,
            timeUnit: '1s',

            duration: '10s',
            gracefulStop: '2s'
        }
    }
   // stages: [
    //    {duration: '5s', target: 50}
   // ],
    // vus: B2BEndpointDetails.GET_ALL_USERS.vus, // Virtual Users
    // duration: B2BEndpointDetails.GET_ALL_USERS.duration, // Duration of the test
};

function sendRequest() {
    http.get(
        B2B_INTEGRATION.baseUrl + B2BEndpointDetails.GET_ALL_USERS.path,
        {
            headers: {
                authorization: B2B_INTEGRATION.bearerToken!!
            }
        }
    );
}
export default function () {
   sendRequest()
   // sleep(1); // Sleep to maintain the rate
}