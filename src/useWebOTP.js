function useWebOTP() {

  const abortController = new AbortController();
  const OTPValue =  new Promise(function (resolve, reject) {
    navigator?.credentials?.get({
      otp: { transport: ['sms'] },
      signal: abortController.signal,
      mediation: "required",
    }).then(response => {
      resolve(response);
    }).catch(response => {
      reject(response);
    })
  });

  return { abortController, OTPValue };
}

export default useWebOTP;