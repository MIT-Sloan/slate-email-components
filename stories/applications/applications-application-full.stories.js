import html from '../../components/applications/application-full.html?raw';

export default {
  title: 'applications/application-full',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
