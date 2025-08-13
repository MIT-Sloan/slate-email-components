import html from '../../components/intros-blue/intro-full.html?raw';

export default {
  title: 'intros-blue/intro-full',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
