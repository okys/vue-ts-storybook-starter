import { ref, watch, toRefs, reactive } from '@vue/composition-api';
import usePromise from '@/composables/use-promise';
import _ from 'lodash';
import { getBreweriesByAutocomplete } from '../apis';

export default function() {
	// 외부에서 ref사용할때 value 트리가 또 생성되는 이슈로 reactive 사용
	const searchData = reactive({
		model: '',
	});
	const getResults = usePromise(search =>
		getBreweriesByAutocomplete({ query: search }),
	);

	const watchModel = e => {
		const { model: watchValue } = searchData;

		watch(watchValue, () => {
			if (watchValue !== '') {
				getResults.createPromise(watchValue);
			} else {
				getResults.results.value = null;
			}
		});
	};

	const onChange = _.debounce(watchModel, 1000);

	return { getResults, onChange, searchData };
}
