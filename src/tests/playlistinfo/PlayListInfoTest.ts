import http from 'k6/http';
import {Options} from "k6/options";
import {
    PLAY_LIST_INFO_TOKEN,
    PLAY_LIST_INFO_URL,
    PlayListInfo,
    playListInfoGetRequests
} from "./PlayListInfoConfiguration";
import {getRandomNumberInRange} from "../../utils/MathUtils";

export let options: Options = {
    scenarios: {
        example_scenario: {
            executor: 'constant-arrival-rate',
            preAllocatedVUs: 60,

            rate: 50,
            timeUnit: '1s',

            duration: '60s',
            gracefulStop: '2s'
        }
    }
};
//9749125
/**
 * Roman Khaliulin
 * 11:54
 * player-api.mci.zvuk.vp.sbc.dc
 * Roman Khaliulin
 * 11:57
 * https://secrets.okko.team/#/s/98028e57-0017-4e82-b1d0-136ce5ea80ba
 * Roman Khaliulin
 * 11:57
 * https://confluence.playteam.ru/display/OSD/Feature+flags+player-api
 */
function getUrl(): string {
    const configurationIndex = getRandomNumberInRange(0, playListInfoGetRequests.length - 1)
    const playListRequestConfiguration = playListInfoGetRequests[configurationIndex]
    return createUrlByPlayListInfo(playListRequestConfiguration)
}

function createUrlByPlayListInfo(playListInfo: PlayListInfo): string {
    let result = PLAY_LIST_INFO_URL + "/player/v1/playlistinfo?playlistId=" + playListInfo.playlistId +
        "&coverSize=" + playListInfo.coverSize +
        "&clientAppType=" + playListInfo.clientAppType +
        "&deviceType=" + playListInfo.deviceType +
        "&deviceFeatureSupportBits=" + playListInfo.deviceFeatureSupportBits;

    if (!playListInfo.deviceModel) {
        result = result + "&deviceModel=" + playListInfo.deviceModel
    }

    if (!playListInfo.deviceManufacturer) {
        result = result + "&deviceManufacturer=" + playListInfo.deviceManufacturer
    }

    if (!playListInfo.appVersion) {
        result = result + "&appVersion=" + playListInfo.appVersion
    }

    return result
}

function sendRequest() {
    http.get(
        getUrl(),
        {
            headers: {
                authorization: PLAY_LIST_INFO_TOKEN
            }
        }
    );
}

export default function () {
    sendRequest()
}