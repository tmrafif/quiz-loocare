export type QuestionData = {
    question: string;
    answers: string[];
    correct_answer: string;
}[];

const QUESTION_DATA: QuestionData = [
    {
        question: "Apa contoh toilet kotor?",
        answers: [
            "Harum",
            "Lantai kotor dan bau",
            "Dindingnya bersih",
            "Aliran air bersih",
        ],
        correct_answer: "Lantai kotor dan bau",
    },
    {
        question: "Siapa pihak yang harus membersihkan toilet?",
        answers: [
            "Guru",
            "Semua warga sekolah",
            "Office boy",
            "Orang tua murid",
        ],
        correct_answer: "Semua warga sekolah",
    },
    {
        question: "Cara mencegah bau tidak sedap di toilet adalah dengan ...",
        answers: [
            "Menggunakan pengharum ruangan",
            "Membuang sampah sembarangan",
            "Membersihkan saluran pembuangan setiap minggu",
            "Menggunakan permbersih toilet yang mengandung parfum kuat",
        ],
        correct_answer: "Membersihkan saluran pembuangan setiap minggu",
    },
    {
        question: "Penyebab dari toilet kotor adalah ...",
        answers: [
            "Sering dibersihkan",
            "Main air",
            "Main sabun",
            "B dan C benar",
        ],
        correct_answer: "B dan C benar",
    },
    {
        question:
            "Mengapa penting untuk menjaga kebersihan toilet di tempat umum?",
        answers: [
            "Agar terlihat mewah",
            "Supaya mengundang serangga",
            "Untuk mencegah penyebaran penyakit",
            "Untuk mengurangi biaya perawatan",
        ],
        correct_answer: "Untuk mencegah penyebaran penyakit",
    },
];

export default QUESTION_DATA;
