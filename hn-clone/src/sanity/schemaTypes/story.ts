import { defineField, defineType } from 'sanity'

export const storyType = defineType({
  name: 'story',
  title: 'Story',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'url',
    }),
    defineField({
      name: 'author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'score',
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'text',
      type: 'text',
      description: 'Used for text-based submissions instead of URLs',
    }),
  ],
})
