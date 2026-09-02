import { healthCardAdminApi, buildHealthCardListParams } from '../../api/healthCardAdminApi';

describe('buildHealthCardListParams', () => {
  it('defaults to tab=all, page=1, per_page=25 with no search', () => {
    expect(buildHealthCardListParams({})).toEqual({
      tab: 'all',
      page: 1,
      per_page: 25,
    });
  });

  it('forwards an explicit tab/page/per_page', () => {
    expect(buildHealthCardListParams({ tab: 'pending', page: 3, per_page: 30 })).toEqual({
      tab: 'pending',
      page: 3,
      per_page: 30,
    });
  });

  it('includes search only when non-empty', () => {
    expect(buildHealthCardListParams({ search: 'john' })).toEqual({
      tab: 'all',
      page: 1,
      per_page: 25,
      search: 'john',
    });
    expect(buildHealthCardListParams({ search: '   ' })).toEqual({
      tab: 'all',
      page: 1,
      per_page: 25,
    });
  });
});

describe('healthCardAdminApi.getHealthCards', () => {
  it('is defined and exports the query hook', () => {
    expect(healthCardAdminApi.endpoints.getHealthCards).toBeDefined();
    expect(typeof healthCardAdminApi.useGetHealthCardsQuery).toBe('function');
  });
});

describe('healthCardAdminApi.getHealthCardById', () => {
  it('is defined and exports the query hook', () => {
    expect(healthCardAdminApi.endpoints.getHealthCardById).toBeDefined();
    expect(typeof healthCardAdminApi.useGetHealthCardByIdQuery).toBe('function');
  });
});
