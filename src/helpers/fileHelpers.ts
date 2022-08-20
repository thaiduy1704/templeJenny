import { lastIndexOf } from "lodash-es";
import prettyBytes from "pretty-bytes";

export const FILE_TYPE = [
    { id: 1, content: "png" },
    { id: 2, content: "jpg" },
    { id: 3, content: "jpeg" },
    { id: 4, content: "svg" },
    { id: 5, content: "pdf" },
    { id: 6, content: "docx" },
    { id: 7, content: "xlsx" },
    { id: 8, content: "xlsm" },
    { id: 9, content: "xls" },
    { id: 10, content: "xltx" },
    { id: 11, content: "pptx" },
    { id: 12, content: "pptm" },
    { id: 13, content: "ppt" },
];

export const getFileType = (fileString: string): string =>
    fileString
        .slice(lastIndexOf(fileString, ".") + 1, fileString.length)
        .toLowerCase();

export const isImageFile = (fileString: string): boolean => {
    const extensions = ["png", "jpg", "jpeg", "svg"];

    return extensions.includes(getFileType(fileString));
};

export const isPDFFile = (fileString: string): boolean => {
    const extensions = ["pdf"];

    return extensions.includes(getFileType(fileString));
};

export const isWordFile = (fileString: string): boolean => {
    const extensions = ["docx"];

    return extensions.includes(getFileType(fileString));
};

export const isExcelFile = (fileString: string): boolean => {
    const extensions = ["xlsx", "xlsm", "xls", "xltx"];

    return extensions.includes(getFileType(fileString));
};

export const isPowerPointFile = (fileString: string): boolean => {
    const extensions = ["pptx", "pptm", "ppt"];

    return extensions.includes(getFileType(fileString));
};

export const isArchiveFile = (fileString: string): boolean => {
    const extensions = ["zip", "rar"];

    return extensions.includes(getFileType(fileString));
};

export const isAudioFile = (fileString: string): boolean => {
    const extensions = ["mp3"];

    return extensions.includes(getFileType(fileString));
};

export const isVideoFile = (fileString: string): boolean => {
    const extensions = ["mp4"];

    return extensions.includes(getFileType(fileString));
};

export const isTextFile = (fileString: string): boolean => {
    const extensions = ["txt"];

    return extensions.includes(getFileType(fileString));
};

export const isCodeFile = (fileString: string): boolean => {
    const extensions = ["html", "css", "json"];

    return extensions.includes(getFileType(fileString));
};

export const renderFileType = (
    path: string
): { type: string; color: string } => {
    if (isPDFFile(path)) {
        return {
            type: "pdf",
            color: "danger",
        };
    }
    if (isWordFile(path)) {
        return {
            type: "word",
            color: "primary",
        };
    }
    if (isExcelFile(path)) {
        return {
            type: "excel",
            color: "success",
        };
    }
    if (isArchiveFile(path)) {
        return {
            type: "archive",
            color: "gray900",
        };
    }
    if (isAudioFile(path)) {
        return {
            type: "excel",
            color: "info",
        };
    }
    if (isVideoFile(path)) {
        return {
            type: "video",
            color: "pink",
        };
    }
    if (isCodeFile(path)) {
        return {
            type: "code",
            color: "purple",
        };
    }
    if (isTextFile(path)) {
        return {
            type: "alt",
            color: "gray600",
        };
    }
    return {
        type: "image",
        color: "indigo",
    };
};

export const formatBytes = (bytes: number): string =>
    prettyBytes(bytes).replace(" ", "").toUpperCase();
