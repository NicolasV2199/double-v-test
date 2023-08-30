import { shallowMount } from "@vue/test-utils";
import MoviesGrid from "@/components/MoviesGrid.vue";
import axios from 'axios';

jest.mock('axios', () => ({
  get: jest.fn()
}));

describe('Testing Movies Grid Component', () => {
  let wrapper;

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: { results: [] } });
    wrapper = shallowMount(MoviesGrid);
  });

  test('Pagination number should increase when the function is called', async () => {
    wrapper.vm.increasePage();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.page).toBe(2);
  });

  test('Pagination number should decrease when the function is called', async () => {
    wrapper.vm.page = 2; 
    wrapper.vm.decreasePage();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.page).toBe(1);
  });

  it('Pagination minimun number has to be 1', async () => {
    wrapper.vm.page = 1; 
    wrapper.vm.decreasePage(); 
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.page).toBe(1); 
  });

  it('Navigation option should change on click', async () => {
    const optionToClick = wrapper.findAll('.navigation-option').at(1);
    await optionToClick.trigger('click');
    expect(wrapper.vm.navOption.key).toBe('coming-soon');
  });

  it('Custom modal should render when clicking on a card', async () => {
    const movieCard = wrapper.find('.movie-card');
    wrapper.vm.showModal = jest.fn();
    await movieCard.trigger('click');
    expect(wrapper.vm.showModal).toHaveBeenCalled();
  });
});