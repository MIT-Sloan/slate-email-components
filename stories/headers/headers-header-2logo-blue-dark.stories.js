import html from '../../components/headers/header-2logo-blue-dark.html?raw';

export default {
  title: 'headers/header-2logo-blue-dark',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
