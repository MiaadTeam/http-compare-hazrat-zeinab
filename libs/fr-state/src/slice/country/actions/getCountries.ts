import { ApiRequest } from '../../../apiRequests';
import { store } from '../../../nextStore';

export const getCountries = async (page: number = 1, take: number = 10) => {
  const str = store;

  str &&
    str.setState((states) => ({
      ...states,
      countries: {
        ...states.countries,
        loader: true,
      },
    }));

  try {
    const res = await ApiRequest({
      act: 'getCountries',
      model: 'country',
      getters: {
        _id: 1,
        name: 1,
        population: 1,
        abb: 1,
        provinces: {
          _id: 1,
          name: 1,
          population: 1,
          abb: 1,
          cities: {
            _id: 1,
            name: 1,
            population: 1,
            abb: 1,
            index: 1
          }
        },
      },
      variables: { page, take },
    });

    str &&
      str.setState((states) => ({
        ...states,
        countries: {
          ...states.countries,
          data: [...states.countries.data, ...res?.data.body],
          loader: false,
        },
      }));

    return {
      data: res?.data.body,
      error: null,
      loader: false,
    };
  } catch (error: any) {
    str &&
      str.setState((states) => ({
        countries: {
          ...states.countries,
          error: error.message ? error.message : 'we have problem',
          loader: false,
        },
      }));

    return {
      data: [],
      error: error.message ? error.message : 'we have problem',
      loader: false,
    };
  }
};
