import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import axios from 'axios'

function AddressService({ cep, setValue, setCepError }) {
    const [addressLoading, setAddressLoading] = useState(false);
  
    useEffect(() => {
      if (typeof cep === 'string' && cep.length === 8) { // Verifica se o CEP tem 8 dígitos
        setAddressLoading(true);
        axios.get(`https://cep.awesomeapi.com.br/json/${cep}`)
          .then(response => {
            //console.log(response.data)
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
      }
    }, [cep, setValue, setCepError]);

  return addressLoading ? <p>Carregando...</p> : null;
}

export default AddressService;

AddressService.propTypes = { 
    cep: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    setCepError: PropTypes.func.isRequired,
  };

 