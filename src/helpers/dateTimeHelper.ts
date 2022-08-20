import moment from "moment";

export const formatUnixTime = (unixTime: number, format: string): string => {
    return moment(unixTime * 1000).format(format);
};

export const formatTimeString = (time: string, format: string): string => {
    return moment(time).format(format);
};

export const formatDateTime = (unixTime: Date, format: string): string => {
    return moment(unixTime).format(format)
}

export const validateInputDateRange = (time: string): boolean => {
    // eslint-disable-next-line
    const regexDate = /^\d{2}\-\d{2}\-\d{4}$/;

    if (!regexDate.test(time)) {
        return false;
    }

    const parts = time.split("-");
    const day = parseInt(parts[1], 10);
    const month = parseInt(parts[0], 10);
    const year = parseInt(parts[2], 10);

    if (year < 1000 || year > 3000 || month === 0 || month > 12) {
        return false;
    }

    const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
        monthLength[1] = 29;
    }

    return day > 0 && day <= monthLength[month - 1];
};
export const humanizeDuration = (duration: number): string => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration - hours * 3600) / 60);
    const seconds = duration - hours * 3600 - minutes * 60;

    return `${hours ? `${hours} ${hours > 1 ? "hours" : "hour"}` : ""} ${
        minutes ? `${minutes} ${minutes > 1 ? "minutes" : "minute"}` : ""
    }  ${seconds ? `${seconds} ${seconds > 1 ? "seconds" : "second"}` : ""} `;
};
