type Exam = {
    ownerId: string;
    ownerName: string;
    date: string;
    name: string;
    supporters?: string[];
};

type User = {
    displayName: string | null;
    uid: string | null;
};
