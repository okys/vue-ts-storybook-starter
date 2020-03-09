import { action } from '@storybook/addon-actions';
import WkButton from '../src/components/WkButton.vue';

export default {
	title: 'WkButton',
	excludeStories: /.*Data$/,
};

export const actionsData = {
	onClick: action('onClick'),
	onDisabled: action('onDisabled'),
};

const wkButtonTemplate = `<wk-button @click="test">test</wk-button>`;

export const Default = () => ({
	components: { WkButton },
	template: wkButtonTemplate,
	methods: {
		test() {
			console.warn('test');
		},
	},
});

export const hover = () => ({
	components: { WkButton },
	template: wkButtonTemplate,
});
