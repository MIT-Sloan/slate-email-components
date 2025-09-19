import full_html from '../../components/image-blocks/block-full.html?raw';
import wide_html from '../../components/image-blocks/block-wide.html?raw';
import textTop_html from '../../components/image-text-blocks/block-image-top.html?raw';
import textBottom_html from '../../components/image-text-blocks/block-image-bottom.html?raw';

export default {
  title: 'Image Blocks/Image Blocks',
};

export const Full = () => { return full_html; }
export const Wide = () => { return wide_html; }
export const TextBottom = () => { return textTop_html; }
export const TextTop = () => { return textBottom_html; }
