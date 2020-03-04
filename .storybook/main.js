module.exports = {
  stories: ['../stories/**/*.stories.(js|ts|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register'
  ],
};
