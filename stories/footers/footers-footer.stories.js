import html from '../../components/footers/footer.html?raw';

export default {
  title: 'footers/footer',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
