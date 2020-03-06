import { linkTo } from '@storybook/addon-links';

import SvgView from '../src/views/SvgView.vue';

export default {
	title: 'View/SvgView',
	component: SvgView,
};

export const ToStorybook = () => ({
	components: { SvgView },
	template: '<svg-view></svg-view>',
});
