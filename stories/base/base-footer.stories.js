import html from '../../components/base/footer.html?raw';

export default {
  title: 'base/footer',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
