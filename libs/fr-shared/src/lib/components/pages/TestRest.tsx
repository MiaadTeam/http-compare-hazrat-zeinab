import { useEffect } from 'react';
import { TemplateLayout } from '../template/templateLayout';
import { getCountries, useStore } from "fr-state"

export const TestRest = () => {

  const countries = useStore((state) => state.countries)

  useEffect(() => {
    getCountries(1, 10)
  }, [])

  return (
    <TemplateLayout>
      {countries.loader && (<div>is looooooading</div>)}
      {countries.data.map(country => (
        <>
          <h1>{country.name} </h1>
          {country.provinces && country.provinces.map(province => (
            <>
              <h3>{province.name} </h3>
              {province.cities && province.cities.map(city => (
                <h6>{city.name} </h6>
              ))}
            </>
          ))}
        </>
      ))}
    </TemplateLayout>
  );
};
