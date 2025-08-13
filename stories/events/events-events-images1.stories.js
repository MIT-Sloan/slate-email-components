import html from '../../components/events/events-images1.html?raw';

export default {
  title: 'events/events-images1',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
