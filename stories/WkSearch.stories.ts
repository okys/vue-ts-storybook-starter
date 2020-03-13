import { action } from '@storybook/addon-actions';
import WkSearch from '../src/components/WkSearch.vue';

export default {
	title: 'WkSearch',
	component: WkSearch,
	excludeStories: /.*Data$/,
};

export const actionsData = {
	onTyping: action('onTyping'),
};

const template = `<wk-search v-model="searchKeyword" @input="onTyping"></wk-search>`;

// default
export const Before = () => ({
	components: { WkSearch },
	template,
	data() {
		return {
			searchKeyword: '',
		};
	},
	methods: actionsData,
});

// typing
export const Typing = () => ({
	components: { WkSearch },
	template: `
		<wk-search
			id="search-input"
			:initialValue="test"
			v-model="searchKeyword"
			@input="onTyping"
		/>`,
	data() {
		return {
			searchKeyword: 'value test',
			test: '검색어 입력중',
		};
	},
	methods: actionsData,
});
