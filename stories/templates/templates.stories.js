import baseHeader from '../../components/base/open-body.html?raw';
import baseFooter from '../../components/base/close-body.html?raw';
import applicationFull_html from '../../components/applications/application-full.html?raw';
import applicationShort_html from '../../components/applications/application-short.html?raw';
import articlesAlternatingIntroExcerpts_html from '../../components/articles/articles-alternating1-intro1-excerpts1.html?raw';
import articlesAlternatingIntroNoExcerpts_html from '../../components/articles/articles-alternating1-intro1-excerpts0.html?raw';
import articlesAlternatingNoIntroExcerpts_html from '../../components/articles/articles-alternating1-intro0-excerpts1.html?raw';
import articlesAlternatingNoIntroNoExcerpts_html from '../../components/articles/articles-alternating1-intro0-excerpts0.html?raw';
import articlesNoAlternatingIntroExcerpts_html from '../../components/articles/articles-alternating0-intro1-excerpts1.html?raw';
import articlesNoAlternatingIntroNoExcerpts_html from '../../components/articles/articles-alternating0-intro1-excerpts0.html?raw';
import articlesNoAlternatingNoIntroExcerpts_html from '../../components/articles/articles-alternating0-intro0-excerpts1.html?raw';
import articlesNoAlternatingNoIntroNoExcerpts_html from '../../components/articles/articles-alternating0-intro0-excerpts0.html?raw';
import eventsImages_html from '../../components/events/events-images1.html?raw';
import eventsNoImages_html from '../../components/events/events-images0.html?raw';
import footer_html from '../../components/footers/footer.html?raw';
import footerNoTwitter_html from '../../components/footers/footer_no_twitter.html?raw';
import header1LogoBrightBlue_html from '../../components/headers/header-1logo-blue-bright.html?raw';
import header1LogoDarkBlue_html from '../../components/headers/header-1logo-blue-dark.html?raw';
import header1LogoMediumBlue_html from '../../components/headers/header-1logo-blue-medium.html?raw';
import header1LogoWhite_html from '../../components/headers/header-1logo-white.html?raw';
import header2LogoBrightBlue_html from '../../components/headers/header-2logo-blue-bright.html?raw';
import header2LogoDarkBlue_html from '../../components/headers/header-2logo-blue-dark.html?raw';
import imageBlockFull_html from '../../components/image-blocks/block-full.html?raw';
import imageBlockWide_html from '../../components/image-blocks/block-wide.html?raw';
import imageTextBlockBottom_html from '../../components/image-text-blocks/block-image-bottom.html?raw';
import imageTextBlockTop_html from '../../components/image-text-blocks/block-image-top.html?raw';
import introFull_html from '../../components/intros-blue/intro-full.html?raw';
import introShort_html from '../../components/intros-blue/intro-short.html?raw';
import patternShort_html from '../../components/patterns/pattern-short.html?raw';
import patternTall_html from '../../components/patterns/pattern-tall.html?raw';
import quoteImagesGray_html from '../../components/quotes/quote-multi0-images1-gray.html?raw';
import quoteImagesRed_html from '../../components/quotes/quote-multi0-images1-red.html?raw';
import quoteMultiImagesGray_html from '../../components/quotes/quote-multi1-images1-gray.html?raw';
import quoteMultiImagesRed_html from '../../components/quotes/quote-multi1-images1-red.html?raw';
import quoteMultiNoImagesGray_html from '../../components/quotes/quote-multi1-images0-gray.html?raw';
import quoteMultiNoImagesRed_html from '../../components/quotes/quote-multi1-images0-red.html?raw';
import quoteNoImagesGray_html from '../../components/quotes/quote-multi0-images0-gray.html?raw';
import quoteNoImagesRed_html from '../../components/quotes/quote-multi0-images0-red.html?raw';
import scheduleImagesFull_html from '../../components/schedules/schedule-images1-full1.html?raw';
import scheduleImages_html from '../../components/schedules/schedule-images1-full0.html?raw';
import scheduleNoImage_html from '../../components/schedules/schedule-images0-full0.html?raw';
import spacer25_html from '../../components/spacers/spacer-25.html?raw';
import spacer50_html from '../../components/spacers/spacer-50.html?raw';
import spacer75_html from '../../components/spacers/spacer-75.html?raw';
import textBlockGrayDescription_html from '../../components/text-blocks-grey-red/block-heading1-description1-gray.html?raw';
import textBlockGrayTitle_html from '../../components/text-blocks-grey-red/block-heading1-description0-gray.html?raw';
import textBlockRedDescription_html from '../../components/text-blocks-grey-red/block-heading1-description1-red.html?raw';
import textBlockRedTitle_html from '../../components/text-blocks-grey-red/block-heading1-description0-red.html?raw';

export default {
  title: 'Templates/Templates',
};

export const Screen1 = () => {
  return (
    baseHeader +
    header1LogoWhite_html +
    textBlockRedDescription_html +
    patternShort_html +
    spacer75_html +
    scheduleImages_html +
    spacer50_html +
    patternTall_html +
    footer_html +
    baseFooter
  );
};

export const Screen2 = () => {
  return (
    baseHeader +
    header1LogoWhite_html +
    textBlockRedDescription_html +
    patternShort_html +
    spacer75_html +
    scheduleImages_html +
    spacer50_html +
    patternTall_html +
    footer_html +
    baseFooter
  );
}

export const Screen3 = () => {
  return (
    baseHeader +
    header1LogoBrightBlue_html +
    introFull_html +
    spacer25_html +
    applicationFull_html +
    spacer50_html +
    imageTextBlockBottom_html +
    spacer50_html +
    imageTextBlockTop_html +
    spacer50_html +
    quoteMultiImagesRed_html +
    spacer50_html +
    quoteMultiNoImagesRed_html +
    spacer50_html +
    eventsImages_html +
    spacer25_html +
    patternTall_html +
    spacer50_html +
    eventsNoImages_html +
    spacer25_html +
    patternTall_html +
    articlesAlternatingIntroNoExcerpts_html +
    textBlockRedDescription_html +
    patternShort_html +
    spacer50_html +
    scheduleImages_html +
    spacer50_html +
    patternTall_html +
    textBlockRedDescription_html +
    patternShort_html +
    spacer50_html +
    scheduleNoImage_html +
    spacer25_html +
    patternTall_html +
    textBlockRedTitle_html +
    patternShort_html +
    spacer50_html +
    scheduleImagesFull_html +
    spacer50_html +
    patternTall_html +
    footer_html +
    baseFooter
  );
}

export const Screen4 = () => {
  return (
    baseHeader +
    header1LogoBrightBlue_html +
    introFull_html +
    quoteImagesGray_html +
    patternTall_html +
    footer_html +
    baseFooter
  );
}

export const Screen5 = () => {
  return (
    baseHeader +
    header1LogoBrightBlue_html +
    introFull_html +
    quoteMultiNoImagesGray_html +
    patternTall_html +
    footer_html +
    baseFooter
  );
}

export const Screen6 = () => {
  return (
    baseHeader +
    header1LogoBrightBlue_html +
    introFull_html +
    spacer50_html +
    imageBlockWide_html +
    spacer50_html +
    applicationFull_html +
    spacer50_html +
    articlesNoAlternatingNoIntroExcerpts_html +
    footer_html +
    baseFooter
  );
}

export const Screen7 = () => {
  return (
    baseHeader +
    header1LogoDarkBlue_html +
    spacer50_html +
    imageBlockWide_html +
    spacer50_html +
    applicationShort_html +
    spacer50_html +
    articlesNoAlternatingIntroExcerpts_html +
    footer_html +
    baseFooter
  );
}
