import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';

function AddressService({ cep, setValue, setCepError }) {
  const [addressLoading, setAddressLoading] = useState(false);

  useEffect(() => {
    // Remove any non-digit characters from the CEP
    const formattedCep = cep.replace(/\D/g, '');

    // Check if the CEP length is 8 after formatting
    if (formattedCep.length === 8) {
      setAddressLoading(true);
      axios.get(`https://cep.awesomeapi.com.br/json/${formattedCep}`)
        .then(response => {
          const { address, district, city, state, lng, lat } = response.data;
          setValue("endereco", address);
          setValue("bairro", district); 
          setValue("cidade", city);
          setValue("estado", state);
          setValue("longitude", lng || '');
          setValue("latitude", lat || '');
          setCepError(null); 
        })
        .catch(() => {
          setCepError("CEP não encontrado.");
        })
        .finally(() => {
          setAddressLoading(false);
        });
    } else {
      setCepError("CEP inválido.");
    }
  }, [cep, setValue, setCepError]);

  return addressLoading ? <p>Carregando...</p> : null;
}

AddressService.propTypes = { 
  cep: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  setCepError: PropTypes.func.isRequired,
};

export default AddressService;
