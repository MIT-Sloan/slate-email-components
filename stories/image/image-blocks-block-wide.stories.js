import html from '../../components/image-blocks/block-wide.html?raw';

export default {
  title: 'image-blocks/block-wide',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
