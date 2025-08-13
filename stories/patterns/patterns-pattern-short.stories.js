import html from '../../components/patterns/pattern-short.html?raw';

export default {
  title: 'patterns/pattern-short',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
