import React from 'react';
import {ColorRing} from "react-loader-spinner";

import './loading.scss'

const Loading = () => {
  return (
    <div className='loading'>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperClass="blocks-wrapper"
        colors={['#454545', '#454545', '#454545', '#454545', '#454545']}
      />
    </div>
  );
};

export default Loading;