import { type SchemaTypeDefinition } from 'sanity'
import { storyType } from './story'
import { commentType } from './comment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [storyType, commentType],
}
