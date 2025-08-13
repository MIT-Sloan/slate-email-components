import html from '../../components/quotes/quote-multi0-images0-red.html?raw';

export default {
  title: 'quotes/quote-multi0-images0-red',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
