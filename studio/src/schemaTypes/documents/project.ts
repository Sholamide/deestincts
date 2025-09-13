import {DocumentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: DocumentIcon,
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short summary of the project (max 200 characters)',
      validation: (rule) => rule.max(200).required(),
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (rule) => rule.required(),
        },
      ],
    }),
    // NEW: Featured Video/Animation
    defineField({
      name: 'featuredVideo',
      title: 'Featured Video/Animation',
      type: 'file',
      description: 'Upload MP4, WebM, or GIF files for animations',
      options: {
        accept: 'video/mp4,video/webm,image/gif',
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text description',
          description: 'Describe the video/animation content for accessibility',
        },
        {
          name: 'autoplay',
          type: 'boolean',
          title: 'Autoplay',
          description: 'Should this video autoplay?',
          initialValue: true,
        },
        {
          name: 'loop',
          type: 'boolean',
          title: 'Loop',
          description: 'Should this video loop?',
          initialValue: true,
        },
        {
          name: 'muted',
          type: 'boolean',
          title: 'Muted',
          description: 'Should this video be muted by default?',
          initialValue: true,
        },
      ],
    }),
    // NEW: Hero Media Choice
    defineField({
      name: 'heroMediaType',
      title: 'Hero Media Type',
      type: 'string',
      description: 'Choose whether to display image or video as the main hero media',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Video/Animation', value: 'video'},
        ],
        layout: 'radio',
      },
      initialValue: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Web Design', value: 'Web Design'},
          {title: 'Branding', value: 'Branding'},
          {title: 'UI/UX Design', value: 'UI/UX Design'},
          {title: 'Animation', value: 'Animation'}, // Added Animation type
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'projectImages',
      title: 'Project Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
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
              name: 'title',
              title: 'Video Title',
              type: 'string',
              description: 'Optional title for this video/animation',
            }),
            defineField({
              name: 'videoFile',
              title: 'Video File',
              type: 'file',
              options: {
                accept: 'video/mp4,video/webm,image/gif',
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Brief description of what this video shows',
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
            prepare({title, subtitle}) {
              return {
                title: title || 'Untitled Video',
                subtitle: subtitle || 'No description',
              }
            },
          },
        },
      ],
    }),
    // NEW: External Video URLs (YouTube, Vimeo, etc.)
    defineField({
      name: 'externalVideos',
      title: 'External Videos',
      type: 'array',
      description: 'YouTube, Vimeo, or other external video links',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Video Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'Video URL',
              type: 'url',
              description: 'YouTube, Vimeo, or other video platform URL',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'YouTube', value: 'youtube'},
                  {title: 'Vimeo', value: 'vimeo'},
                  {title: 'Other', value: 'other'},
                ],
              },
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'platform',
            },
            prepare({title, subtitle}) {
              return {
                title,
                subtitle: `${subtitle || 'External'} video`,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'projectBuilder',
      title: 'Project builder',
      type: 'array',
      of: [{type: 'callToAction'}, {type: 'infoSection'}],
      options: {
        insertMenu: {
          // Configure the "Add Item" menu to display a thumbnail preview of the content type. https://www.sanity.io/docs/array-type#efb1fe03459d
          views: [
            {
              name: 'grid',
              previewImageUrl: (schemaTypeName) =>
                `/static/page-builder-thumbnails/${schemaTypeName}.webp`,
            },
          ],
        },
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client',
      media: 'featuredImage',
      excerpt: 'excerpt',
      heroMediaType: 'heroMediaType',
    },
    prepare({title, client, media, excerpt, heroMediaType}) {
      return {
        title,
        subtitle: `${excerpt || client || ''} ${heroMediaType === 'video' ? '🎬' : ''}`,
        media,
      }
    },
  },
})