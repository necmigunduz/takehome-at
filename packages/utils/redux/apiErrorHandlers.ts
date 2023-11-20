export const rejectWithValue = (args: { status: any; message: any; }) => {
    return { status: args.status, message: args.message };
  };
  
  export const errorCallback = {
      badServerResponse: () => {
          // works when server sends bad response
          alert('bad response')
      },
      noServerResponse: () => {
          // works when server doesn't response
          alert('Server is not responding.')
      },
      default: () => {
          // something happened in setting up the request that triggered an Error
          alert('Something gone wrong.')
      }
  }
  