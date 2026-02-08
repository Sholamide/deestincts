"use client"

import NextImage from 'next/image';
import { useEffect, useState } from 'react';

type ImageWrapperProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
};

export function ImageWrapper({ src, alt, width, height, className, style }: ImageWrapperProps) {
  const [isEmailPreview, setIsEmailPreview] = useState(false);

  // Detect if we're in React Email preview (or browser)
  useEffect(() => {
    // React Email preview often runs in iframe or special env
    if (typeof window !== 'undefined' && window.location.href.includes('preview')) {
      setIsEmailPreview(true);
    }
  }, []);

  // For real email sending (Resend), render plain <img>
  if (typeof window === 'undefined' || !isEmailPreview) {
    return (
      <img
        src={src}
        alt={alt}
        width={width || '100%'}
        height={height || 'auto'}
        style={{
          maxWidth: '100%',
          height: 'auto',
          display: 'block',
          margin: '0 auto',
          ...style,
        }}
        className={className}
      />
    );
  }

  // In browser/preview, use Next.js Image for better dev experience
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width || 600}
      height={height || 400}
      style={{
        maxWidth: '100%',
        height: 'auto',
        ...style,
      }}
      className={className}
    />
  );
}