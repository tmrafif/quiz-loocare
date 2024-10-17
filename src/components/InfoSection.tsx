import React from "react";
import { IoMdArrowBack } from "react-icons/io";

type InfoSectionProps = {
    title: string;
    bgColor: string;
    imgSrc: string;
    imgPos: "left" | "right";
    imgSize: "w-2/5" | "w-1/2" | "w-3/5";
    onBack: () => void;
    children: React.ReactNode;
};

const InfoSection: React.FC<InfoSectionProps> = ({
    title,
    bgColor,
    imgSrc,
    imgPos = "right",
    imgSize,
    onBack,
    children,
}) => {
    return (
        <div className={`flex justify-between min-h-screen ${bgColor}`}>
            <button
                className="flex items-center justify-center w-12 h-12 text-lg rounded-full bg-primary hover:brightness-75 absolute top-4 left-4"
                onClick={onBack}
            >
                <IoMdArrowBack />
            </button>

            {imgPos === "left" && (
                <div className={`md:${imgSize} hidden md:block`}>
                    <img
                        src={imgSrc}
                        alt="Home"
                        className="object-cover h-full w-full"
                    />
                </div>
            )}

            <div
                className={`flex flex-col justify-center p-12 w-full 
                md:${
                    imgSize === "w-2/5"
                        ? "w-3/5"
                        : imgSize === "w-1/2"
                        ? "w-1/2"
                        : "w-2/5"
                }`}
            >
                <h2 className="max-w-lg pt-4 md:text-4xl text-2xl font-semibold">
                    {title}
                </h2>
                {children}
            </div>

            {imgPos === "right" && (
                <div className={`${imgSize} hidden md:block`}>
                    <img
                        src={imgSrc}
                        alt="Home"
                        className="object-cover h-full w-full"
                    />
                </div>
            )}
        </div>
    );
};

export default InfoSection;
