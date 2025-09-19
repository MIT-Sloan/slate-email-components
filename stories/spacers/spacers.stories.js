import quarter_html from '../../components/spacers/spacer-25.html?raw';
import half_html from '../../components/spacers/spacer-50.html?raw';
import threeQuarter_html from '../../components/spacers/spacer-75.html?raw';

export default {
  title: 'Spacers/Spacers',
};

export const TwentyFive = () => { return quarter_html; }
export const Fifty = () => { return half_html; }
export const SeventyFive = () => { return threeQuarter_html; }
