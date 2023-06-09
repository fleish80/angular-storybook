// import { Meta } from '@storybook/angular';
// import { TaskComponent } from './task.component';

// export default {
//   title: 'TaskComponent',
//   component: TaskComponent,
// } as Meta<TaskComponent>;

// export const Primary = {
//   render: (args: TaskComponent) => ({
//     props: args,
//   }),
//   args: {},
// };

import { Meta, Story } from '@storybook/angular';

import { action } from '@storybook/addon-actions';

import { TaskComponent } from './task.component';

export default {
  component: TaskComponent,
  title: 'Task',
  excludeStories: /.*Data$/,
} as Meta;

export const actionsData = {
  onPinTask: action('pinTask'),
  onArchiveTask: action('archiveTask'),
};

const Template: Story = (args) => ({
  props: {
    ...args,
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args['task'],
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args['task'],
    state: 'TASK_ARCHIVED',
  },
};
