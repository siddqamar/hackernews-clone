import { defineField, defineType } from 'sanity'

export const commentType = defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'story',
      type: 'reference',
      to: [{ type: 'story' }],
    }),
    defineField({
      name: 'parentComment',
      type: 'reference',
      to: [{ type: 'comment' }],
      description: 'Used for nested comments',
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
