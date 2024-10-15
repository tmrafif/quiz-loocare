export type QuestionData = {
    question: string;
    answers: string[];
    correct_answer: string;
}[];

const QUESTION_DATA: QuestionData = [
    {
        question: "Apa contoh toilet kotor?",
        answers: [
            "A. Harum",
            "B. Lantai kotor dan bau",
            "C. Dindingnya bersih",
            "D. Aliran air bersih",
        ],
        correct_answer: "B. Lantai kotor dan bau",
    },
    {
        question: "Siapa pihak yang harus membersihkan toilet?",
        answers: [
            "A. Guru",
            "B. Semua warga sekolah",
            "C. Office boy",
            "D. Orang tua murid",
        ],
        correct_answer: "B. Semua warga sekolah",
    },
    {
        question: "Cara mencegah bau tidak sedap di toilet adalah dengan ...",
        answers: [
            "A. Menggunakan pengharum ruangan",
            "B. Membuang sampah sembarangan",
            "C. Membersihkan saluran pembuangan setiap minggu",
            "D. Menggunakan permbersih toilet yang mengandung parfum kuat",
        ],
        correct_answer: "C. Membersihkan saluran pembuangan setiap minggu",
    },
    {
        question: "Penyebab dari toilet kotor adalah ...",
        answers: [
            "A. Sering dibersihkan",
            "B. Tidak menyiram toilet setelah digunakan",
            "C. Membuang sampah pada tempatnya",
            "D. A dan C benar",
        ],
        correct_answer: "B. Tidak menyiram toilet setelah digunakan",
    },
    {
        question:
            "Mengapa penting untuk menjaga kebersihan toilet di tempat umum?",
        answers: [
            "A. Agar terlihat mewah",
            "B. Supaya mengundang serangga",
            "C. Untuk mencegah penyebaran penyakit",
            "D. Untuk mengurangi biaya perawatan",
        ],
        correct_answer: "C. Untuk mencegah penyebaran penyakit",
    },
];

export default QUESTION_DATA;
