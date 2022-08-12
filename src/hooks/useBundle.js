import { useState } from 'react';

const useBundle = () => {
  const [bundle, setBundle] = useState([]);

  const addProduct = (product) => {
    const newArray = bundle.filter(item => product.id == item.id);
    if(newArray.length < 1) {
      if (bundle.length < 3) {
        setBundle([...bundle, product]);
      }
    }
  };

  const removeProduct = (product) => {
    const newArray = bundle.filter(item => product.id != item.id);
    setBundle(newArray);
  };

  return {
    bundle: bundle,
    disable: bundle.length == 3 ? true : false,
    addProduct,
    removeProduct
  };
};

export default useBundle;
