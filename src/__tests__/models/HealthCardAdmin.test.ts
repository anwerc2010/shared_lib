import type { HealthCardTab, HealthCardListMeta, HealthCardListResponse } from '../../models/HealthCardAdmin';

describe('HealthCardAdmin models', () => {
  it('HealthCardTab accepts every backend tab value', () => {
    const tabs: HealthCardTab[] = [
      'all', 'family', 'expired', 'expiring', 'pending', 'renewal', 'approved', 'rejected',
    ];
    expect(tabs).toHaveLength(8);
  });

  it('HealthCardListMeta.tab is typed as HealthCardTab, not string', () => {
    const meta: HealthCardListMeta = {
      current_page: 1,
      last_page: 10,
      per_page: 25,
      total: 250,
      tab: 'pending',
    };
    expect(meta.tab).toBe('pending');
  });

  it('HealthCardListResponse requires meta and counts', () => {
    const response: HealthCardListResponse = {
      error: false,
      message: 'ok',
      data: [],
      meta: { current_page: 1, last_page: 1, per_page: 25, total: 0, tab: 'all' },
      counts: { all: 0, family: 0, expired: 0, expiring: 0, pending: 0, renewal: 0 },
    };
    expect(response.meta.tab).toBe('all');
  });
});
