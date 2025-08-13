import html from '../../components/image-text-blocks/block-image-top.html?raw';

export default {
  title: 'image-text-blocks/block-image-top',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
