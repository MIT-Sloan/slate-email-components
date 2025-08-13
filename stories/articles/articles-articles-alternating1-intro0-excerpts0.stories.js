import html from '../../components/articles/articles-alternating1-intro0-excerpts0.html?raw';

export default {
  title: 'articles/articles-alternating1-intro0-excerpts0',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
