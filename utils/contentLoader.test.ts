
import { describe, it, expect } from 'vitest';
import { FAQ_DATA } from '../constants';

describe('FAQ_DATA integrity', () => {
  it('deve conter artigos pré-definidos', () => {
    expect(FAQ_DATA.length).toBeGreaterThan(0);
  });

  it('cada artigo deve possuir campos obrigatórios', () => {
    FAQ_DATA.forEach(article => {
      expect(article).toHaveProperty('id');
      expect(article).toHaveProperty('question');
      expect(article).toHaveProperty('category');
      expect(article).toHaveProperty('answer');
    });
  });

  it('não deve haver IDs duplicados', () => {
    const ids = FAQ_DATA.map(a => a.id);
    const uniqueIds = new Set(ids);
    expect(ids.length).toBe(uniqueIds.size);
  });
});
