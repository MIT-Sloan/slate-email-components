import html from '../../components/headers/header-1logo-blue-dark.html?raw';

export default {
  title: 'headers/header-1logo-blue-dark',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
