import html from '../../components/spacers/spacer-50.html?raw';

export default {
  title: 'spacers/spacer-50',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
