import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api'
import { addParameters } from '@storybook/vue';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsPage } from 'storybook-addon-deps/blocks';

// Composition Api plugin
Vue.use(VueCompositionApi);

// Global Styles
import '../src/assets/scss/styles.scss';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  docs: {
    inlineStories: true,
    iframeHeight: '60px',
    page: DocsPage
  },
  dependencies: {
    withStoriesOnly: true,
  }
});
