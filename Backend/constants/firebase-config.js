const admin = require("firebase-admin");
const initializeFirebase = () => {
    admin.initializeApp({
        credential: admin.credential.cert({
            type: "service_account",
            project_id: "agrocare-c91cc",
            private_key_id: "3ac2e6786a997e7646f5853de253466d3e3f7ceb",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCZQpxpiisQTzGo\nkZ0AGCusjLMWHyRBpCWVsDHFSgJuBbn4LiYAyHbuwqQEGN2WE2mO7RZZyaKf49I8\nSlAH/DDan5zTlgaE3Rn31da/vaqI863VTvGKUiNzoVUmS/pol3cUmXAE8a6FKzB/\n0q0LhFkH9GPYJdirqwF4q0zRKPhkmn4vBWvBFtumkSExl5LU58Su17xOJXICYd/C\nr444NrEKuHXNFt8a/FQHlWTCwnFjtTGXNgca7w1kxBESmaHkgqLC7DiB2gjZju26\nmdWr9clMuqBUF3gbqthYG9S7F08sesFkuS3VHgQfH5z0Av4lprBQSdjj5ZQAayRX\nwHQK+7jXAgMBAAECggEAJZwBiyqzX6i3fHDjULsduJW8euDAgnU4HfAjfpEnYH16\nQgt9GvMWsIfGPRUnB2WTIVZQBk+jX05GcLIhypvaF0RU9V1bEy646ScqMFpoZ3w4\n++AICRQYDA+auC+r7w/AUqdGpIf0dkx/ddaqzWk4eenAuLGs5o+r6ENNMgS2U+Vu\nP23JxzpQIv+uJNWf4TLDz9xrZMgifktVn7kVzc8saqV1xtUZbvoJU3u9wmeDf/KJ\nW4YvAu5s2gbBk4Kxwve5G3Bc0y8tolvx25VE5KfG45mNk0tHBtm4S8gfFji9P3B1\nNZ+NLp0qKfkGx73MXCULI5nqzaSJaQvtnBPaP4QiIQKBgQDUT+TwBkshXPSmbvXl\n8hpY6lWjGLfsY0hvUVNRIcf/0vyt5ACrNmtv47+bmcGO2jLR1bz9ZXAxMWxkuRMm\nlhJF5l9O4eCPwqfN0rQv3cxwGE+koRG/p2QGm9N19M+Pr3xfNMzn1l70oOC4GyQw\n2m2YR+gQIshsIpOqoieLnydQ4QKBgQC4zAA8/zOeQElIQKIwc02TdPqDdSefOgHj\n1Ld2vG7M0n9bkYYybVttDsRDpXIH8eP2REcWQB4nfjwN06rNUifvXAunpPTua31K\ndkPTkg+JbhjwftqLx0z0C+nV9FuCtfXtwyCzwzEdsJM7JFP21SMvsUMkynPJxj72\nm/hUpjXotwKBgFF+qV4IzGXuDGqmRPUSzVI8AMst/ctbAL7Z9KU71k04a41D643M\nwcidHztW9Zkj4EXzSSvq9/mqAvVWpSc2i6URHJxmz4/fJBI5Qrjs5kBQ1KFYwjtS\nwW5X+f9ZDSMWNSNGXTDQdHpqFlgU8vtdnJvLXiRzdYMscooY3B0X5juBAoGBAKs1\nZasdjYc6bCqipyFYUjEhmc8dRZ5BseqQ84DwR39ALnp5sukZZDEAE1nQ+Hrf4qIQ\n1AOLV+SjEaSFzKL5UMJ0dt/U9o/FyoioVWK42egrtrNp87S461TXjMeK4xWQ285y\nj+O8Hc8x/tY2bAwtn7HZ+ykk4G26XC9Chap3a061AoGAW0IDQoHGRPdn0LNSazQG\nmcrJ4g50toap3vE59PxHs9jfHdxfpRUSSE5cGeicQDxXzTaMK4EGTA8mFt1eHdiy\n0a7YcLNzbFWhA5CfTWjSmeHacIpnqA1SRjIIH+ofLyyYeCDYAdc5IqCb4jICU3wC\ntzERjbt3WKDaO9KypzBwp/U=\n-----END PRIVATE KEY-----\n",

            client_email:
                "firebase-adminsdk-7k56z@agrocare-c91cc.iam.gserviceaccount.com",
            client_id: "104076757520024517450",
            auth_uri: "https://accounts.google.com/o/oauth2/auth",
            token_uri: "https://oauth2.googleapis.com/token",
            auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
            client_x509_cert_url:
                "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7k56z%40agrocare-c91cc.iam.gserviceaccount.com",
            storageBucket: "gs://agrocare-c91cc.appspot.com"
        }),
    });
};

module.exports = initializeFirebase;