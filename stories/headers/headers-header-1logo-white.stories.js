import html from '../../components/headers/header-1logo-white.html?raw';

export default {
  title: 'headers/header-1logo-white',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
