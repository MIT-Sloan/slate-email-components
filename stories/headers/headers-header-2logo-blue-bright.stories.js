import html from '../../components/headers/header-2logo-blue-bright.html?raw';

export default {
  title: 'headers/header-2logo-blue-bright',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
