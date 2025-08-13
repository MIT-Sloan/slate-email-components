import html from '../../components/quotes/quote-multi0-images0-gray.html?raw';

export default {
  title: 'quotes/quote-multi0-images0-gray',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
