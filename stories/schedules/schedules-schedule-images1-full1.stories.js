import html from '../../components/schedules/schedule-images1-full1.html?raw';

export default {
  title: 'schedules/schedule-images1-full1',
};

export const Default = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  return wrapper;
};
