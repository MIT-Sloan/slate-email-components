import html from '../../components/spacers/spacer-75.html?raw';

export default {
  title: 'spacers/spacer-75',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
