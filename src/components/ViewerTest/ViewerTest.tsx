import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ToastViewer from '../ViewerTest/ToastViewer';

const WritePost = () => {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    const valueExam =
      '**type here!** \n# hi\n## hello\n*byeddddd*\n\n| hi |hello  |\n| --- | --- |\n|  aa|bb  |';
    setValue(valueExam);
  }, []);

  return (
    <div>
      <ToastViewer value={value} />
    </div>
  );
};

export default WritePost;
