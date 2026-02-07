declare module '@paystack/inline-js' {
  const PaystackPop: new () => {
    resumeTransaction: (
      accessCode: string,
      callbacks?: {
        onSuccess?: (transaction: { reference: string }) => void;
        onCancel?: () => void;
        onError?: (err: { message?: string }) => void;
      }
    ) => unknown;
  };
  export default PaystackPop;
}
