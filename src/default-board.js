import { uuid } from '@/utils';

export default {
  name: 'trello',
  columns: [
    {
      name: 'todo',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null,
        },
        {
          description: '',
          name: 'second task',
          id: uuid(),
          userAssigned: null,
        },
        {
          description: '',
          name: 'third task',
          id: uuid(),
          userAssigned: null,
        },
      ],
    },
    {
      name: 'in-progress',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null,
        },
      ],
    },
    {
      name: 'done',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null,
        },
      ],
    },
  ],
};
