import dynamic from 'next/dynamic';
import { ForwardedRef, forwardRef, useEffect, useRef, useState } from 'react';
import { Viewer, ViewerProps } from '@toast-ui/react-editor';

// import axios from 'axios';

const ViewerDynamic = dynamic(() => import('./Viewer'), {
  ssr: false,
});

const ViewerForwardRef = forwardRef(
  (props: ViewerProps, ref: ForwardedRef<Viewer>) => {
    return <ViewerDynamic {...props} forwardedRef={ref} />;
  }
);

ViewerForwardRef.displayName = 'Viewer';
type contentType = {
  value: string;
};

const ToastViewer = ({ value }: contentType) => {
  return <ViewerForwardRef initialValue={value} />;
};

export default ToastViewer;
