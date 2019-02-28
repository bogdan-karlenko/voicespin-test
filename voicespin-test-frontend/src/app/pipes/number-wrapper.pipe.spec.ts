import { NumberWrapperPipe } from './number-wrapper.pipe';

describe('NumberWrapperPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberWrapperPipe();
    expect(pipe).toBeTruthy();
  });
});
