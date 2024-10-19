import React from "react";
import { Link } from "react-router-dom";
import InfoSection from "../components/InfoSection";

const InfoPage = () => {
    const [userMenu, setUserMenu] = React.useState("menu");

    const menus = [
        { title: "Toilet Bersih", link: "toilet-bersih" },
        { title: "Pentingnya Toilet Bersih", link: "pentingnya-toilet-bersih" },
        {
            title: "Toilet Tidak Bersih dan Dampaknya",
            link: "toilet-tidak-bersih",
        },
        { title: "Cara Merawat Toilet", link: "cara-merawat-toilet" },
    ];

    const backHandler = () => {
        setUserMenu("menu");
    };

    return (
        <>
            {userMenu === "menu" && (
                <div className="flex flex-col items-center justify-center w-full h-screen bg-secondary">
                    {menus.map((menu) => (
                        <button
                            className="min-w-[300px] w-1/2 py-2 mt-4 md:text-lg text-base rounded-md bg-primary hover:brightness-75"
                            onClick={() => setUserMenu(menu.link)}
                        >
                            {menu.title}
                        </button>
                    ))}
                    <Link
                        to="/quiz"
                        className="bg-primary mt-4 rounded-md min-w-[300px] w-1/2 hover:brightness-75 py-2 md:text-lg text-base text-center"
                    >
                        Games
                    </Link>
                </div>
            )}

            {userMenu === "toilet-bersih" && (
                <InfoSection
                    title="Toilet Bersih"
                    bgColor="bg-secondary"
                    imgSrc="/bathroom.jpg"
                    imgPos="right"
                    imgSize="w-3/5"
                    onBack={backHandler}
                >
                    <p className="py-4 text-sm md:text-lg leading-relaxed">
                        Toilet bersih merupakan salah satu fasilitas terpenting
                        yang harus dimiliki oleh setiap sekolah. Apabila sekolah
                        memiliki toilet yang bersih, maka seluruh siswa dan
                        warga sekolah akan nyaman serta produktivitas mereka
                        akan meningkat
                    </p>

                    <a
                        href="https://www.vanguardsv.com/2024/06/the-importance-of-clean-toilets-in-schools/"
                        target="_blank"
                    >
                        <button className="w-32 h-12 mt-4 text-lg rounded-md bg-primary hover:brightness-75">
                            More
                        </button>
                    </a>
                </InfoSection>
            )}

            {userMenu === "pentingnya-toilet-bersih" && (
                <InfoSection
                    title="Pentingnya Toilet Bersih"
                    bgColor="bg-background"
                    imgSrc="/streptococcus.jpg"
                    imgPos="left"
                    imgSize="w-2/5"
                    onBack={backHandler}
                >
                    <p className="py-4 text-sm md:text-lg leading-relaxed">
                        Berdasarkan beberapa sumber dan jurnal ilmiah, memiliki
                        toilet bersih dapat meningkatkan kemampuan produktivitas
                        seluruh siswa dan warga sekolah. Selain itu, seluruh
                        warga sekolah dapat melakukan aktivitas, seperti
                        BAB/BAK, dengan aman dan nyaman.
                    </p>
                    <p className="text-sm md:text-lg leading-relaxed">
                        Toilet yang bersih juga menghindari kita dari beberapa
                        virus seperti{" "}
                        <span className="italic">streptococcus</span>,
                        <span className="italic">staphylococcus</span>,{" "}
                        <span className="italic">E. coli</span> dan{" "}
                        <span className="italic">shigella</span>, virus
                        hepatitis A, virus flu biasa, dan berbagai organisme
                        yang ditularkan melalui hubungan seksual. Oleh karena
                        itu, jika kita memiliki toilet yang bersih kita dapat
                        terhindar dari bakteri dan virus tersebut.
                    </p>
                    <a
                        href="https://www.cr8washrooms.co.uk/blog/the-importance-of-clean-and-inviting-toilets-in-schools#:~:text=Good%20washrooms%20promote%20hygiene%20and,a%20safer%20environment%20for%20everyone."
                        target="_blank"
                    >
                        <button className="w-32 h-12 mt-4 text-lg rounded-md bg-primary hover:brightness-75">
                            More
                        </button>
                    </a>
                </InfoSection>
            )}

            {userMenu === "toilet-tidak-bersih" && (
                <InfoSection
                    title="Toilet Tidak Bersih dan Dampaknya"
                    bgColor="bg-secondary"
                    imgSrc="/dirty.jpg"
                    imgPos="right"
                    imgSize="w-2/5"
                    onBack={backHandler}
                >
                    <p className="py-4 text-sm md:text-lg leading-relaxed">
                        Toilet tidak bersih memiliki beberapa dampak negative
                        bagi kesehatan tubuh kita. Selain, menimbulkan rasa
                        rishi dan tidak nyaman. Apabila kita menggunakan toilet
                        yang tidak bersih, kita akan mudah terpapar beberapa
                        virus dan bakteri. Berikut beberapa penyakit yang dapat
                        ditimbulkan oleh toilet yang tidak bersih:
                    </p>
                    <ul className="list-disc list-inside text-sm md:text-lg">
                        <li>Penyakit demam tifoid</li>
                        <li>Disentri</li>
                        <li>Hepatitis</li>
                        <li>Kolera</li>
                        <li>Kanker Serviks</li>
                    </ul>
                    <a
                        href="https://www.unicef.org/wash/hygiene#:~:text=Better%20hygiene%20leads%20to%20better%20health%2C%20confidence%20and%20overall%20growth.&text=Good%20hygiene%20is%20critical%20for,resulting%20in%20better%20learning%20outcomes."
                        target="_blank"
                    >
                        <button className="w-32 h-12 mt-4 text-lg rounded-md bg-primary hover:brightness-75">
                            More
                        </button>
                    </a>
                </InfoSection>
            )}

            {userMenu === "cara-merawat-toilet" && (
                <InfoSection
                    title="Cara Merawat Toilet"
                    bgColor="bg-background"
                    imgSrc="/clean-toilet.jpg"
                    imgPos="right"
                    imgSize="w-2/5"
                    onBack={backHandler}
                >
                    <p className="py-4 text-sm md:text-lg leading-relaxed">
                        Berikut merupakan langkah-langkah yang dapat dilakukan
                        agar kita memiliki toilet yang bersih.
                    </p>
                    <ul className="flex flex-col gap-2 ml-4 list-disc text-sm md:text-lg">
                        <li>
                            Menyiram semua kotoran hingga bersih setelah
                            menggunakan toilet
                        </li>
                        <li>
                            Menyediakan pengharum ruangan dan/ kapur barus di
                            toilet
                        </li>
                        <li>Memiliki aliran air bersih yang cukup </li>
                        <li>
                            Setiap hari toilet dibersihkan oleh Cleaning
                            Services atau pihak terkait.
                        </li>
                        <li>
                            Menyediakan sabun dan/ karbol agar toilet tetap
                            wangi
                        </li>
                        <li>
                            Tidak Membuang kotoran baik BAK/BAB secara
                            sembarangan
                        </li>
                        <li>
                            Pastikan tidak ada genangan air/ toilet tetap
                            kering.
                        </li>
                    </ul>
                    <a
                        href="https://www.cleanipedia.com/za/bathroom-cleaning/tips-for-keeping-school-restrooms-clean.html"
                        target="_blank"
                    >
                        <button className="w-32 h-12 mt-4 text-lg rounded-md bg-primary hover:brightness-75">
                            More
                        </button>
                    </a>
                </InfoSection>
            )}
        </>
    );
};

export default InfoPage;
