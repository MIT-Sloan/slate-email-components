import html from '../../components/patterns/pattern-tall.html?raw';

export default {
  title: 'patterns/pattern-tall',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
