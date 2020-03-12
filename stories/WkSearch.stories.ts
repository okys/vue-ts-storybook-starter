import { action } from '@storybook/addon-actions';
import WkSearch from '../src/components/WkSearch.vue';

export default {
	title: 'WkSearch',
	excludeStories: /.*Data$/,
};

const template = `<div class=""><wk-search v-model="searchKeyword" @input="onTyping"></wk-search></div>`;

// default
export const Before = () => ({
	components: { WkSearch },
	template,
	data() {
		return {
			searchKeyword: '',
		};
	},
	methods: {
		onTyping(e) {
			const { value } = this.searchKeyword;
			console.log('outerModel', value);
		},
	},
});

// typing
export const Typing = () => ({
	components: { WkSearch },
	template:
		'<wk-search v-model="searchKeyword" @input="onTyping" :initialValue="test" />',
	data() {
		return {
			searchKeyword: 'value test',
			test: 'test 키워드 입니다.',
		};
	},
	methods: {
		onTyping(e) {
			const { value } = this.searchKeyword;
			console.log('outerModel', value);
		},
	},
});

// // after
// export const After = () => ({
// 	components: { WkSearch },
// 	template,
// });
