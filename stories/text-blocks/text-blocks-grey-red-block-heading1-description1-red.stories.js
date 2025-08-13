import html from '../../components/text-blocks-grey-red/block-heading1-description1-red.html?raw';

export default {
  title: 'text-blocks-grey-red/block-heading1-description1-red',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
