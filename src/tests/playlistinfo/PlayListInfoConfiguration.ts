export const PLAY_LIST_INFO_URL = "http://player-api.mci.zvuk.vp.sbc.dc"
export const PLAY_LIST_INFO_TOKEN = ""

export type PlayListInfo = {
    playlistId: string
    coverSize: string
    clientAppType: "TV" | "IOS" | "ANDROID" | "ANDROID_V2" | "STB" | "WEB" | "ANDROID_TV" | "ANDROID_TV_V3" | "CMS" | "APPLE_TV" | "SBER_KINO" | "MAC_OS"
    deviceType: "WEB" | "PC" | "MOB" | "TBL" | "TV" | "BDP" | "MP" | "VGC" | "STB" | "SERVER"
    deviceModel?: string
    deviceManufacturer?: string
    appVersion?: string
    deviceFeatureSupportBits: number
    limit?: number
    offset?: number
}

export const playListInfoGetRequests: PlayListInfo[] = [
    {
        playlistId: "",
        coverSize: "",
        clientAppType: "ANDROID",
        deviceType: "MOB",
        deviceFeatureSupportBits: 1
    },
    {
        playlistId: "",
        coverSize: "",
        clientAppType: "ANDROID",
        deviceType: "MOB",
        deviceFeatureSupportBits: 1
    },
    {
        playlistId: "",
        coverSize: "",
        clientAppType: "ANDROID",
        deviceType: "MOB",
        deviceFeatureSupportBits: 1
    },
    {
        playlistId: "",
        coverSize: "",
        clientAppType: "ANDROID",
        deviceType: "MOB",
        deviceFeatureSupportBits: 1
    },
    {
        playlistId: "",
        coverSize: "",
        clientAppType: "ANDROID",
        deviceType: "MOB",
        deviceFeatureSupportBits: 1
    },
    {
        playlistId: "",
        coverSize: "",
        clientAppType: "ANDROID",
        deviceType: "MOB",
        deviceFeatureSupportBits: 1
    },
    {
        playlistId: "",
        coverSize: "",
        clientAppType: "ANDROID",
        deviceType: "MOB",
        deviceFeatureSupportBits: 1
    },
]

