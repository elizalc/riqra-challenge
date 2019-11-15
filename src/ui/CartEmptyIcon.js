import React from 'react';

const CartEmptyIcon = ({ color }) => {

  return (
    <svg width={54} height={46} fill="none">
      <path
        d="M51.889 17.527h-4.533L32.778 1.26a1.794 1.794 0 00-2.667 2.4l12.445 13.956H11.445L23.889 3.66a1.794 1.794 0 00-2.667-2.4L6.733 17.527H2.111a1.778 1.778 0 000 3.556H51.89a1.778 1.778 0 100-3.556zM9.222 45.972h35.556l4.266-21.334h-44l4.178 21.334z"
        fill={color}
      />
    </svg>
  )
}

export default CartEmptyIcon;