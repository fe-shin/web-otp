function useWebOTP() {

  return navigator?.credentials?.get({
      otp: { transport: ['sms'] },
    });
}

export default useWebOTP;