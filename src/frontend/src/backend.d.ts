import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Stats {
    mostCommonScamType?: ScamTypeCount;
    totalReports: bigint;
}
export interface ScamTypeCount {
    count: bigint;
    scamType: ScamType;
}
export type Time = bigint;
export interface Report {
    id: bigint;
    description: string;
    scamType: ScamType;
    timestamp: Time;
    reporter: Principal;
}
export type ScamType = {
    __kind__: "romanceScam";
    romanceScam: null;
} | {
    __kind__: "investmentFraud";
    investmentFraud: null;
} | {
    __kind__: "other";
    other: string;
} | {
    __kind__: "phishing";
    phishing: null;
} | {
    __kind__: "identityTheft";
    identityTheft: null;
};
export interface backendInterface {
    getReportsByUser(user: Principal): Promise<Array<Report>>;
    getStats(): Promise<Stats>;
    getTotalReports(): Promise<bigint>;
    submitReport(description: string, scamType: ScamType): Promise<bigint>;
}
