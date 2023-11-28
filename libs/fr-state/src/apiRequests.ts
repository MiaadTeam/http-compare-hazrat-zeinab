import axios from 'axios';

interface IApiRequest {
  variables?: any;
  token?: string;
  getters: any;
  model: string;
  act: string;
}

export const ApiRequest = ({
  model,
  act,
  variables,
  getters,
  token = '',
}: IApiRequest) => getResponse(model, act, getters, variables, token);

const getResponse = async (
  model: string,
  act: string,
  getters: any,
  variables?: any,
  token: string = ''
) => {
  try {
    const response = await axios.post(
      'http://localhost:1366/lesan',
      {
        service: 'main',
        model: model,
        act: act,

        details: {
          set: {
            ...variables,
          },
          get: {
            ...getters,
          },
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          token,
        },
      }
    );

    if (!response.status || response.data.success === false) {
      throw Error(response.data.body as string);
    }
    // may error if there is no body

    if (response.data.success === false) {
      throw new Error(response.data.body as string);
    }

    return response;
  } catch (err: any) {
    throw Error(err.message);
  }
};
