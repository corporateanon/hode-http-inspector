export interface LoggerHeaders {
    [headerName: string]: string;
}

export interface BaseLoggerRequest<T> {
    url: string;
    body: T | null;
    headers: LoggerHeaders;
    method: string;
}

export interface BaseLoggerResponse<T> {
    body: T | null;
    headers: LoggerHeaders;
    status: number;
}

export type LoggerRequest = BaseLoggerRequest<Buffer>;
export type LoggerResponse = BaseLoggerResponse<Buffer>;

export interface LoggerError {
    code: string;
    message: string;
    stack: string;
}

export interface LoggerEventWithError {
    request: LoggerRequest;
    response: null;
    error: LoggerError;
}

export interface LoggerEventWithResponse {
    request: LoggerRequest;
    response: LoggerResponse;
    error: null;
}

export type LoggerEvent = LoggerEventWithResponse | LoggerEventWithError;

export type LoggerEventHandler = (payload: LoggerEvent) => void;
export type LoggerShouldLog = (req: LoggerRequest) => boolean;
