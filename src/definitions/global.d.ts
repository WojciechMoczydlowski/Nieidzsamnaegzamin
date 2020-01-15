type Exam = {
    id: string;
    name: string;
    ownerId: string;
    ownerName: string;
    date: string;
    support?: string[];
};

type User = {
    displayName: string | null;
    uid: string;
};
