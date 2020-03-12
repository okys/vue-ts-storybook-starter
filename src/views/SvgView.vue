<template>
	<div>
		<h1>SVG component module</h1>
		<SearchSVG />
		<img :src="searchSvgExternal" alt="test" />
		<div class="box">
			background svg
		</div>
	</div>
</template>

<script>
import SearchSVG from '../assets/svg/icon-search.svg?inline';
import SearchSvgExternal from '@/assets/svg/icon-search.svg';

export default {
	components: {
		SearchSVG,
	},
	mounted() {
		console.warn(SearchSVG);
	},
	computed: {
		searchSvgExternal() {
			return SearchSvgExternal;
		},
	},
};
</script>

<style lang="scss" scoped></style>
