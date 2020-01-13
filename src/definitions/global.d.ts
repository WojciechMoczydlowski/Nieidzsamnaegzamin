type Exam = {
    ownerId: string;
    ownerName: string;
    date: Date;
    name: string;
    supporters?: string[];
};

type User = {
    displayName: string | null;
    uid: string | null;
};
