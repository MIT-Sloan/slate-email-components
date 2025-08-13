import html from '../../components/footers/footer_no_twitter.html?raw';

export default {
  title: 'footers/footer_no_twitter',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
