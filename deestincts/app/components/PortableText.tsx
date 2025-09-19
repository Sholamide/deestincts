/**
 * This component uses Portable Text to render a post body.
 *
 * You can learn more about Portable Text on:
 * https://www.sanity.io/docs/block-content
 * https://github.com/portabletext/react-portabletext
 * https://portabletext.org/
 *
 */
"use client"

import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "next-sanity";
import { useState } from "react";

import ResolvedLink from "@/app/components/ResolvedLink";

export default function CustomPortableText({
  className,
  value,
  maxLength = 300,
  enableExpandable = false,
}: {
  className?: string;
  value: PortableTextBlock[];
  maxLength?: number;
  enableExpandable?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const components: PortableTextComponents = {
    block: {
      h1: ({ children, value }) => (
        // Add an anchor to the h1
        <h1 className="group relative">
          {children}
          <a
            href={`#${value?._key}`}
            className="absolute left-0 top-0 bottom-0 -ml-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </a>
        </h1>
      ),
      h2: ({ children, value }) => {
        // Add an anchor to the h2
        return (
          <h2 className="group relative">
            {children}
            <a
              href={`#${value?._key}`}
              className="absolute left-0 top-0 bottom-0 -ml-6 flex items-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </a>
          </h2>
        );
      },
    },
    marks: {
      link: ({ children, value: link }) => {
        return <ResolvedLink link={link}>{children}</ResolvedLink>;
      },
    },
  };

  const extractTextFromBlock = (block: any): string => {
    if (block._type === "block" && block.children) {
      return block.children
        .map((child: any) => child.text || "")
        .join("");
    }
    return "";
  };

  const textContent = value
    .map(extractTextFromBlock)
    .join(" ");

  const isLongText = enableExpandable && textContent.length > maxLength;

  const truncateValue = (blocks: any[], maxLength: number) => {
    let currentLength = 0;
    const truncatedBlocks = [];

    for (const block of blocks) {
      if (block._type === "block" && block.children) {
        const blockText = extractTextFromBlock(block);

        if (currentLength + blockText.length <= maxLength) {
          // Include the entire block
          truncatedBlocks.push(block);
          currentLength += blockText.length;
        } else {
          // Truncate this block
          const remainingLength = maxLength - currentLength;
          if (remainingLength > 0) {
            const truncatedBlock = {
              ...block,
              children: [{
                ...block.children[0],
                text: blockText.substring(0, remainingLength) + "..."
              }]
            };
            truncatedBlocks.push(truncatedBlock);
          }
          break;
        }
      } else {
        // Include non-text blocks as-is
        truncatedBlocks.push(block);
      }
    }

    return truncatedBlocks;
  };

  const displayValue = enableExpandable && isLongText && !expanded
    ? truncateValue(value, maxLength)
    : value;

  return (
    <div
      className={["prose prose-a:text-red-500", className]
        .filter(Boolean)
        .join(" ")}
    >
      <PortableText components={components} value={displayValue} />
      {isLongText && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 p-2 rounded-[5px] bg-black text-white uppercase hover:underline text-sm"
        >
          {expanded ? "Collapse" : "Read more"}
        </button>
      )}
    </div>
  );
}
