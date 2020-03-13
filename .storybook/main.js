module.exports = {
  stories: ['../stories/**/*.stories.(js|ts|mdx)'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
    'storybook-addon-deps/preset',
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
