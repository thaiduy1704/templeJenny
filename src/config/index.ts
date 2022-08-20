const CONFIG = {
    BASE_URL: process.env.REACT_APP_BASE_URL || "http://localhost:8000",
    APP_URl: process.env.APP_URl || "http://localhost:3000",
    GOOGLE_CLIENT_ID:
        process.env.REACT_APP_GOOGLE_CLIENT_ID ||
        "96169920730-gv5t2vq0n8hloqh0utu6lcep05vghsc1.apps.googleusercontent.com",
    API_KEY_GOOGLE_PLACE:
        process.env.API_KEY_GOOGLE_PLACE ||
        "AIzaSyA4p0S4zmTDH4lmYd77COsXNjILTuSleJc",
    GCS_IMAGE_URL:
        process.env.REACT_APP_GCS_IMAGE_URL ||
        "https://storage.googleapis.com/instamate-images-dev/",
    WIDGET_URL:
        process.env.REACT_APP_WIDGET_URL || "https://widget.pilotpractice.com/",
} as const;

export default CONFIG;
