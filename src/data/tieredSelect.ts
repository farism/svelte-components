import range from 'lodash/range'

export const data = [{
  id: 1,
  groupId: null,
  nextGroupId: 10,
  label: 'Apple Farm',
},
{
  id: 2,
  groupId: null,
  nextGroupId: 20,
  label: "Tim's Trees",
},
{
  id: 3,
  groupId: null,
  nextGroupId: 30,
  label: 'Sports R Us',
},
{
  id: 4,
  groupId: null,
  nextGroupId: 30,
  label: 'Sail It Again Ports',
},
{
  id: 5,
  groupId: null,
  nextGroupId: 30,
  label: 'Dublix',
},
{
  id: 6,
  groupId: null,
  nextGroupId: 30,
  label: 'The Hardees Boys',
},
{
  id: 7,
  groupId: null,
  nextGroupId: 30,
  label: 'Carls Senior',
},
{
  id: 8,
  groupId: null,
  nextGroupId: 30,
  label: 'Tar J',
},
{
  id: 9,
  groupId: null,
  nextGroupId: 30,
  label: 'Innovation Station',
},
{
  id: 10,
  groupId: null,
  nextGroupId: 30,
  label: 'Innovation Nation',
},
{
  id: 11,
  groupId: null,
  nextGroupId: 30,
  label: 'Global Studios',
},
{
  id: 12,
  groupId: null,
  nextGroupId: 30,
  label: "Ralphie's",
},
{
  id: 13,
  groupId: null,
  nextGroupId: 30,
  label: 'Humble State University',
},
{
  id: 14,
  groupId: null,
  nextGroupId: 30,
  label: 'Test Driven Devolvement',
},
{
  id: 15,
  groupId: null,
  nextGroupId: 30,
  label: 'The Drilling Company',
},
{
  id: 16,
  groupId: null,
  nextGroupId: 30,
  label: 'Wrapping text that is very long and will definitely wrap onto two or more lines',
},
{
  id: 17,
  groupId: 10,
  nextGroupId: 100,
  label: 'Granny Smith',
},
{
  id: 18,
  groupId: 10,
  nextGroupId: 101,
  label: 'Gala',
},
{
  id: 19,
  groupId: 20,
  nextGroupId: 200,
  label: 'Palm',
},
{
  id: 20,
  groupId: 20,
  nextGroupId: 201,
  label: 'Pine',
},
{
  id: 21,
  groupId: 30,
  nextGroupId: 300,
  label: 'Project Basketball',
},
{
  id: 22,
  groupId: 30,
  nextGroupId: 301,
  label: 'Table Tennis',
},
{
  id: 23,
  groupId: 30,
  label: 'Table Ten',
},
{
  id: 24,
  groupId: 100,
  label: 'Michigan',
},
{
  id: 25,
  groupId: 101,
  label: 'Washington',
},
{
  id: 26,
  groupId: 200,
  label: 'Georgia',
},
{
  id: 27,
  groupId: 201,
  label: 'California',
},
{
  id: 28,
  groupId: 300,
  label: 'Toronto',
},
{
  id: 29,
  groupId: 301,
  nextGroupId: 302,
  label: 'Wrap',
},
{
  id: 30,
  groupId: 302,
  nextGroupId: 303,
  label: 'Wrap',
},
{
  id: 31,
  groupId: 303,
  nextGroupId: 304,
  label: 'Wrap',
},
{
  id: 32,
  groupId: 304,
  nextGroupId: 305,
  label: 'Wrap',
},
{
  id: 33,
  groupId: 305,
  nextGroupId: 306,
  label: 'Wrap',
},
{
  id: 34,
  groupId: 306,
  nextGroupId: 307,
  label: 'Wrap',
},
{
  id: 35,
  groupId: 307,
  label: 'Wrap',
}
]

// export const data = range(0, 1000000).map((_, index) => {
//   const groupId = (index < 1000) ? null : index % 1000

//   return {
//     id: index,
//     groupId,
//     nextGroupId: (groupId || 0) + 1,
//     label: `tier ${index}`
//   }
// })
