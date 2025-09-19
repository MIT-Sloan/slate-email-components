import AlternatingNoIntroNoExcerpts_html from '../../components/articles/articles-alternating1-intro0-excerpts0.html?raw';
import AlternatingNoIntroExcerpts_html from '../../components/articles/articles-alternating1-intro0-excerpts1.html?raw';
import AlternatingIntroNoExcerpts_html from '../../components/articles/articles-alternating1-intro1-excerpts0.html?raw';
import AlternatingIntroExcerpts_html from '../../components/articles/articles-alternating1-intro1-excerpts1.html?raw';

export default {
  title: 'Articles/Alternating',
};

export const NoIntroNoExcerpts = () => { return AlternatingNoIntroNoExcerpts_html; }
export const NoIntroExcerpts = () => { return AlternatingNoIntroExcerpts_html; }
export const IntroNoExcerpts = () => { return AlternatingIntroNoExcerpts_html; }
export const IntroExcerpts = () => { return AlternatingIntroExcerpts_html; }
