<template>
	<div class="wk--search is--typing">
		<input
			type="text"
			class="wk--input-text"
			v-on="inputListeners"
			v-bind="attrs"
			v-model="innerModel"
		/>
		<icon-search />
		<button type="button" class="wk--search-close" @click="onClear">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24"
				viewBox="0 0 24 24"
				width="24"
				class="icon--close"
			>
				<path
					d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
				/>
				<path d="M0 0h24v24H0z" fill="none" />
			</svg>
		</button>
	</div>
</template>

<script>
import { defineComponent, computed, ref, watch } from '@vue/composition-api';
import IconSearch from '@/assets/svg/icon-search.svg?inline';
import IconCancel from '@/assets/svg/icon-cancel.svg?inline';

export default defineComponent({
	name: '',
	components: {
		IconSearch,
		IconCancel,
	},
	props: {
		initialValue: {
			type: String,
			default: '',
		},
		testProps: {
			type: String,
			default: 'test',
		},
	},
	setup(props, { listeners, emit, attrs }) {
		const innerModel = ref('');
		const inputListeners = computed(() => {
			return {
				...listeners,
				input: event => emit('input', innerModel),
			};
		});

		function onClear() {
			if (!innerModel.value) return;
			innerModel.value = '';
		}

		return {
			inputListeners,
			attrs,
			innerModel,
			onClear,
		};
	},
});
</script>

<style lang="scss" scoped>
/**
1. Flow
[] 검색어 입력
[] 검색 실행
*/

svg {
	fill: currentColor;
}

input,
button {
	-webkit-appearance: none;
	background-color: transparent;
}

// 1. Input
// 1-2. 기본 정의, 기본상태 처리
// reset 여부∏
// focus-outline: 포커스 스타일 정의
// type-style: 폰트 스타일 정의

// 1-3. size type
// 1-4. 용도에 따른 타입
// 1-5. 에러메시지 처리

// 2. Search Icon

// 3. Svg Icon

.wk--search {
	position: relative;
}

// input element
.wk--input-text {
	border: 1px solid #333;
	font-family: 'SF Sans';
	font-size: 15px;
	font-weight: 500;
	line-height: 1.5;

	color: #80848b;
	background-color: #fff;

	width: 100%;
	height: 64px;
	padding: 0 40px;
	border: 0;
	border-radius: 12px;
	box-sizing: border-box;

	box-shadow: 0 5px 25px -5px rgba(84, 88, 91, 0.2);

	&::placeholder {
		color: #cacdd4;
	}
}

// Button
.wk--button {
	width: auto;
	height: 64px;
	padding: 0 12px;
	background-color: #fc1055;
	color: #fff;
	box-shadow: 0 13px 25px -13px rgba(252, 16, 85, 0.5);
	border-radius: 8px;
	border: 0;

	font-size: 15px;
	font-weight: 600;
	line-height: normal;

	&:hover,
	&:active,
	&:focus {
		cursor: pointer;
	}
}

.wk--search-close {
	position: absolute;
	right: 0;
	top: 0;
	width: 40px;
	height: 100%;
	background-color: transparent;
	border-radius: 50%;
	border: 0;

	display: flex;
	align-items: center;
	justify-content: center;

	// &:hover {
	// 	background-color: #ccc;
	// }

	.icon--close {
		width: 24px;
		height: 24px;
		color: #373a42;
	}
}

.icon--search {
	width: 24px;
	height: 24px;
	color: #cacdd4;
}
.icon--search {
	position: absolute;
	top: 50%;
	left: 24px;
	width: 24px;
	height: 24px;
	transform: translate(-50%, -50%);
}
</style>
