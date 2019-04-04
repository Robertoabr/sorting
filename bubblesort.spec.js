describe('Bubble Sort', function() {
  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough();
  });

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('it sorts one item', function() {
    expect(bubbleSort([5])).toEqual([5]);
  });
  it('it sorts multiple items acsending order', function() {
    expect(bubbleSort([7, 5, 1, 2])).toEqual([1, 2, 5, 7]);
  });
  it('getting through my array takes one pass', function() {
    bubbleSort([7, 5, 1, 2]);
    expect(tootsiepop.lick.calls.count()).toEqual(3);
  });
});
