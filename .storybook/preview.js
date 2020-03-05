import Vue from 'vue';
import { addParameters } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import '../src/assets/scss/styles.scss';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
})
