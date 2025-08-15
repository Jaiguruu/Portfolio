
export enum Sender {
    User = 'USER',
    AI = 'AI',
}

export interface Message {
    id: string;
    text: string;
    sender: Sender;
    timestamp: string;
    isError?: boolean;
}
