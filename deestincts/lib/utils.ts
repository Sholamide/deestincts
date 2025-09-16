import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateReadTime(content: string | any[], wordsPerMinute: number = 200): string {
  let text = '';

  // Check if content is an array of blocks or a string
  if (Array.isArray(content)) {
    for (const block of content) {
      if (block.children && Array.isArray(block.children)) {
        for (const child of block.children) {
          if (child.text && typeof child.text === 'string') {
            text += child.text + ' ';
          }
        }
      }
    }
  } else {
    text = content;
  }

  if (!text || text.trim().length === 0) {
    return '1 min read';
  }

  // Remove HTML tags and normalize whitespace
  const cleanText = text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  
  // Count words (split by whitespace and filter empty strings)
  const wordCount = cleanText.split(/\s+/).filter((word: any) => word.length > 0).length;
  
  // Calculate read time in minutes
  const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  
  // Return formatted string
  return readTimeMinutes === 1 ? '1 min read' : `${readTimeMinutes} min read`;
}

// export function calculateReadTime(text: string, wordsPerMinute: number = 200): string {
//   if (!text || text.trim().length === 0) {
//     return '1 min read'
//   }

//   // Remove HTML tags and normalize whitespace
//   const cleanText = text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
  
//   // Count words (split by whitespace and filter empty strings)
//   const wordCount = cleanText.split(/\s+/).filter((word:any) => word.length > 0).length
  
//   // Calculate read time in minutes
//   const readTimeMinutes = Math.ceil(wordCount / wordsPerMinute)
  
//   // Return formatted string
//   return readTimeMinutes === 1 ? '1 min read' : `${readTimeMinutes} min read`
// }

export function formatRelativeTime(date: string | Date): string {
  const now = new Date()
  const targetDate = typeof date === 'string' ? new Date(date) : date
  
  // Calculate difference in milliseconds
  const diffMs = now.getTime() - targetDate.getTime()
  
  // Convert to different time units
  const diffSeconds = Math.floor(diffMs / 1000)
  const diffMinutes = Math.floor(diffSeconds / 60)
  const diffHours = Math.floor(diffMinutes / 60)
  const diffDays = Math.floor(diffHours / 24)
  const diffWeeks = Math.floor(diffDays / 7)
  const diffMonths = Math.floor(diffDays / 30)
  const diffYears = Math.floor(diffDays / 365)
  
  // Return appropriate relative time
  if (diffYears > 0) {
    return diffYears === 1 ? '1 year ago' : `${diffYears} years ago`
  } else if (diffMonths > 0) {
    return diffMonths === 1 ? '1 month ago' : `${diffMonths} months ago`
  } else if (diffWeeks > 0) {
    return diffWeeks === 1 ? '1 week ago' : `${diffWeeks} weeks ago`
  } else if (diffDays > 0) {
    return diffDays === 1 ? '1 day ago' : `${diffDays} days ago`
  } else if (diffHours > 0) {
    return diffHours === 1 ? '1 hour ago' : `${diffHours} hours ago`
  } else if (diffMinutes > 0) {
    return diffMinutes === 1 ? '1 minute ago' : `${diffMinutes} minutes ago`
  } else {
    return 'Just now'
  }
}

export function formatDate(
  date: string | Date,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
): string {
  const targetDate = typeof date === 'string' ? new Date(date) : date
  return targetDate.toLocaleDateString('en-US', options)
}

export function getSmartDateFormat(date: string | Date, maxRelativeDays: number = 365): string {
  const now = new Date()
  const targetDate = typeof date === 'string' ? new Date(date) : date
  const diffMs = Math.abs(now.getTime() - targetDate.getTime())
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  
  if (diffDays <= maxRelativeDays) {
    return formatRelativeTime(targetDate)
  } else {
    return formatDate(targetDate, { month: 'short', day: 'numeric', year: 'numeric' })
  }
}
