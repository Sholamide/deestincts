"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const BackButton = () => {
    const router = useRouter();

    return (
        <Button
            onClick={() => router.back()}
            className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700/80 flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-200"
        >
            <X className="w-5 h-5" />
        </Button>
    );
};

export default BackButton;
