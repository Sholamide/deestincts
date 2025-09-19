import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'about',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent', // or 'text' if you want plain text
      // If you want rich text, make sure you have blockContent defined in your schema
      // or change to 'text' for simple text content
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
     // NEW: Project Videos/Animations Gallery
     defineField({
      name: 'projectVideos',
      title: 'Project Videos/Animations',
      type: 'array',
      description: 'Additional videos, animations, or demos for this project',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'videoFile',
              title: 'Video File',
              type: 'file',
              options: {
                accept: 'video/mp4,video/webm,video/quicktime,image/gif',
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'videoSettings',
              title: 'Video Settings',
              type: 'object',
              fields: [
                {
                  name: 'autoplay',
                  type: 'boolean',
                  title: 'Autoplay',
                  initialValue: false,
                },
                {
                  name: 'loop',
                  type: 'boolean',
                  title: 'Loop',
                  initialValue: true,
                },
                {
                  name: 'muted',
                  type: 'boolean',
                  title: 'Muted',
                  initialValue: true,
                },
                {
                  name: 'controls',
                  type: 'boolean',
                  title: 'Show Controls',
                  initialValue: true,
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
            prepare({ title, subtitle }) {
              return {
                title: title || 'Untitled Video',
                subtitle: subtitle || 'No description',
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'excerpt',
      media: 'coverImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle: subtitle || 'No excerpt',
        media,
      }
    },
  },
})