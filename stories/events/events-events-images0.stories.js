import html from '../../components/events/events-images0.html?raw';

export default {
  title: 'events/events-images0',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
