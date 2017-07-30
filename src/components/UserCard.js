import React from 'react';

export default ({name, image, id}) => <div>
  <div>{name}</div>
  <image src={image} />
  <div>{id}</div>
</div>