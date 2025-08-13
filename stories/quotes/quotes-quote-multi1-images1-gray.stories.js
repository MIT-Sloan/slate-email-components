import html from '../../components/quotes/quote-multi1-images1-gray.html?raw';

export default {
  title: 'quotes/quote-multi1-images1-gray',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
