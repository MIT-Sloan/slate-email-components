import html from '../../components/base/header.html?raw';

export default {
  title: 'base/header',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
