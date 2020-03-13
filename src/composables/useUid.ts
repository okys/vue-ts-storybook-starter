import { ref } from '@vue/composition-api';
// https://gist.github.com/jed/982883
function useUid(id = '') {
	const uid = ref('');
	const b = a => {
		return a
			? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
			: ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
	};
	uid.value = id && id.length ? id : `uid-${b()}`;

	return {
		uid,
	};
}

export default useUid;
