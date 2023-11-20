const delay = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const handleAPICall = async ({
    apiCall,
    rejectWithValue,
    successCallback,
    errorCallback,
    delayDuration,
}) => {
    try {
        const response = await apiCall();
        // Wait response for successCallback. It escapes async run of successCallback.
        successCallback && successCallback();
        delayDuration && (await delay(delayDuration));
        return response.data;
    } catch (error) {
        //Switch state created for avoiding elseif chain. This approach can be found on:
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#an_alternative_to_if...else_chains
        switch (true) {
            case error.response !== undefined:
                // The request was made and the server responded with a status code
                console.log(
                    'Error: Server responded with status code: ' +
                    error?.response?.status +
                    ' full error: ' +
                    JSON.stringify(error?.response),
                );
                (errorCallback && errorCallback?.badServerResponse()) ||
                    errorCallback();
                break;
            case error.request !== undefined:
                // The request was made but no response was received
                console.log('Error: No server response: ' + error?.request);
                (errorCallback && errorCallback?.noServerResponse()) || errorCallback();
                break;
            default:
                // Something happened in setting up the request that triggered an Error
                console.log(
                    'Error occured while apiCall. Message:' +
                    error?.message +
                    ' full error: ' +
                    JSON.stringify(error),
                );
                (errorCallback && errorCallback.default()) || errorCallback();
                break;
        }
        // double zero (00) is no server response
        return rejectWithValue({
            status: error?.response?.status || '00',
            message: error?.response?.message || '00',
        });
    }
};

export default handleAPICall;
