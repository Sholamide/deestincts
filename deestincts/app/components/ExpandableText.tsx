"use client"

import React, { useState } from "react";

interface ExpandableTextProps {
    text: string;
    maxLength?: number; // Default: 300 characters
}

const ExpandableText: React.FC<ExpandableTextProps> = ({
    text,
    maxLength = 300,
}) => {
    const [expanded, setExpanded] = useState(false);

    const isLongText = text.length > maxLength;
    const displayText = expanded || !isLongText ? text : text.slice(0, maxLength) + "…";

    const toggleExpanded = () => setExpanded(!expanded);

    return (
        <div>
            <p className="whitespace-pre-line">
                {displayText}
            </p>

            {isLongText && (
                <button
                    onClick={toggleExpanded}
                    className="p-2 rounded-[5px] bg-gray-500 text-white uppercase hover:underline text-sm"
                >
                    {expanded ? "Collapse" : "Read more"}
                </button>
            )}
        </div>
    );
};

export default ExpandableText;
