<template>
	<button type="button" v-on="buttonListeners">
		<slot></slot>
	</button>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';

// 주석 작성하면?
export default defineComponent({
	setup(props, { listeners, emit }) {
		const buttonListeners = computed(() => {
			return {
				...listeners,
				click: event => emit('click', event),
			};
		});
		return { buttonListeners };
	},
});
</script>

<style lang="scss" scoped></style>
