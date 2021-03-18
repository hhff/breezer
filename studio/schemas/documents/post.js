import {format} from 'date-fns'

export default {
  name: 'post',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      title: 'Feature in Jump Nav?',
      name: 'featureInJumpNav',
      type: 'boolean',
      description: 'If you check this option, the project will appear in the jump nav'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This is the main description of the project'
    },
    {
      name: 'studio',
      type: 'string',
      title: 'Studio',
      description: 'This is the studio the work was done for. Leave blank for no studio'
    },
    {
      name: 'projectTeam',
      type: 'text',
      title: 'Project Team',
      description: 'This is the project team. Leave blank for no project team'
    },
    {
      name: 'contribution',
      type: 'text',
      title: 'Contribution',
      description: 'This is where you write your personal contribution. Leave blank for no contribution'
    },
    {
      name: 'press',
      type: 'array',
      title: 'Press',
      of: [{type: 'link'}],
      description: 'This is where you create links to press.'
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{type: 'image'}],
      description: 'This is where the images live! :)'
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'title',
          direction: 'asc'
        }
      ]
    }
  ],
}
