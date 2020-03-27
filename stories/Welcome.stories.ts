import Vue from 'vue';
export default {
	title: 'Welcome/to Storybook',
};

const SomeComponent = Vue.component('SomeComponent', {
	template: `
    <div>
      <h1>스토리를 작성하세요.</h1>
      <ul>
        <li>기본 스토리 작성 형식입니다.</li>
        <li>파일생성 형식은 <code>component.stories.ts</code>입니다.</li>
      </ul>
    </div>
  `,
});

export const Default = () => ({
	component: { SomeComponent },
	template: '<some-component />',
});
