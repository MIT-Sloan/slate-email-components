import html from '../../components/spacers/spacer-25.html?raw';

export default {
  title: 'spacers/spacer-25',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
