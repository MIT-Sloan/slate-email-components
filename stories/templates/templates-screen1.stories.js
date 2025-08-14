import base_header from '../../components/base/header.html?raw';
import header1logoWhite from '../../components/headers/header-1logo-white.html?raw';
import blockHeading1Description1Red from '../../components/text-blocks-grey-red/block-heading1-description1-red.html?raw';
import patternShort from '../../components/patterns/pattern-short.html?raw';
import spacer75 from '../../components/spacers/spacer-75.html?raw';
import scheduleImages1Full0 from '../../components/schedules/schedule-images1-full0.html?raw';
import spacer50 from '../../components/spacers/spacer-50.html?raw';
import patternTall from '../../components/patterns/pattern-tall.html?raw';
import footers_footer from '../../components/footers/footer.html?raw';
import baseFooter from '../../components/base/footer.html?raw';


export default {
  title: 'templates/Screen 1',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = base_header + header1logoWhite + blockHeading1Description1Red + patternShort + spacer75 + scheduleImages1Full0 + spacer50 + patternTall + footers_footer + baseFooter;
  return wrapper;
};
