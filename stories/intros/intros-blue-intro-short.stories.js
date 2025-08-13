import html from '../../components/intros-blue/intro-short.html?raw';

export default {
  title: 'intros-blue/intro-short',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
