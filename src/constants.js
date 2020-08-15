export const TITLE = 'Spells'
export const URL = 'http://localhost:3000/spells'

export const COLUMNS = [
  'id',
  'name',
  'level',
  'school',
  'components',
  'time',
  'ritual',
  'concentration',
  'source',
]

export const OPTIONS = {
  level: [
    'Cantrip',
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
    '6th',
    '7th',
    '8th',
    '9th',
  ],
  school: [
    'Abjuration',
    'Conjuration',
    'Divination',
    'Enchantment',
    'Evocation',
    'Illusion',
    'Necromancy',
    'Transmutation',
  ],
  time: [
    '1 action',
    '1 bonus action',
    '1 reaction',
    '1 minute',
    '10 minutes',
    '1 hour',
    '8 hours',
    '12 hours',
    '24 hours',
  ],
  components: ['V', 'S', 'M', 'gp'],
}
