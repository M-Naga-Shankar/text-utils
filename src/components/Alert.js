import React from 'react'

export default function Alert(probs) {
    return (
      <div className={'alert alert-' + probs.title} role="alert">
        {probs.msg}
      </div>
    );
  }
  