import http from 'k6/http';
import {sleep} from 'k6';
import {Options} from "k6/options";
import {B2B_INTEGRATION_BEARER_TOKEN} from "../tests/b2bintegration/B2bIntegrationConfiguration";

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
    const result = http.get(
        "http://localhost:8098/api/v1/content/video/search?limit=50&offset=0&calculateTotal=false",

        {
            headers: {
                authorization: "Bearer " + B2B_INTEGRATION_BEARER_TOKEN
            }
        }
    );
}
export default function () {
   sendRequest()
   // sleep(1); // Sleep to maintain the rate
}