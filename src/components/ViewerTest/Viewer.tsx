import '@toast-ui/editor/dist/toastui-editor.css';
import { Viewer } from '@toast-ui/react-editor';

const ViewerComponent = (props: any) => {
  const { forwardedRef } = props;
  return (
    <>
      <Viewer {...props} ref={forwardedRef} />
    </>
  );
};

ViewerComponent.displayName = 'Viewer';
export default ViewerComponent;
