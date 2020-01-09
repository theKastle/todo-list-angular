import { DoneStatusPipe } from './done-status.pipe';

describe('DoneStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new DoneStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
