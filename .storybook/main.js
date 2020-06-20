module.exports = {
  stories: ['../stories/**/*.stories.(js|ts|mdx)'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
    {
      name: '@storybook/addon-docs/preset',
      options: {
        babelOptions: {
          presets: [
            [
              '@vue/cli-plugin-babel/preset',
              {
                jsx: false
              }
            ]
          ]
        }
      }
    }
  ],
};
