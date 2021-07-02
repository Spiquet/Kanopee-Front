// eslint-disable-next-line @typescript-eslint/no-empty-function
function noOp(): void {}
if (typeof window.URL.createObjectURL === 'undefined') {
    Object.defineProperty(window.URL, 'createObjectUrl', { value: noOp });
}
