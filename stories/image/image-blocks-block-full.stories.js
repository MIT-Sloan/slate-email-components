import html from '../../components/image-blocks/block-full.html?raw';

export default {
  title: 'image-blocks/block-full',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
