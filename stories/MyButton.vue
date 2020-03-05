<template>
	<button :style="buttonStyles" @click="onClick">
		<slot></slot>
	</button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
	name: 'my-button',
	setup() {
		let a: string;

		console.warn('a', a);
	},
	data() {
		return {
			buttonStyles: {
				border: '1px solid #eee',
				borderRadius: 3,
				backgroundColor: '#FFFFFF',
				cursor: 'pointer',
				fontSize: 15,
				padding: '3px 10px',
				margin: 10,
			},
		};
	},
	methods: {
		onClick() {
			this.$emit('click');
		},
	},
});
</script>

<style lang="scss" scoped></style>
