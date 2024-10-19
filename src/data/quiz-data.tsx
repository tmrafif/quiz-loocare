export type QuestionData = {
    question: string;
    answers: string[];
    correct_answer: string;
}[];

const QUESTION_DATA: QuestionData = [
    {
        question: "Ciri-ciri toilet kotor adalah ...",
        answers: [
            "A. Bersih dan wangi",
            "B. Lantai bau dan kotor",
            "C. Dindingnya bersih",
            "D. Airnya bersih",
        ],
        correct_answer: "B. Lantai bau dan kotor",
    },
    {
        question: "Penyebab toilet kotor adalah ...",
        answers: [
            "A. Sering dibersihkan",
            "B. Tidak menyiram toilet setelah digunakan",
            "C. Membuang sampah pada tempatnya",
            "D. A dan C benar",
        ],
        correct_answer: "B. Tidak menyiram toilet setelah digunakan",
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
        question: "Bagaimana cara mencegah bau tidak sedap di toilet?",
        answers: [
            "A. Merusak fasilitas toilet",
            "B. Menggunakan pengharum ruangan",
            "C. Menyediakan alat untuk membersihkan toilet",
            "D. B dan C benar",
        ],
        correct_answer: "B. Menggunakan pengharum ruangan",
    },
    {
        question:
            "Mengapa penting untuk menjaga kebersihan toilet?",
        answers: [
            "A. Untuk mencegah penyebaran bakteri dan penyakit",
            "B. Terjauhi dari virus, bakteri, dan kuman",
            "C. Toilet menjadi bersih dan wangi",
            "D. Semua jawaban benar",
        ],
        correct_answer: "D. Semua jawaban benar",
    },
];

export default QUESTION_DATA;
