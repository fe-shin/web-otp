function useWebOTP() {

  const abortController = new AbortController();
  const OTPValue =  new Promise(function (resolve, reject) {
    navigator?.credentials?.get({
      otp: { transport: ['sms'] },
      signal: abortController.signal,
      mediation: "required",
    }).then(response => {
      console.log(`response`, response);
      resolve(response);
    }).catch(response => {
      console.log(`response`, response);
      reject(response);
    })
  });

  return { abortController, OTPValue };
}

export default useWebOTP;