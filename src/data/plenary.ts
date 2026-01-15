export interface PlenarySpeaker {
    name: string;
    institution: string;
    role?: string;
    image: string;
}

export const plenarySpeakers: PlenarySpeaker[] = [
    {
        name: "Dr. VV Robin",
        institution: "IISER Tirupati",
        image: "/assets/plenary-speakers/vv-robin.jpg"
    },
    {
        name: "Dr. Shalini Dhyani",
        institution: "NEERI, Nagpur",
        image: "/assets/plenary-speakers/shalini-dhyani.jpg"
    },
    {
        name: "Dr. Punyasloke Bhadury",
        institution: "IISER Kolkata",
        image: "/assets/plenary-speakers/punyasloke-bhadury.jpg"
    },
    {
        name: "Ms. Poonam Pate",
        institution: "Director, Maharashtra Gene Bank Project",
        image: "/assets/plenary-speakers/poonam-pate.jpg"
    }
];
