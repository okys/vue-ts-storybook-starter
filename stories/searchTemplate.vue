<template>
	<wk-search @input="onInput" v-model="test" />
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
export default defineComponent({
	setup() {
		const test = ref('');
		function onInput() {
			console.warn('input', test);
		}

		return {
			test,
			onInput,
		};
	},
});
</script>
