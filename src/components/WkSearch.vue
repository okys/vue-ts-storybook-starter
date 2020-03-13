<template>
	<div class="wk--search is--typing">
		<label :for="uid" class="wk--search__label">검색</label>
		<input
			:id="uid"
			type="text"
			class="wk--input-text"
			placeholder="검색어를 입력해주세요."
			v-on="inputListeners"
			v-bind="attrs"
			v-model="innerModel"
		/>
		<IconSearch />
		<button
			v-show="isClear"
			type="button"
			class="wk--search-close"
			aria-label="검색어 삭제"
			title="검색어 삭제"
			@click="onClear"
		>
			<IconCancel />
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from '@vue/composition-api';
import IconSearch from '@/assets/svg/icon-search.svg?inline';
import IconCancel from '@/assets/svg/icon-cancel.svg?inline';
import useUid from '@/composables/useUid.ts';

export default defineComponent({
	name: '',
	components: {
		IconSearch,
		IconCancel,
	},
	props: {
		id: {
			type: String,
			default: undefined,
		},
		initialValue: {
			type: String,
			default: '',
		},
	},
	setup({ id, initialValue }, { listeners, emit, attrs }) {
		const innerModel = ref(initialValue);
		const isClear = ref(initialValue ? initialValue.length : false);
		const inputListeners = computed(() => {
			return {
				...listeners,
				input: () => emit('input', innerModel),
			};
		});
		const { uid } = useUid(id);

		function onClear() {
			if (!innerModel.value) return;
			innerModel.value = '';
		}

		watch(innerModel, () => {
			isClear.value = innerModel ? innerModel.value.length : false;
		});

		return {
			inputListeners,
			attrs,
			innerModel,
			isClear,
			onClear,
			uid,
		};
	},
});
</script>

<style lang="scss" scoped>
@import '../assets/scss/styles.scss';
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

.wk--search__label {
	@include visually-hidden();
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
