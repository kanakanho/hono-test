type University = {
    name: string;
    undergraduate: string;
    department: string;
    major: string;
};

type Lab = {
    university: University;
    lab: {
        name: string;
        location: string;
        roomNum: string;
    };
};

export default Lab;
