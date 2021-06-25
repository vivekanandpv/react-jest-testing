describe('Mock test should', () => {
  it('provide the square function by mocking', () => {
    const mockSquare = jest.fn((n) => n * n);
    const result = mockSquare(10);
    expect(result).toBe(100);
  });

  it('provide the spying on mock function', () => {
    const mockMultiplier = jest.fn((n, m) => n * m);
    const result = mockMultiplier(10, 3);
    expect(result).toBe(30);
    expect(mockMultiplier).toHaveBeenCalledTimes(1);
    expect(mockMultiplier).toHaveBeenCalledWith(10, 3);
  });
});
