import html from '../../components/applications/application-short.html?raw';

export default {
  title: 'applications/application-short',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
