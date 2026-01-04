
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useReadingQueue } from './useReadingQueue';

describe('useReadingQueue', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('deve iniciar com uma fila vazia', () => {
    const { result } = renderHook(() => useReadingQueue());
    expect(result.current.queue).toEqual([]);
  });

  it('deve adicionar um item à fila', () => {
    const { result } = renderHook(() => useReadingQueue());
    act(() => {
      result.current.addToQueue('artigo-1');
    });
    expect(result.current.queue).toContain('artigo-1');
    expect(JSON.parse(localStorage.getItem('teamwiki_queue') || '[]')).toContain('artigo-1');
  });

  it('deve remover um item da fila', () => {
    const { result } = renderHook(() => useReadingQueue());
    act(() => {
      result.current.addToQueue('artigo-1');
      result.current.removeFromQueue('artigo-1');
    });
    expect(result.current.queue).not.toContain('artigo-1');
  });

  it('deve alternar (toggle) um item na fila', () => {
    const { result } = renderHook(() => useReadingQueue());
    act(() => {
      result.current.toggleQueue('artigo-1');
    });
    expect(result.current.queue).toContain('artigo-1');
    act(() => {
      result.current.toggleQueue('artigo-1');
    });
    expect(result.current.queue).toEqual([]);
  });

  it('deve mover itens para cima e para baixo na fila', () => {
    const { result } = renderHook(() => useReadingQueue());
    act(() => {
      result.current.addToQueue('1');
      result.current.addToQueue('2');
    });
    
    expect(result.current.queue).toEqual(['1', '2']);
    
    act(() => {
      result.current.moveItem('2', 'UP');
    });
    
    expect(result.current.queue).toEqual(['2', '1']);
  });
});
