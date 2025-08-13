import html from '../../components/headers/header-1logo-blue-bright.html?raw';

export default {
  title: 'headers/header-1logo-blue-bright',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
