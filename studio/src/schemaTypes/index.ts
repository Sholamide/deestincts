import {person} from './documents/person'
import {page} from './documents/page'
import {post} from './documents/post'
import {project} from './documents/project'
import {hero} from './documents/hero'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import {caseStudy} from './documents/casestudy'
import { about } from './documents/about'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  project,
  caseStudy,
  about,
  // Documents
  page,
  post,
  person,
  hero,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  link,
]
